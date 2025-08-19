// ATM Simulator System - JavaScript Implementation
class ATMSystem {
    constructor() {
        this.currentUser = null;
        this.accounts = this.loadAccounts();
        this.currentTransactionType = null;
        this.init();
    }

    init() {
        // Load existing accounts from localStorage
        if (this.accounts.length === 0) {
            // Create demo accounts
            this.createDemoAccounts();
        }
    }

    createDemoAccounts() {
        const demoAccounts = [
            {
                cardNumber: '1234567812345678',
                pin: '1234',
                name: 'John Doe',
                balance: 5000.00,
                transactions: [
                    { type: 'Deposit', amount: 1000, date: new Date(Date.now() - 86400000).toLocaleString() },
                    { type: 'Withdrawal', amount: -200, date: new Date(Date.now() - 43200000).toLocaleString() }
                ]
            },
            {
                cardNumber: '9876543210987654',
                pin: '9876',
                name: 'Jane Smith',
                balance: 2500.00,
                transactions: [
                    { type: 'Deposit', amount: 500, date: new Date(Date.now() - 172800000).toLocaleString() }
                ]
            }
        ];
        
        this.accounts = demoAccounts;
        this.saveAccounts();
    }

    loadAccounts() {
        const saved = localStorage.getItem('atmAccounts');
        return saved ? JSON.parse(saved) : [];
    }

    saveAccounts() {
        localStorage.setItem('atmAccounts', JSON.stringify(this.accounts));
    }

    findAccount(cardNumber, pin) {
        return this.accounts.find(account => 
            account.cardNumber === cardNumber && account.pin === pin
        );
    }

    generateCardNumber() {
        let cardNumber = '';
        for (let i = 0; i < 16; i++) {
            cardNumber += Math.floor(Math.random() * 10);
        }
        return cardNumber;
    }

    addTransaction(cardNumber, type, amount) {
        const account = this.accounts.find(acc => acc.cardNumber === cardNumber);
        if (account) {
            account.transactions.unshift({
                type: type,
                amount: amount,
                date: new Date().toLocaleString()
            });
            
            // Keep only last 10 transactions
            if (account.transactions.length > 10) {
                account.transactions = account.transactions.slice(0, 10);
            }
            
            this.saveAccounts();
        }
    }

    updateBalance(cardNumber, amount) {
        const account = this.accounts.find(acc => acc.cardNumber === cardNumber);
        if (account) {
            account.balance += amount;
            this.saveAccounts();
            this.updateBalanceDisplay();
        }
    }

    updateBalanceDisplay() {
        if (this.currentUser) {
            const balanceElement = document.getElementById('balanceDisplay');
            if (balanceElement) {
                balanceElement.textContent = `Balance: $${this.currentUser.balance.toFixed(2)}`;
            }
        }
    }

    showMessage(text, type = 'info') {
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        
        const activeScreen = document.querySelector('.screen.active');
        activeScreen.insertBefore(message, activeScreen.firstChild);
        
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
}

// Create global ATM instance
const atm = new ATMSystem();

// Screen Management Functions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Login Functions
function signIn() {
    const cardNumber = document.getElementById('cardNo').value.trim();
    const pin = document.getElementById('pin').value.trim();

    if (!cardNumber || !pin) {
        atm.showMessage('Please enter both card number and PIN', 'error');
        return;
    }

    if (cardNumber.length !== 16) {
        atm.showMessage('Card number must be 16 digits', 'error');
        return;
    }

    if (pin.length !== 4) {
        atm.showMessage('PIN must be 4 digits', 'error');
        return;
    }

    const account = atm.findAccount(cardNumber, pin);
    if (account) {
        atm.currentUser = account;
        showScreen('transactionsScreen');
        atm.updateBalanceDisplay();
        atm.showMessage(`Welcome, ${account.name}!`, 'success');
    } else {
        atm.showMessage('Incorrect Card Number or PIN', 'error');
    }
}

function clearForm() {
    document.getElementById('cardNo').value = '';
    document.getElementById('pin').value = '';
}

function showLogin() {
    showScreen('loginScreen');
    clearForm();
}

function showSignup() {
    showScreen('signupScreen');
    document.getElementById('newName').value = '';
    document.getElementById('newCardNo').value = '';
    document.getElementById('newPin').value = '';
    document.getElementById('initialDeposit').value = '';
}

// Signup Functions
function generateCardNumber() {
    const cardNumber = atm.generateCardNumber();
    document.getElementById('newCardNo').value = cardNumber;
}

function createAccount() {
    const name = document.getElementById('newName').value.trim();
    const cardNumber = document.getElementById('newCardNo').value.trim();
    const pin = document.getElementById('newPin').value.trim();
    const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);

    if (!name || !cardNumber || !pin || !initialDeposit) {
        atm.showMessage('Please fill all fields', 'error');
        return;
    }

    if (cardNumber.length !== 16) {
        atm.showMessage('Please generate a card number first', 'error');
        return;
    }

    if (pin.length !== 4) {
        atm.showMessage('PIN must be 4 digits', 'error');
        return;
    }

    if (initialDeposit < 100) {
        atm.showMessage('Initial deposit must be at least $100', 'error');
        return;
    }

    // Check if card number already exists
    if (atm.findAccount(cardNumber, pin)) {
        atm.showMessage('Account with this card number already exists', 'error');
        generateCardNumber(); // Generate new number
        return;
    }

    const newAccount = {
        cardNumber: cardNumber,
        pin: pin,
        name: name,
        balance: initialDeposit,
        transactions: [{
            type: 'Initial Deposit',
            amount: initialDeposit,
            date: new Date().toLocaleString()
        }]
    };

    atm.accounts.push(newAccount);
    atm.saveAccounts();
    
    atm.showMessage('Account created successfully! Please login with your credentials.', 'success');
    
    setTimeout(() => {
        showLogin();
        document.getElementById('cardNo').value = cardNumber;
    }, 2000);
}

// Transaction Functions
function showDeposit() {
    atm.currentTransactionType = 'deposit';
    document.getElementById('modalTitle').textContent = 'Deposit Money';
    document.getElementById('modalBody').innerHTML = `
        <div class="input-group">
            <label for="depositAmount">Enter Amount:</label>
            <input type="number" id="depositAmount" placeholder="Enter amount to deposit" min="1" step="0.01">
        </div>
    `;
    document.getElementById('confirmBtn').textContent = 'DEPOSIT';
    document.getElementById('transactionModal').classList.add('show');
}

function showWithdraw() {
    atm.currentTransactionType = 'withdraw';
    document.getElementById('modalTitle').textContent = 'Withdraw Money';
    document.getElementById('modalBody').innerHTML = `
        <div class="input-group">
            <label for="withdrawAmount">Enter Amount:</label>
            <input type="number" id="withdrawAmount" placeholder="Enter amount to withdraw" min="1" step="0.01" max="${atm.currentUser.balance}">
        </div>
        <p style="color: #666; font-size: 0.9rem; margin-top: 10px;">
            Available Balance: $${atm.currentUser.balance.toFixed(2)}
        </p>
    `;
    document.getElementById('confirmBtn').textContent = 'WITHDRAW';
    document.getElementById('transactionModal').classList.add('show');
}

function fastCash() {
    atm.currentTransactionType = 'fastCash';
    document.getElementById('modalTitle').textContent = 'Fast Cash';
    document.getElementById('modalBody').innerHTML = `
        <p style="margin-bottom: 20px;">Select amount to withdraw:</p>
        <div class="fast-cash-grid">
            <button class="fast-cash-btn" onclick="selectFastCash(20)">$20</button>
            <button class="fast-cash-btn" onclick="selectFastCash(50)">$50</button>
            <button class="fast-cash-btn" onclick="selectFastCash(100)">$100</button>
            <button class="fast-cash-btn" onclick="selectFastCash(200)">$200</button>
            <button class="fast-cash-btn" onclick="selectFastCash(500)">$500</button>
            <button class="fast-cash-btn" onclick="selectFastCash(1000)">$1000</button>
        </div>
        <p style="color: #666; font-size: 0.9rem; margin-top: 15px;">
            Available Balance: $${atm.currentUser.balance.toFixed(2)}
        </p>
    `;
    document.getElementById('confirmBtn').style.display = 'none';
    document.getElementById('transactionModal').classList.add('show');
}

function selectFastCash(amount) {
    if (amount > atm.currentUser.balance) {
        atm.showMessage('Insufficient funds', 'error');
        return;
    }
    
    atm.updateBalance(atm.currentUser.cardNumber, -amount);
    atm.addTransaction(atm.currentUser.cardNumber, 'Fast Cash Withdrawal', -amount);
    atm.currentUser.balance -= amount;
    
    closeModal();
    atm.showMessage(`Successfully withdrew $${amount.toFixed(2)}`, 'success');
}

function changePin() {
    atm.currentTransactionType = 'changePin';
    document.getElementById('modalTitle').textContent = 'Change PIN';
    document.getElementById('modalBody').innerHTML = `
        <div class="input-group">
            <label for="currentPin">Current PIN:</label>
            <input type="password" id="currentPin" placeholder="Enter current PIN" maxlength="4">
        </div>
        <div class="input-group">
            <label for="newPin">New PIN:</label>
            <input type="password" id="newPin" placeholder="Enter new 4-digit PIN" maxlength="4">
        </div>
        <div class="input-group">
            <label for="confirmNewPin">Confirm New PIN:</label>
            <input type="password" id="confirmNewPin" placeholder="Confirm new PIN" maxlength="4">
        </div>
    `;
    document.getElementById('confirmBtn').textContent = 'CHANGE PIN';
    document.getElementById('confirmBtn').style.display = 'inline-block';
    document.getElementById('transactionModal').classList.add('show');
}

function balanceEnquiry() {
    atm.showMessage(`Your current balance is: $${atm.currentUser.balance.toFixed(2)}`, 'info');
}

function miniStatement() {
    document.getElementById('stmtCardNo').textContent = 
        atm.currentUser.cardNumber.replace(/(\d{4})/g, '$1 ');
    document.getElementById('stmtBalance').textContent = atm.currentUser.balance.toFixed(2);
    
    const historyDiv = document.getElementById('transactionHistory');
    historyDiv.innerHTML = '';
    
    if (atm.currentUser.transactions.length === 0) {
        historyDiv.innerHTML = '<p style="text-align: center; color: #666;">No transactions found</p>';
    } else {
        atm.currentUser.transactions.forEach(transaction => {
            const transactionDiv = document.createElement('div');
            transactionDiv.className = 'transaction-item';
            
            const amountClass = transaction.amount > 0 ? 'credit' : 'debit';
            const amountSign = transaction.amount > 0 ? '+' : '';
            
            transactionDiv.innerHTML = `
                <div>
                    <div class="transaction-type">${transaction.type}</div>
                    <div style="font-size: 0.9rem; color: #666;">${transaction.date}</div>
                </div>
                <div class="transaction-amount ${amountClass}">
                    ${amountSign}$${Math.abs(transaction.amount).toFixed(2)}
                </div>
            `;
            
            historyDiv.appendChild(transactionDiv);
        });
    }
    
    document.getElementById('statementModal').classList.add('show');
}

function exitATM() {
    atm.currentUser = null;
    showLogin();
    atm.showMessage('Thank you for using our ATM service!', 'info');
}

// Transaction Processing
function processTransaction() {
    if (!atm.currentTransactionType) return;

    switch (atm.currentTransactionType) {
        case 'deposit':
            processDeposit();
            break;
        case 'withdraw':
            processWithdraw();
            break;
        case 'changePin':
            processChangePin();
            break;
    }
}

function processDeposit() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    
    if (!amount || amount <= 0) {
        atm.showMessage('Please enter a valid amount', 'error');
        return;
    }

    if (amount > 10000) {
        atm.showMessage('Maximum deposit limit is $10,000', 'error');
        return;
    }

    atm.updateBalance(atm.currentUser.cardNumber, amount);
    atm.addTransaction(atm.currentUser.cardNumber, 'Deposit', amount);
    atm.currentUser.balance += amount;
    
    closeModal();
    atm.showMessage(`Successfully deposited $${amount.toFixed(2)}`, 'success');
}

function processWithdraw() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    
    if (!amount || amount <= 0) {
        atm.showMessage('Please enter a valid amount', 'error');
        return;
    }

    if (amount > atm.currentUser.balance) {
        atm.showMessage('Insufficient funds', 'error');
        return;
    }

    if (amount > 2000) {
        atm.showMessage('Maximum withdrawal limit is $2,000', 'error');
        return;
    }

    atm.updateBalance(atm.currentUser.cardNumber, -amount);
    atm.addTransaction(atm.currentUser.cardNumber, 'Withdrawal', -amount);
    atm.currentUser.balance -= amount;
    
    closeModal();
    atm.showMessage(`Successfully withdrew $${amount.toFixed(2)}`, 'success');
}

function processChangePin() {
    const currentPin = document.getElementById('currentPin').value;
    const newPin = document.getElementById('newPin').value;
    const confirmNewPin = document.getElementById('confirmNewPin').value;
    
    if (!currentPin || !newPin || !confirmNewPin) {
        atm.showMessage('Please fill all PIN fields', 'error');
        return;
    }

    if (currentPin !== atm.currentUser.pin) {
        atm.showMessage('Current PIN is incorrect', 'error');
        return;
    }

    if (newPin.length !== 4) {
        atm.showMessage('New PIN must be 4 digits', 'error');
        return;
    }

    if (newPin !== confirmNewPin) {
        atm.showMessage('New PINs do not match', 'error');
        return;
    }

    if (newPin === currentPin) {
        atm.showMessage('New PIN must be different from current PIN', 'error');
        return;
    }

    // Update PIN in account
    const account = atm.accounts.find(acc => acc.cardNumber === atm.currentUser.cardNumber);
    if (account) {
        account.pin = newPin;
        atm.currentUser.pin = newPin;
        atm.saveAccounts();
    }
    
    closeModal();
    atm.showMessage('PIN changed successfully', 'success');
}

// Modal Management
function closeModal() {
    document.getElementById('transactionModal').classList.remove('show');
    atm.currentTransactionType = null;
    document.getElementById('confirmBtn').style.display = 'inline-block';
}

function closeStatementModal() {
    document.getElementById('statementModal').classList.remove('show');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add Enter key support for login
    document.getElementById('cardNo').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('pin').focus();
        }
    });
    
    document.getElementById('pin').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            signIn();
        }
    });

    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        const transactionModal = document.getElementById('transactionModal');
        const statementModal = document.getElementById('statementModal');
        
        if (e.target === transactionModal) {
            closeModal();
        }
        
        if (e.target === statementModal) {
            closeStatementModal();
        }
    });

    // Input validation for numbers only in PIN fields
    document.addEventListener('input', function(e) {
        if (e.target.type === 'password' && e.target.id.includes('pin')) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }
    });

    console.log('ATM System loaded successfully!');
    console.log('Demo accounts:');
    console.log('Card: 1234567812345678, PIN: 1234 (Balance: $5000)');
    console.log('Card: 9876543210987654, PIN: 9876 (Balance: $2500)');
});

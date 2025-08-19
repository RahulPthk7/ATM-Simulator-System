# ATM Simulator System - Web Demo

## 🏧 Live Demo
Access the live ATM simulator at: **[Your GitHub Pages URL will appear here after deployment]**

## 📋 Features
- **User Authentication**: Secure login with card number and PIN
- **Account Creation**: Create new accounts with initial deposit
- **Transaction Management**: 
  - Deposit money
  - Withdraw money
  - Fast cash withdrawal
  - Balance enquiry
  - Mini statement with transaction history
  - PIN change functionality
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Local Storage**: Data persists between browser sessions

## 🚀 Demo Accounts
For testing purposes, use these demo accounts:

| Card Number | PIN | Initial Balance |
|-------------|-----|-----------------|
| 1234567812345678 | 1234 | $5,000.00 |
| 9876543210987654 | 9876 | $2,500.00 |

## 💻 Technology Stack
- **HTML5**: Structure and semantic markup
- **CSS3**: Modern styling with flexbox/grid and animations
- **Vanilla JavaScript**: Core functionality and localStorage integration
- **Responsive Design**: Mobile-first approach

## 🎨 Design Features
- Modern gradient backgrounds
- Smooth animations and transitions
- ATM-like interface for transactions
- Modal dialogs for forms
- Color-coded transaction history
- Success/error message system

## 📱 Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔧 Local Development
1. Clone this repository
2. Navigate to the `docs` folder
3. Open `index.html` in your browser
4. Or serve locally with a simple HTTP server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

## 📚 Usage Guide

### Creating a New Account
1. Click "SIGN UP" on the login screen
2. Fill in your full name
3. Click "Generate" to create a card number
4. Set a 4-digit PIN
5. Enter initial deposit (minimum $100)
6. Click "CREATE ACCOUNT"

### Performing Transactions
1. Login with your credentials
2. Select transaction type from the main menu
3. Follow the prompts for each transaction
4. View updated balance and transaction history

### Available Transactions
- **Deposit**: Add money to your account
- **Cash Withdrawal**: Withdraw money (max $2,000 per transaction)
- **Fast Cash**: Quick withdrawal options ($20, $50, $100, $200, $500, $1000)
- **Mini Statement**: View recent transactions
- **PIN Change**: Update your security PIN
- **Balance Enquiry**: Check current balance

## 🔒 Security Features
- PIN masking in input fields
- Client-side validation
- Session management
- Secure local storage

## 📦 File Structure
```
docs/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This documentation
```

## 🚀 Deployment
This project is configured for GitHub Pages deployment. Simply enable GitHub Pages in your repository settings and point to the `docs` folder.

## 📄 License
This project is for educational purposes and demonstration of web development skills.

## 🤝 Contributing
Feel free to fork this project and submit pull requests for improvements.

---

**Note**: This is a simulation for demonstration purposes. Do not use real financial information.

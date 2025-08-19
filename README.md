# ATM Simulator System

A comprehensive Java-based ATM (Automated Teller Machine) simulator system with a graphical user interface and MySQL database integration.

## 🏧 Features

- **User Authentication**: Secure login system with card number and PIN
- **Account Management**: Complete user registration process (3-step signup)
- **Banking Operations**:
  - Deposit Money
  - Cash Withdrawal
  - Fast Cash (preset amounts)
  - Balance Enquiry
  - Mini Statement (transaction history)
  - PIN Change
- **Professional GUI**: ATM-like interface with custom graphics
- **Database Integration**: MySQL database for data persistence
- **Transaction History**: Complete audit trail of all operations

## 🛠️ Technologies Used

- **Java Swing**: For GUI development
- **MySQL**: Database management
- **JDBC**: Database connectivity
- **JCalendar**: Date picker component
- **JGoodies**: Enhanced look and feel

## 📋 Prerequisites

- Java JDK 8 or higher
- MySQL Server 8.0 or higher
- MySQL JDBC Driver (included in lib/)

## 🚀 Installation & Setup

### 1. Database Setup
```sql
-- Create database
CREATE DATABASE IF NOT EXISTS bankmanagementsystem;

-- Use the database
USE bankmanagementsystem;

-- The application will create the required tables automatically
```

### 2. Database Configuration
Update the database connection in `src/ASimulatorSystem/Conn.java`:
```java
c = DriverManager.getConnection("jdbc:mysql:///bankmanagementsystem", "root", "YOUR_PASSWORD");
```

### 3. Compilation
```bash
javac -cp ".;lib/jcalendar-1.4.jar;lib/jgoodies-common-1.2.0.jar;lib/jgoodies-looks-2.4.1.jar;mysql-connector-j-8.2.0.jar" -d build/classes src/ASimulatorSystem/*.java
```

### 4. Running the Application
```bash
java -cp "build/classes;lib/jcalendar-1.4.jar;lib/jgoodies-common-1.2.0.jar;lib/jgoodies-looks-2.4.1.jar;mysql-connector-j-8.2.0.jar" ASimulatorSystem.Login
```

## 🎯 Usage

### Test Account
- **Card Number**: `4532123456789000`
- **PIN**: `1234`

### Creating New Account
1. Click "SIGN UP" on the login screen
2. Complete the 3-step registration process:
   - Personal Details (Name, DOB, Address, etc.)
   - Additional Information (Religion, Income, Education, etc.)
   - Account Details (Account Type, Services)
3. Receive your new card number and PIN
4. Login and start using ATM services

## 📁 Project Structure

```
# 🏧 ATM Simulator System

A comprehensive ATM (Automated Teller Machine) simulator implemented in both **Java Swing** (desktop) and **HTML/CSS/JavaScript** (web) versions.

## 🌟 Live Demos

### 🌐 Web Version (GitHub Pages)
**Try it now**: `https://YOUR-USERNAME.github.io/atm-simulator-system/`

**Demo Accounts**:
- Card: `1234567812345678`, PIN: `1234` (Balance: $5,000)
- Card: `9876543210987654`, PIN: `9876` (Balance: $2,500)

### ☁️ Java Version (Render)
**Access**: `https://your-app-name.onrender.com` (After deployment)

---

## 📋 Features

### Core Functionality
- ✅ **User Authentication** - Secure login with card number and PIN
- ✅ **Account Management** - Create new accounts with initial deposits
- ✅ **Money Transactions**:
  - 💰 Deposit funds
  - 🏧 Withdraw cash
  - ⚡ Fast cash (preset amounts)
  - 💳 Balance enquiry
  - 📄 Mini statement with transaction history
  - 🔒 PIN change functionality

### Technical Features
- ✅ **Dual Implementation**: Java desktop app + Web application
- ✅ **Database Integration**: MySQL support for Java version
- ✅ **Local Storage**: Browser-based storage for web version
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile
- ✅ **Cloud Deployment**: Ready for GitHub Pages and Render

---

## 🚀 Quick Start

### Web Version (Instant Access)
1. Open `docs/index.html` in your browser
2. Use demo credentials to login
3. Explore all ATM features

### Java Version (Local Setup)
1. Ensure you have Java 8+ installed
2. Open in NetBeans IDE or compile manually:
   ```bash
   javac -cp "lib/*" src/ASimulatorSystem/*.java
   java -cp "src:lib/*" ASimulatorSystem.Login
   ```

---


## 🗄️ Database Schema

### Tables
- **login**: User authentication (formno, cardno, pin)
- **signup1**: Personal details (formno, name, fname, dob, gender, email, marital, address, city, state, pin)
- **signup2**: Additional information (formno, religion, category, income, education, occupation, pan, aadhar, scitizen, eaccount)
- **signup3**: Account details (formno, accounttype, cardno, pin, facility)
- **bank**: Transaction records (pin, date, type, amount, mode)
- **transactions**: Transaction history (id, pin, date, type, amount)

## 🔧 Configuration

### MySQL Connection
The default MySQL configuration assumes:
- Host: localhost
- Port: 3306
- Database: bankmanagementsystem
- Username: root
- Password: (set in Conn.java)

### GUI Customization
- Icons and images are located in `src/ASimulatorSystem/icons/`
- Look and feel is managed by JGoodies libraries

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


🔗 Live Demo

- 🌐 **Web Version**: [ATM Simulator (GitHub Pages)](https://rahulpthk7.github.io/ATM-Simulator-System/)  




## 🙏 Acknowledgments

- Thanks to the Java Swing community for GUI components
- MySQL for robust database management
- JCalendar and JGoodies for enhanced UI components


⭐ **Star this repository if you found it helpful!**

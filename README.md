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
ATM-Simulator-System/
├── ATM-Simulator-System/
│   ├── src/
│   │   └── ASimulatorSystem/
│   │       ├── Login.java          # Main login screen
│   │       ├── Signup.java         # User registration (Step 1)
│   │       ├── Signup2.java        # User registration (Step 2)
│   │       ├── Signup3.java        # User registration (Step 3)
│   │       ├── Transactions.java   # Main ATM menu
│   │       ├── Deposit.java        # Deposit functionality
│   │       ├── Withdrawl.java      # Withdrawal functionality
│   │       ├── FastCash.java       # Fast cash feature
│   │       ├── BalanceEquiry.java  # Balance enquiry
│   │       ├── MiniStatement.java  # Transaction history
│   │       ├── Pin.java           # PIN change
│   │       └── Conn.java          # Database connection
│   ├── build/
│   │   └── classes/               # Compiled Java classes
│   ├── icons/                     # GUI images and icons
│   └── nbproject/                 # NetBeans project files
├── lib/
│   ├── jcalendar-1.4.jar
│   ├── jgoodies-common-1.2.0.jar
│   └── jgoodies-looks-2.4.1.jar
└── mysql-connector-j-8.2.0.jar    # MySQL JDBC driver
```

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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rahul Pathak**
- Email: rahulpathak7dec@gmail.com
- GitHub: [@rahulpathak7dec](https://github.com/rahulpathak7dec)

## 🙏 Acknowledgments

- Thanks to the Java Swing community for GUI components
- MySQL for robust database management
- JCalendar and JGoodies for enhanced UI components

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact me at rahulpathak7dec@gmail.com.

---

⭐ **Star this repository if you found it helpful!**

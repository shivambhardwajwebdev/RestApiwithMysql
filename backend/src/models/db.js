const mysql = require("mysql2");
const path = require("path");

// This specifically points to the .env in your root folder
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });


   const db = mysql.createConnection({
    host: process.env.DB_HOST, // This will now be srv1826.hstgr.io
    user: process.env.DB_USER, 
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});


console.log("Checking DB_NAME from env:", process.env.DB_NAME);

db.connect((err) => {
    if (err) {
        console.error("❌ Connection failed:", err.message);
        return;
    }
    console.log("✅ Successfully connected to the MySQL database");
});

module.exports = db;
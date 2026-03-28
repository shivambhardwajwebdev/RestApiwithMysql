const db = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM auth_user WHERE email = ?`;

  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({ message: "User not found" });

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user.id }, "secretkey", { expiresIn: "1h" });

    res.json({ token });
  });
};
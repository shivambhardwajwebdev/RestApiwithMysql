const db = require("../models/db");

exports.createTeacher = (req, res) => {
  const { email, first_name, last_name, password, university_name, gender, year_joined } = req.body;

  const insertUser = `INSERT INTO auth_user (email, first_name, last_name, password) VALUES (?, ?, ?, ?)`;

  db.query(insertUser, [email, first_name, last_name, password], (err, userResult) => {
    if (err) return res.status(500).json(err);

    const userId = userResult.insertId;

    const insertTeacher = `INSERT INTO teachers (user_id, university_name, gender, year_joined) VALUES (?, ?, ?, ?)`;

    db.query(insertTeacher, [userId, university_name, gender, year_joined], (err2) => {
      if (err2) return res.status(500).json(err2);

      res.json({ message: "Teacher created successfully" });
    });
  });
};

exports.getTeachers = (req, res) => {
  const sql = `
    SELECT * FROM auth_user 
    JOIN teachers ON auth_user.id = teachers.user_id
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};
const db = require("../models/db");
const bcrypt = require("bcrypt");

exports.createTeacher = async (req, res) => {
  const {
    email,
    first_name,
    last_name,
    password,
    university_name,
    gender,
    year_joined
  } = req.body;

  try {
    // ✅ Step 1: Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Step 2: Insert into auth_user
    const userSql = `
      INSERT INTO auth_user (email, first_name, last_name, password)
      VALUES (?, ?, ?, ?)
   `;

    db.query(userSql, [email, first_name, last_name, hashedPassword], (err, userResult) => {
      if (err) return res.status(500).json(err);

      const userId = userResult.insertId;

      // ✅ Step 3: Insert into teachers
      const teacherSql = `
        INSERT INTO teachers (user_id, university_name, gender, year_joined)
        VALUES (?, ?, ?, ?)
      `;

      db.query(
        teacherSql,
        [userId, university_name, gender, year_joined],
        (err2) => {
          if (err2) return res.status(500).json(err2);

          res.json({
            message: "User + Teacher created successfully",
            user_id: userId
          });
        }
      );
    });

  } catch (error) {
    res.status(500).json(error);
  }
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
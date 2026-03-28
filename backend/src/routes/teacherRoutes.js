const express = require("express");
const { createTeacher, getTeachers } = require("../controllers/teacherController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", verifyToken, createTeacher);
router.get("/", verifyToken, getTeachers);

module.exports = router;
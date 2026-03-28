const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Add this
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// your routes
const authRoutes = require("./routes/authRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);

module.exports = app;
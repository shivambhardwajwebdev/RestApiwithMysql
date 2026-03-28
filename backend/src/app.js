const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);

module.exports = app;
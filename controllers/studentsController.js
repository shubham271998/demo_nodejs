const pool = require("../db");

// Get all students
const getAllStudents = (req, res) => {
  pool.query("SELECT * FROM users", (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.json({ message: "Get all students", data: results });
  });
};

// Get all students
const getStudentById = (req, res) => {
  pool.query("SELECT * FROM users", (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.json({ message: "Get all students", data: results });
  });
};

// Add a student
const addStudent = (req, res) => {
  const student = req.body;
  pool.query("INSERT INTO users SET ?", student, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.status(201).json({ message: "Student added successfully" });
  });
};

// Update a student
const updateStudent = (req, res) => {
  const studentId = req.params.id;
  const updatedStudent = req.body;
  pool.query(
    "UPDATE users SET ? WHERE id = ?",
    [updatedStudent, studentId],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ message: "Internal server error" });
        return;
      }
      res.json({
        message: `Student with ID ${studentId} updated successfully`,
      });
    }
  );
};

// Delete a student
const deleteStudent = (req, res) => {
  const studentId = req.params.id;
  pool.query(
    "DELETE FROM users WHERE id = ?",
    studentId,
    (error, results, fields) => {
      if (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ message: "Internal server error" });
        return;
      }
      res.json({
        message: `Student with ID ${studentId} deleted successfully`,
      });
    }
  );
};

module.exports = {
  addStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
};

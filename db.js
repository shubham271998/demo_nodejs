const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "database-1.cjcqc2ywyzyy.ap-south-1.rds.amazonaws.com",
  user: "root",
  password: "RCEnvhr64I91N6jDzvoL",
  database: "myprojectdb",
});

module.exports = pool;

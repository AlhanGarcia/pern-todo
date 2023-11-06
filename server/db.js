const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "your_password_goes_here",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;

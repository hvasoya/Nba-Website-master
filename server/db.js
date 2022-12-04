
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "tejassingh",
  password: "22032001",
  host: "localhost",
  port: 5432,
  database: "nbadb"
});

module.exports = pool;
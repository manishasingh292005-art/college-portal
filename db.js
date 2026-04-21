const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mani@2005',
  database: 'college_portal'
});
db.connect((err) => {
  if (err) { console.error('DB connection failed:', err); return; }
  console.log('MySQL connected!');
});
module.exports = db;
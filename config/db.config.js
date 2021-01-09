'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'domain-manager.cmgloznkxgin.us-east-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'test1234',
  database : 'domain_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
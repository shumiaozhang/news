// 数据库查询
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'new'
});
// db.connect();

// 导出
module.exports = db;
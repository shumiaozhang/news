// 导入db
const db = require('../tools/db_config')

// 验证邮箱
const checkEmail = (email, callback)=>{
    const sqlstr = 'SELECT * FROM `users` WHERE email=?'
    db.query(sqlstr, email, (err, data)=>{
        if(err){
            return callback(err, null);
        }
        callback(null, data);
    })
}

// 导出
exports.checkEmail = checkEmail;
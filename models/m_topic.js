// 导入数据库
const db = require('../tools/db_config');

exports.findAllTopics = (callback)=>{
    const sqlstr = 'SELECT * FROM `topics` ORDER BY `createdAt` DESC ';
    db.query(sqlstr, (err, data)=>{
        if(err){
            return callback(err, null);
        }
          callback(null, data);
  });
}

// 添加新话题
exports.addTopic = (body, callback) => {
    const sqlstr = 'INSERT INTO `topics` SET ?';
    db.query(sqlstr, body, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}

/// 根据id值找到话题
exports.findTopicById = (topicID, callback) => {
    const sqlstr = 'SELECT *FROM `topics` WHERE `id`=?';
    db.query(sqlstr, topicID, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}
// 导入
const m_topic = require('../models/m_topic');
const moment =require('moment');
// 渲染话题也
exports.showTopic = (req, res)=>{
    m_topic.findAllTopics(function(err,data){
            if(err){
                return res.send({
                    code: 500,
                    message: '服务器挂了'
                });
            }
            // console.log(data)
            res.render('index.html', {
                topics: data,
                user: req.session.user
            });
        }
    )
    
}
// 渲染发表新话题页
exports.createTopic = (req, res)=>{
    res.render('topic/create.html');
};

// 处理表单提交
exports.handleCreateTopic = (req, res)=>{
    const body = req.body;

    // moment
    body.createdAt = moment().format();

     // 为了区分当前的话题是由谁创建的 ,所以给body添加userId
     body.userId = req.session.user.id;

    m_topic.addTopic(body, (err, data)=>{
        if(err){
            return res.send({
                code: 500,
                message: '服务器又错了'
            })
        }
        // 服务端重定向
        // 使用同步请求
        //res.redirect('/) // 因为前端是ajax请求是异端请求
        
        // 为了不用重新登陆用，应该持久存储， 而expree-session 并不能持久存储
        // 添加成功
        res.send({
            code: 200,
            message: '添加新话题成功' 
        })
    })
}

//渲染话题页详情
exports.showDetail = (req, res)=>{
    // 根据id去查询
    const topicID = req.params.topicID;
    // 根据话题id值找到当前点击的话题
    // 让模型操作数据库 根据id值找到数据 返回结果
    m_topic.findTopicById(topicID, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务器又错了 哼哼哼'
            })
        }
        // 查询成功
        // res.render(V,M);

        res.render('topic/show.html', {
            topic: data[0]
        });
    });
}
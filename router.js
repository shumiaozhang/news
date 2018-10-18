// 路由模块，处理分发，找到这个请求对应的处理函数
// 导包
const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

//实例化Router
const router = express.Router();

// router 监听
// 渲染登录页面
router.get('/signin', c_user.showSignin)
    .post('/signin', c_user.handleSignin) 
    .get('/', c_topic.showTopic)
    .get('/topic/create', c_topic.createTopic)
    .post('/createTopic', c_topic.handleCreateTopic)
    .get('/topic/:topicID', c_topic.showDetail)
    .get('/signout', c_user.handleSignout);

// 导出router 给app
module.exports = router;

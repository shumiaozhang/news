// 路由模块，处理分发，找到这个请求对应的处理函数
// 导包
const express = require('express');
const c_user = require('./controllers/c_user');

//实例化Router
const router = express.Router();

// router 监听
// 渲染登录页面
router.get('/signin', c_user.showSignin)
    .post('/signin', c_user.handleSignin) // 登录表单
    .get('/topic', c_topic)
// 导出router 给app
module.exports = router;

// 控制器的职责就是cb函数，要的就是数据库处理的结果

// 导入checkEmail
const m_user = require('../models/m_user');

// 渲染登录页
exports.showSignin = (req, res) => {
    res.render("signin.html");
}
// 登录表单请求
exports.handleSignin = (req, res) => {
    // console.log('客户端发送表单成功');
    const body = req.body;
    // console.log(body);
   m_user.checkEmail(body.email, (err, data) => {
       if(err){
           return res.send({
               code: 500,
               message: '服务器出错啦，呜呜呜'
           });
       }
       console.log(data)
       // 如果邮箱不存在
        if(!data[0]){
            return res.send({
                code: 1,
                message: '邮箱不存在'
            });
        }
        // 判断密码
        if(data[0].password != body.password){
            return res.send({
                code: 2,
                message: '密码错误 再想想!'
            });
        }
        // 密码和邮箱都正确
        res.send({
            code: 200,
            message: '验证通过'
        });
   });
}
// 导出给 router

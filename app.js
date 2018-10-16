// 导包
const express = require('express'); // express
const router = require('./router'); // router
const bodyParser = require('body-parser');

// 返回实例app对象
const app = express();

// 配置包
app.engine('html', require('express-art-template')); // 简化
app.use(bodyParser.urlencoded({ extended: false })); // body-parser
// 统一处理静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));


// 路由分配
app.use(router);
// app.get('/signin', (req, res) => {
//     res.send('app')
// })
// 端口

app.listen(8080, () =>{
    console.log('It is run success');
})
var http = require('http'); //引用http模块
var server = http.createServer(); //创建http服务器并将该服务器赋值给变量server

server.on('request', function (req, res) {
    if (req.url !== '/favicon.ico') {
        console.log('接收到客户端请求。'); //中文乱码，尚未解决
    }
});

//为server服务器在接收到客户端请求时触发的request事件绑定事件处理函数
server.on('request', function (req, res) {
    if (req.url != '/favicon.ico') {
        console.log(req.url);
    }
    res.end();
});


server.on('request', function (req, res) {
    if (req.url !== '/favicon.ico') {
        console.log('发送响应完毕。');
    }
});

server.listen(1377, "127.0.0.1");

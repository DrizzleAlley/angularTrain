var http = require('http'); //����httpģ��
var server = http.createServer(); //����http�����������÷�������ֵ������server

server.on('request', function (req, res) {
    if (req.url !== '/favicon.ico') {
        console.log('���յ��ͻ�������'); //�������룬��δ���
    }
});

//Ϊserver�������ڽ��յ��ͻ�������ʱ������request�¼����¼�������
server.on('request', function (req, res) {
    if (req.url != '/favicon.ico') {
        console.log(req.url);
    }
    res.end();
});


server.on('request', function (req, res) {
    if (req.url !== '/favicon.ico') {
        console.log('������Ӧ��ϡ�');
    }
});

server.listen(1377, "127.0.0.1");

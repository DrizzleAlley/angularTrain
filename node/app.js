var testFunc = function () {
    console.log("callback funciton executed.");
}

var timer = setInterval(testFunc, 3000);

timer.unref();//ȡ���ص�����--����ʹ�ã������½�#
//timer.ref();//�ָ��ص�����
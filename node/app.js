var testFunc = function () {
    console.log("callback funciton executed.");
}

var timer = setInterval(testFunc, 3000);

timer.unref();//取消回调函数--过多使用，性能下降#
//timer.ref();//恢复回调函数
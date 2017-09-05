var testVar = "this is a variable from testModule.js";
console.log(testVar);
exports.testVar = testVar;
//if (module === require.main) {
//    console.log("this is the main module of application");
//}


var outputTestVar = function outputTestVar(name) {
    //console.log(testVar);
    console.log("this is call from " + name);
}

exports.outputTestVar = outputTestVar;
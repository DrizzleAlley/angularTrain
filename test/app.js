
// 模块引用练习
var testModule = require("../node/testModule.js");
var testModule1 = require("../node/testModule.js");

testModule.outputTestVar("wx");
testModule1.outputTestVar("fdkjfa");


delete require.cache[require.resolve("../node/testModule.js")];//清除缓存
var testModule3 = require("../node/testModule.js");

//预定义变量__filename,获取当前模块文件的带有完全绝对路径的文件名
console.log(__filename);

//预定义变量__dirname,获取当前模块文件所在目录的完整绝对路径的文件名
console.log(__dirname);
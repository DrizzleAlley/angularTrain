
// ģ��������ϰ
var testModule = require("../node/testModule.js");
var testModule1 = require("../node/testModule.js");

testModule.outputTestVar("wx");
testModule1.outputTestVar("fdkjfa");


delete require.cache[require.resolve("../node/testModule.js")];//�������
var testModule3 = require("../node/testModule.js");

//Ԥ�������__filename,��ȡ��ǰģ���ļ��Ĵ�����ȫ����·�����ļ���
console.log(__filename);

//Ԥ�������__dirname,��ȡ��ǰģ���ļ�����Ŀ¼����������·�����ļ���
console.log(__dirname);
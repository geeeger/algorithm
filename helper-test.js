var CArray = require('./helper.js');

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
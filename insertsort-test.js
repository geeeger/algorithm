var CArray = require('./helper.js');
var insertSort = require('./insertsort.js');

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();


console.log(myNums.toString());
insertSort(myNums.dataStore, function (arr, a) {
    console.log(myNums.toString(), a);
});
console.log(myNums.toString());
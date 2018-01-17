var CArray = require('./helper.js');
var shellSort = require('./shellsort.js');

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();


console.log(myNums.dataStore);
shellSort(myNums.dataStore, function (arr, gap) {
    console.log(arr, gap);
});
console.log(myNums.dataStore);


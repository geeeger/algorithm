var CArray = require('./helper.js');
var qsort = require('./qsort.js');

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();


console.log(myNums.toString());
var result = qsort(myNums.dataStore, function (prev, middle, next) {
    console.log(prev, middle, next);
});
console.log(result);


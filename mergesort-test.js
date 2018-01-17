var CArray = require('./helper.js');
var mergesort = require('./mergesort.js');

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();


console.log(myNums.toString());
var result = mergesort(myNums.dataStore, function (arr, left, right) {
    console.log('arr: ', arr);
    console.log('left: ', left);
    console.log('right: ', right);
    console.log('\n')
});
console.log(result);


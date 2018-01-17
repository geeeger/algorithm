var CArray = require('./helper.js');
var {bubbleSort1} = require('./bubblesort.js');

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();


console.log(myNums.toString());
bubbleSort1(myNums.dataStore, function () {
    console.log(myNums.toString());
});



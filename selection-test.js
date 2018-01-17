var CArray = require('./helper.js');
var selectionSourt = require('./selectionsort.js');

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();


console.log(myNums.toString());
selectionSourt(myNums.dataStore, function () {
    console.log(myNums.toString());
});


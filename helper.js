function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString () {
    var res = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        res += this.dataStore[i] + ' ';
        if (i > 0 && i % 10 === 0) {
            res += '\n';
        }
    }
    return res;
}

function swap (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

module.exports = function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for (var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
}
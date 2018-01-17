module.exports = function insertSort(arr, callback) {
    var temp;
    var inner;
    for (var outer = 1; outer < arr.length; outer++) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            callback && callback(arr, 'move index:' + (inner - 1) + ' to index:' + inner);
            arr[inner] = arr[inner - 1];
            inner--;
        }
        callback && callback(arr, 'replace index:' + inner + ' as ' + temp);
        arr[inner] = temp;
    }
}
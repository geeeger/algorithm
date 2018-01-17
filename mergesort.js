function merge(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

module.exports = function mergeSort(arr, callback) {
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    callback && callback(arr, left, right);
    return merge(mergeSort(left, callback), mergeSort(right, callback));
};

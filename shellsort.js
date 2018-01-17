module.exports = function shellSort(arr, callback) {
    var len = arr.length;
    var gap = 1;
    // 设置动态步长，不使用设计步长
    while (gap < len / 3) {
        gap = 3 * gap + 1;
    }
    while (gap >= 1) {
        for (var i = gap; i < len; i++) {
            for (var j = i; j >= gap && arr[j] < arr[j - gap]; j -= gap) {
                var temp = arr[j];
                arr[j] = arr[j - gap];
                arr[j - gap] = temp;
                callback && callback(arr, gap);
            }
        }
        gap = (gap - 1) / 3;
    }
}
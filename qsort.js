module.exports = function qSort(list, callback) {
    if (list.length === 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var privot = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < privot) {
            lesser.push(list[i]);
        }
        else {
            greater.push(list[i]);
        }
    }
    callback && callback(lesser, privot, greater);
    return qSort(lesser, callback).concat(privot, qSort(greater, callback));
}
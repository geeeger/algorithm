/**
 * 选择排序
 * @param  {[type]}   a        [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
/*
    原理就是带着从第一个开始，寻找第一个以后的最小数，和第一个进行交换
    o(2n)
 */
module.exports = function selection(a, callback) {
    var min;/*最小项的索引*/
    for (var out = 0; out < a.length - 1; out++) {//比较的次数是length-1
        min = out;
        for (var inner = out + 1; inner < a.length; inner++) {//这里是a.length，不是a.lenght-1，因为后者会导致右数第2项没法参与排序。
            if (a[inner] < a[min]) {
                min = inner;
                //将最小的项移动到左侧
            }
        }
        var tmp = a[out];
        a[out] = a[min]
        a[min] = tmp;
        callback && callback();
    }
}
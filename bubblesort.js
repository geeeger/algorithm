/**
 * 他是最慢的排序，但也是最容易实现的排序算法
 */
/*
算法原理：将前后每两个数进行比较，较大的数往后排，一轮下来最大的数就排到最后去了。然后再进行第二轮比较，第二大的数也排到倒数第二了，以此类推：

第一轮比较：

第一次比较：1，5，3，6，4，9，8，0，7，2第一个数不大于第二个数，不调换位置

第二次比较：1，3，5，6，4，9，8，0，7，2第二个数大于第三个数，调换位置

第三次比较：1，3，5，6，4，9，8，0，7，2 第三个数不大于第四个数，不调换位置

第四次比较：1，3，5，4，6，9，8，0，7，2 第四个数大于第五个数，调换位置

。。。。。以此类推

第九次比较：1，3，5，4，6，8，0，7，2，9第九个数大于第十个数，调换位置

上面就进行完了第一轮比较将最大的一个数字排到了最后面。比较次数9次

第二轮比较：

跟第一轮比较一样，但我们可以发现，最后一个数字我们不需要比较，因为那是最大的数

比较次数8次

第三轮比较：

比较次数7次

。

。

。

。

第九轮比较：

比较次数1次

从上面的分析我们可以看出我们排10个数需要比较九轮，每一轮比较由9次递减到1次

O(n^2)
 */

function bubbleSort(arrs) {
    for ( var outer = arrs.length; outer >= 2; outer--) {
        for (var inner = 0; inner < outer - 1; inner++) {
            if (arrs[inner] > arrs[inner + 1]) {
                var temp = arrs[inner];
                arrs[inner] = arrs[inner + 1];
                arrs[inner + 1] = temp;
            }
        }
    }
}

function bubbleSort1(arrs, callback) {
    for (var outer = 0; outer < arrs.length - 1; outer++) {
        for (var inner = 0; inner < arrs.length - 1 - outer; inner++) {
            if (arrs[inner] > arrs[inner + 1]) {
                var temp = arrs[inner];
                arrs[inner] = arrs[inner + 1];
                arrs[inner + 1] = temp;
            }
            callback && callback();
        }
    }
}

module.exports = {
    bubbleSort,
    bubbleSort1
}
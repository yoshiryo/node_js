var sum  = function(arr) { //arrayの合計
    var sum = 0;
    arr.forEach(function(elm) {
        sum += elm;
    });
    return sum;
};

var average = function(arr, fn) { //arrayの平均
    return sum(arr, fn)/arr.length;
};

let median = function(arr, fn) { //arrayの中央値
    let half = (arr.length/2)|0;
    let temp = arr.sort(fn);

    if (temp.length%2) {
        return temp[half];
    }

    return (temp[half-1] + temp[half])/2;
};
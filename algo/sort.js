'use strict';
let number = [2, 3, 1, 9, 4];
number.sort((a, b) => a - b); //昇順ソート
console.log(number);

number.sort((a, b) => b - a); //降順ソート
console.log(number);

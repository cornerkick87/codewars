//https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript

let cubeOdd = ((arr) => arr.map((index) => typeof (index) === 'number').includes(false) ? undefined : arr.filter((i) => i % 2).concat(0).map((x) => Math.pow(x, 3)).reduce((a, b) => a + b))
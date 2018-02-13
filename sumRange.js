var sumRange = function(num1, num2) {
    var start = Math.min(num1, num2);
    var end = Math.max(num1, num2);
    var numArray = [];

    for (var i = 0; i + start <= end; i++) {
        numArray.push(i + start);
    }

    return numArray.reduce(function(acc, curr) {
        return acc + curr;
    });
};

console.log(sumRange(2,1));
console.log(sumRange(0,80));
console.log(sumRange(-10,25));
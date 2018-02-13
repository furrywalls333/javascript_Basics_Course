var sumRange = function(num1, num2) {
    var start = Math.min(num1, num2);
    var end = Math.max(num1, num2);
    var total = 0;

    for (var i = start; i <= end; i++) {
        total += i;
    }

    return total;
};

console.log(sumRange(2,1));
console.log(sumRange(0,80));
console.log(sumRange(-10,25));
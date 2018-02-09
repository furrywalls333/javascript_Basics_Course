var longestWord = function(str) {
    var strArray = str.split(' ').reduce(function(longest, current){
        if (current.length > longest.length)
            return current;
        else
            return longest;
    })
};

console.log(longestWord('hi chloe'));
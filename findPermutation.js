var findPermutation = function(str1, str2) {
    var strArray1 = str1.split('').sort();
    var strArray2 = str2.split('').sort();
    var matchArray = [];

    for(var i = 0; i < strArray1.length; i++) {
        if (strArray1[i] != strArray2[i])
            matchArray.push(false);
        else
            matchArray.push(true);
    }

    return matchArray.reduce(function(acc, cur) {
        if (cur == false)
            return cur;
        else
            return acc;
    })

};

console.log(findPermutation('hello','lhleo'));
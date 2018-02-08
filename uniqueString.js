var uniquePhrase = function(phrase) {
    for(var i = 0; i < phrase.length; i++) {
        if(phrase.indexOf(phrase[i]) != phrase.lastIndexOf(phrase[i])) {
            return false;
        };
    };
    return true;

}

console.log(uniquePhrase("Hey!"));
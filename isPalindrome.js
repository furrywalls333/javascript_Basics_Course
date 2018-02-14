var isPalindrome = function(str) {

                var palindrome = str.replace(/\W/g, '').toLowerCase();

                return palindrome == palindrome.split('').reverse().join('');

}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('race_$c%ar'));
/**
 * @param {string} str
 */
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === [...str].reverse().join('');
}

isPalindrome('Мадам'); // true
isPalindrome('Шалаш'); // true
isPalindrome('Стол'); // false
isPalindrome('Кореной'); // false

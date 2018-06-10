//link to kata alternate-capitalization
//https://www.codewars.com/kata/alternate-capitalization/train/javascript

function capitalize(s) {
    var resEven = "";
    for (i = 0; i < s.length; i++) {
        resEven += i % 2 == 0 ? s.charAt(i).toUpperCase() : s.charAt(i);
    }
    var resOdd = "";
    for (i = 0; i < s.length; i++) {
        resOdd += i % 2 == 1 ? s.charAt(i).toUpperCase() : s.charAt(i);
    }
    return [resEven, resOdd];
};
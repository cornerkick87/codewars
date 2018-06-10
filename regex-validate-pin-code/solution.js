
//link to the solution
//https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

function validatePIN(pin) {

    res = /^\d{4}(\d{2})?$/.test(pin);
    return res
}
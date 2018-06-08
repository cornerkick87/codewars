//  https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/train/javascript


function validateUsr(username) {
  res = /^[a-z\d_]{4,16}$/.test(username);
  return res
}
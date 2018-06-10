//https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

var name = [""]
function abbrevName(name) {
  var stringToArray = name.split(" ")
  var name1 = stringToArray[0].toString().charAt(0).toUpperCase();
  var name2 = stringToArray[1].toString().charAt(0).toUpperCase();
  return name1 + "." + name2;
}
abbrevName('sam harris');
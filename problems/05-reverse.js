/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

***********************************************************************/


function reverse(str) {

  if(str.length <= 1){
    return str;
  }



return  reverse(str.slice(1)) + str[0]

}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}

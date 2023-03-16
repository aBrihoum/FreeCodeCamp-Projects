function rot13(str) {
  const max = 122;
  return str
    .toLowerCase()
    .split("")
    .map((el) => {
      if (el.match(/[a-z]/g)) {
        let charCode = el.charCodeAt() + 13;
        return charCode > max
          ? String.fromCharCode((charCode -= 26))
          : String.fromCharCode(charCode);
      } else {
        return el;
      }
    })
    .join("")
    .toUpperCase();
}

rot13("SERR PBQR PNZC");

/*
Explanation : 
- The first thing we need to do is to convert our text to lower case (A MUST !), split it, then map the result.
- After that, we convert each element of the array to its decimal equivalent using `charCodeAt()` and we add 13 to it if the latter is alphabetic, if not, we return it without touching it.
[*] ASCII Table : https://img2022.cnblogs.com/blog/740516/202209/740516-20220921023609579-1720290136.png
[*] https://i.imgur.com/UbROhJf.jpg
- If after adding 13 the total will be greater than 122, we need to subtract 26 (the English Alphabet consists of 26 letters), so we can loop over again from the start ('a').
- Why 122 you may ask ? It’s the decimal value of the last letter of the alphabet ('z').
[*] https://i.imgur.com/4IvmSRU.jpg
- Finally, we convert back our decimal to string using `fromCharCode()` and `join()` the result
*/

/*
function rot13(str) {
  const max = 90;
  return str
    .split("")
    .map((el) => {
      if (el.match(/[A-Z]/g)) {
        let charCode = el.charCodeAt() + 13;
        return charCode > max
          ? String.fromCharCode((charCode -= 26))
          : String.fromCharCode(charCode);
      } else {
        return el;
      }
    })
    .join("")
}
*/

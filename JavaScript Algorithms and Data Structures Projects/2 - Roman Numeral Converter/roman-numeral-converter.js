const table = {M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1,};

function convertToRoman(num) {
  let roman = '';
  for (const key in table) {
    const value = table[key]; // ex 1000
    while (num >= value) {
      num -= value;
      roman += key;
    }
  }
  return roman;
}

convertToRoman(1234)

/*
Explanation : 
- imagine we have as an INT : 1234, to convert it to Roman, we need to start scanning our table (Object) from the top to bottom.
if our INT >= table value, we subtract (INT - table value), and save the Roman letter.
- Ex : 1234 - 1000 = 234, the roman letter : M, and so on
- graphic example : https://prnt.sc/vj7fSNtiDQZ1
- Another example : https://prnt.sc/TCQVZgTJaGxT
*/

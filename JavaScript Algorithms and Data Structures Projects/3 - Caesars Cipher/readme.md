# Caesars Cipher

## Problem

One of the simplest and most widely known _ciphers_ is a _Caesar cipher_, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the **`ROT13`** cipher, where the values of the letters are shifted by 13 places. Thus `A ↔ N`, `B ↔ O` and so on.

Write a function which takes a **`ROT13`** encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

## Solution ✅

Check the **`.js`** file

## Explanation ℹ

So, to decode `ROT13` encoded strings, we need to move every letter by 13 place.

![alphabet](https://i.ibb.co/Km6ZPDL/download.png)

```javascript
ROT13(a) = n
// 1 + 13 = 14
ROT13(c) = p
// 3 + 13 = 16
```

But, what if the letter is for example `w`?

```javascript
23 + 13 = 36 // no letter is 36th of the alphabet
```

We exceeded the number of the english alphabet letters, the **maximum** is `26`.

To solve this, every time the total is greater (`>`) than `26`, we need to subtract `26` so we start counting from the start again.

![rot13 alphabet](https://i.ibb.co/WyPWnfF/rot13-alphabet.webp)

```javascript
ROT13(w) = j
//23 + 13 = 36 | (36>26)
//36 - 26 = 10
```

**Thats it.**

---

Now, how can we do that with `JavaScript` ?

- In `JavaScript` we have a method, that returns an integer representing the UTF-16 code unit of a string

  ```javascript
  console.log("a".charCodeAt()); // 97
  console.log("A".charCodeAt()); // 65
  console.log("z".charCodeAt()); // 122
  console.log("Z".charCodeAt()); // 90
  ```

- Unlike the english alphabet, `A` is number `65`, and `Z` is number `90`.

**⚠ Note :** All letters will be **uppercase** [Cf. Problem description]

- So, like we explained above, to decode `ROT13` encoded strings, we need to move every letter by `13` place, but this time we won't follow the alphabet table, but this table :

  ![ascii table](https://i.ibb.co/2jKP5zv/ascii-table.webp)

✳ Like mentioned above, `A` is `65`, and `Z` is `90`

- Now, because we are using the `charCodeAt()` method, we need to convert the result to a string using `String.fromCharCode()` method.

  ```javascript
  let charCode = "A".charCodeAt() + 13;
  console.log(charCode);
  // output : 78
  let str = String.fromCharCode(charCode);
  console.log(str);
  // output : N
  ```

- One more time, what if the letter is for example `W`?

  Like before, if the number after adding `13` is greater (`>`) than the decimal value of `Z` (in this case `90`), we subtract `26` (_the total number the English Alphabet_) so we start counting from the start again.

![rot13 ascii table](https://i.ibb.co/gmq6Gvx/rot13-ascii-table.webp)

```javascript
let charCode = "W".charCodeAt() + 13;
console.log(charCode);
// output : 100 > 90, so we subtract 26 :
charCode -= 26;
let str = String.fromCharCode(charCode);
console.log(str);
// output : J
```

✳ Now, lemme explain my code a lil bit.

1. First, we `split()` our string so we have an array of strings, after that we `map()` this array.

2. We convert each element of this array to its **decimal** equivalent using `charCodeAt()` and we add **`13`** to it if the latter is **alphabetic**, if not, we `return` it without touching it [Cf. problem description].

3. If after adding `13` the result exceeds the decimal value of `Z`, we subtract `26`

4. We convert back to a string with the help of `String.fromCharCode()` method

<!-- **old**
- The first thing we need to do is to convert our text to lower case, `split()` it, then `map()` the result.
- After that, we convert each element of the array to its **decimal** equivalent using `charCodeAt()` and we add **`13`** to it if the latter is **alphabetic**, if not, we return it without touching it. ([ASCII Table](https://i.ibb.co/6t82JPh/ascii-table.webp))

**Ex** : the `ROT13` of `a` is `n`

<div align="center">
<a href="https://i.ibb.co/jbgc4fq/add-13.jpg" target="_blank" rel="noopener noreferrer">
<kbd><img width="100px" src="https://i.ibb.co/jbgc4fq/add-13.jpg"></img></kbd>
</a>
</div>

- If after adding **`13`** the total will be greater than **`122`**, we need to subtract **`26`** _(the English Alphabet consists of 26 letters)_, so we can loop over again from the start (letter **A**).
- Why **`122`** you may ask ? It’s the decimal value of the last letter of the alphabet (letter **Z**).

<div align="center">
<a href="https://i.ibb.co/QktXy37/add-13-26.jpg" target="_blank" rel="noopener noreferrer">
<kbd><img width="100px" src="https://i.ibb.co/QktXy37/add-13-26.jpg"></img></kbd>
</a>
</div>

- Finally, we convert back our decimal to string using `fromCharCode()` and `join()` the result. -->

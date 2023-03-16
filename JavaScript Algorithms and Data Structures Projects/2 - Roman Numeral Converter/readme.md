# Roman Numeral Converter

## Problem

Convert the given number into a roman numeral.

<div align="center">
<a href="https://i.ibb.co/TPSWV59/roman.jpg" target="_blank" rel="noopener noreferrer">
<kbd><img width="300px" src="https://i.ibb.co/TPSWV59/roman.jpg"></img></kbd>
</a>
</div>

## Solution ✅

Check the **`.js`** file

## Explanation ℹ

<!-- ** old **
- To convert a number to its roman equivalent, we need to create an object starting from the table above

```javascript
const table = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
```

- Let’s imagine we have `number = 999`, The first step is to loop through our `Object` and check if `number >= object value`, if yes we subtract (`number - object value`) and save its `key` (object key, ex : M)

- We repeat the same procedure, but this time using the result of the subtraction

**Ex :**

```javascript
999 < 1000 not true;
999 >= 900 true, so :
we sub : 999 - 900, and save CM,
---
99 >= 90 true, so :
we sub : 99 - 90, save XC,
---
9 >= 9 true, so
we sub : 9 - 9, save IX
---
Result : CMXCIX
```

**Graphical example :**

<div align="center">
<a href="https://i.ibb.co/Khk63y0/roman-ex.png" target="_blank" rel="noopener noreferrer">
<kbd><img width="200px" src="https://i.ibb.co/Khk63y0/roman-ex.png"></img></kbd>
</a>
<a href="https://i.ibb.co/3kZVNxn/roman-ex2.png" target="_blank" rel="noopener noreferrer">
<kbd><img width="200px" src="https://i.ibb.co/3kZVNxn/roman-ex2.png"></img></kbd>
</a>
</div> -->

This problem is very simple if you just know the **`rules`** to follow.

To convert a number to its roman equivalent, you need to do some basic maths with the help of the table above.

Lets imagine we have `number = 999`

1. From the table we search for the number that's (`≥`) greater than or equal to `999` . This number is `900`
2. We subtract `999` from `900` then **save the result and the roman letter** (on this case : `CM`)
3. We repeat the same procedure but with the result of the subtraction (`99`)

```javascript
999 >= 900, so :
we sub : 999 - 900, save CM,
---
99 >= 90, so :
we sub : 99 - 90, save XC,
---
9 >= 9, so
we sub : 9 - 9, save IX
---
Result : CMXCIX
```

### Full Examples

![numeral to roman](https://i.ibb.co/kmWkFSD/roman.webp)

ℹ I think after this explanation, the code is clear, but its okay, lets get back to it and explain it.

1. We need to create an object starting from the table above.

   ```javascript
   const table = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1,
   };
   ```

2. After that we need an empty string so we can save our roman letters to it.

   ```javascript
   let roman = "";
   ```

3. And finally we loop thought the `Object` with the help of `for in` and :

   - while we have `number >= (Object value)` we subtract `number - (Object value)`, and save the `Object key` to the string we just created.

   ```javascript
   for (const key in table) { // We loop
   const value = table[key]; // (Object value), ex : 1000
   while (num >= value) { // number >= (Object value)
   num -= value; // number - (Object value)
   roman += key; // saving the (Object key), ex : IX
   ```

   - **⚠ Note :**

   ```javascript
   object = {
     name: "Doe", // name is the Object `key` , "Doe" is the Object `value`
   };
   ```

Pretty simple huh ?

# [Roman Numeral Converter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)

## Description

<details>

 <summary>Click me</summary>
 
 Convert the given number into a roman numeral.

![roman table](https://i.ibb.co/TPSWV59/roman.jpg)

{% endcollapsible %}

 </details>

## Solution ✅

Check the **`.js`** file

## Explanation ℹ

This problem is very simple if you just know the **`rules`** to follow.

To convert a **number** to its **Roman** equivalent, you need to do some basic maths with the help of the table above.

Let's imagine we have `number = 999`

1. From the table _(cf. Problem description)_, we search for the number that's (`≥`) greater than or equal to `999`.
   - This number would be `900`.
2. We subtract `999` from `900` and **save the Roman letter**.
   - On this case, we save : `CM`
3. We repeat the same procedure but with the **result** of the subtraction.
   - The result is : `99`

```javascript
999 >= 900, so :
we sub : 999 - 900, save CM,
----
99 >= 90, so :
we sub : 99 - 90, save XC,
----
9 >= 9, so
we sub : 9 - 9, save IX
----
Result : CMXCIX
```

#### Full Examples

![numeral to roman](https://i.ibb.co/kmWkFSD/roman.webp)

---

✳ Now, let's write some JavaScript.

1. We need to create an `object` starting from the table above.

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

2. After that we need an empty `string` so we can save our `Roman` letters to it.

   ```javascript
   let roman = "";
   ```

3. And finally we loop thought the `object` with the help of `for in` and :

   - While `number >= (object value)` we subtract `number - (object value)`, and save the `object key` to the empty string we just created.

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

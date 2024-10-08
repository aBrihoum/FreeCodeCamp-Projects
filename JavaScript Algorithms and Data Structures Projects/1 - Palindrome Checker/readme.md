# [Palindrome Checker](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)

## Description

<details>

 <summary>Click me</summary>

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A _palindrome_ is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note**: You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `racecar`, `RaceCar`, and `race CAR` among others.

We'll also pass strings with special symbols, such as `2A3*3a2`, `2A3 3a2`, and `2_A3*3#A2`.

</details>

## Solution ✅

Check the **`.js`** file

## Explanation ℹ

This problem is direct and simple :

1. The first thing to do is to convert our string to `lower case` using `toLowerCase()` method.

   - We need to because `"eyE" !== "Eye"`

   ```javascript
   console.log("TesT".toLowerCase());
   //output : "test"
   ```

2. After that we filter **any non-alphanumeric** characters with the help of `regEx` and `replace()` method.

   ```javascript
   console.log("_test55^".replace(/[^a-z0-9]/g, ""));
   //output : "test55"
   ```

3. Now we need to reverse our string so we can compare it to the original :

   - `split()` our string so we have an array of strings.
   - `reverse()` the array.
   - `join()` to return a string from the reversed array.

   ```javascript
   let str = "happy";
   console.log(str.split(""));
   //output : [ 'h', 'a', 'p', 'p', 'y' ]
   console.log(str.split("").reverse());
   //output : [ 'y', 'p', 'p', 'a', 'h' ]
   console.log(str.split("").reverse().join(""));
   //output : 'yppah'
   ```

4. The last step is to compare the original string to the reversed one, if returned `true`, the latter is a **palindrome**

```javascript
return str === strReversed;
```

# [Cash Register](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)

## Description

<details>

 <summary>Click me</summary>
 
 Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.

Return` {status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

| Currency Unit       | Amount             |
| ------------------- | ------------------ |
| Penny               | $0.01 (PENNY)      |
| Nickel              | $0.05 (NICKEL)     |
| Dime                | $0.1 (DIME)        |
| Quarter             | $0.25 (QUARTER)    |
| Dollar              | $1 (ONE)           |
| Five Dollars        | $5 (FIVE)          |
| Ten Dollars         | $10 (TEN)          |
| Twenty Dollars      | $20 (TWENTY)       |
| One-hundred Dollars | $100 (ONE HUNDRED) |

See below for an example of a cash-in-drawer array:

```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
```

 </details>

## Solution

Check the **`.js`** file

## Explanation ℹ

Ahh! The famous _`Cash Register`_ problem. It's actually quite easy to understand once you grasp it correctly. Trust me, once you get it, you'll see how straightforward it is.

✳ First of all, I need to explain to you the `cash-in-drawer array`

```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
```

- Take a look at the `PENNY` element. `1.01` is the **total value** in dollars worth of `PENNIES`, in other words, the drawer have `$1.01` worth of pennies, this means we have `101 PENNY`, because every `PENNY` is worth `$0.01`

- We also have `$2.05` worth of `NICKELS`, this means the drawer have `41 NICKEL`, because every `NICKEL` is worth `$0.05`, and so on...

✳ That in mind, let's have a **real example** first so we can move forward.

Imagine you buy something that costs `$5`, and you give the seller `$20`. The **change** would be `$15`.

Technically, the seller could return the change amount in `dimes`, `nickels`, or `pennies` if they have enough, but ideally they would return **one $10 bill** and **one $5 bill** (_from the highest value bill to the lowest_).

---

✳ Now, let's write some JavaScript.

1. We need first to calculate the change.

   - The change is the amount of `cash` the buyer gave minus the `price` of the purchased item.

   ```javascript
   let change = Number((cash - price).toFixed(2));
   // we limited the decimals to two, using toFixed() method, it will also round the number
   // ex `5.1799.toFixed(2)` will output : 5.18
   // and converted the result to a number using `Number()` method
   ```

2. We need to calculate the total value of the money we have the drawer in dollars.

   ```javascript
   const totalCid = Number(cid.reduce((sum, el) => sum + el[1], 0).toFixed(2));
   // cid is the `cash-in-drawer array`
   // to understand the `reduce()` method, watch : https://youtu.be/g1C40tDP0Bk
   ```

3. We need to know the value or the equivalent of each bill/coin in dollars.

   ```javascript
   const rate = {
     PENNY: 0.01, // this means a PENNY is worth $0.01
     NICKEL: 0.05,
     DIME: 0.1,
     QUARTER: 0.25,
     ONE: 1,
     FIVE: 5,
     TEN: 10,
     TWENTY: 20,
     "ONE HUNDRED": 100,
   };
   ```

4. Now, we need to check :

   - If `totalCid === change`, we return `CLOSED`.
   - If `totalCid < change`, we return `INSUFFICIENT_FUNDS`.
   - If `totalCid > change`, we return `OPEN` and **calculate** the correct amount of the change to be returned.

   ```javascript
   if (totalCid === change) {
     return { status: "CLOSED", change: cid };
   } else if (totalCid < change) {
     return { status: "INSUFFICIENT_FUNDS", change: [] };
   } else {
     // here, we calculate the correct amount of the change to be returned.
     // check step 5
   }
   ```

5. Now, inside the last **else** block, we need to :

   - Create a variable in which we will store the change to return.
   - Reverse the `cid` **array** so that it is in **descending order** (_from the highest value to the lowest_). See the real example I explained above for why this is necessary.
   - Loop the array.

     ```javascript
     let changeArray = [];
     cid.reverse().forEach((el) => {
       // check step 6
     });
     ```

6. Now inside the loop, for each element of the array, we set some variables for :

   - The name of the coin, for example `PENNY`.
   - The total value of the coins we have in the drawer in dollars, for example `1.01`.
   - The value or the equivalent of the coin in dollars, we pick it from the rates object we created in **step 3**, for example `20`.
   - How many coins I have available, for example we have `$1.01` worth of `PENNIES`, and each `PENNY` is worth `$0.01`, this means we have `101` `PENNY`.

     ```javascript
     cid.reverse().forEach((el) => {
       const coinName = el[0]; // PENNY
       const coinTotalValueInDollars = Number(el[1]); // 1.01
       const selectedCurrency = Number(rate[coinName]);
       // rate['PENNY'] -> output : 0.01
       let coinsAvailable = Number(
         (coinTotalValueInDollars / selectedCurrency).toFixed(2)
       );
       // 1.01 / 0.01 -> output : 101
     });
     ```

---

✳ Before continuing, let's first have another real example on how we calculate the right amount of change to be returned using the following `cash-in-drawer array` :

```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
```

- From the array, and with the help of the rates _object_, we have in the drawer :

| Currency    | Number of bills/coins |
| ----------- | --------------------- |
| ONE HUNDRED | 1                     |
| TWENTY      | 3                     |
| TEN         | 2                     |
| FIVE        | 11                    |
| ONE         | 90                    |
| QUARTER     | 17                    |
| DIME        | 31                    |
| NICKEL      | 41                    |
| PENNY       | 101                   |

ℹ You read the table this way : We have **3** twenty-dollar bills

![fcc Cash Register](https://i.ibb.co/PGTnpyq/money.webp)

- Now, if you buy something worth `$9.50` and you give the seller `$100`, the change would be `$90.5`. To calculate the amount to return :

  - From the currencies we have in the cash drawer (picture above), we search for the one that's (`≤`) less than or equal to the change :
    - Can't be `$100` because `$90.5` > `$100`.
    - The next currency is `$20`, and that's the right one.
  - If we have enough bills/coins of the selected currency, we subtract, if not, we move to the next currency and so on.

![fcc Cash Register](https://i.ibb.co/zZRnVfm/cash.webp)

---

Now, to implement this with code, we use the `while` statement :

- While **change** `≥` **selected currency** `and` we have **enough** bills/coins, we subtract and **save** how many bills/coins we gave.

```javascript
let coinsToReturn = 0; // we didn't give any bills/coins yet
while (change >= selectedCurrency && coinsAvailable > 0) {
  change = Number((change - selectedCurrency).toFixed(2));
  --coinsAvailable; // decrement the total by 1 (-1)
  ++coinsToReturn; // increment the total by 1 (+1)
}
```

- If `coinsToReturn > 0`, it means we gave some bills/coins, so we push to the empty array we created on **step 5** the **currency name** and the **total** in dollars we gave worth of this currency.

```javascript
if (coinsToReturn > 0) {
  changeArray.push([coinName, coinsToReturn * selectedCurrency]);
}
```

- Finally, we need to check, if `change = 0`, this means we can return the amount of change, if not, we have insufficient funds.

```javascript
if (change === 0) {
  return { status: "OPEN", change: changeArray };
} else {
  return { status: "INSUFFICIENT_FUNDS", change: [] };
}
```

✅ Thats it, we finished 🎉🎉.

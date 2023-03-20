const rate = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  const totalCid = Number(cid.reduce((sum, el) => sum + el[1], 0).toFixed(2));
  let change = Number((cash - price).toFixed(2));

  if (totalCid === change) {
    return { status: "CLOSED", change: cid };
  } else if (totalCid < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    let changeArray = [];
    cid.reverse().forEach((el) => {
      const coinName = el[0];
      const coinTotalValueInDollars = Number(el[1]);
      const selectedCurrency = Number(rate[coinName]);
      let coinsAvailable = Number(
        (coinTotalValueInDollars / selectedCurrency).toFixed(2)
      );
      let coinsToReturn = 0;
      while (change >= selectedCurrency && coinsAvailable > 0) {
        change = Number((change - selectedCurrency).toFixed(2));
        --coinsAvailable;
        ++coinsToReturn;
      }
      if (coinsToReturn > 0) {
        changeArray.push([coinName, coinsToReturn * selectedCurrency]);
      }
    });
    if (change === 0) {
      return { status: "OPEN", change: changeArray };
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

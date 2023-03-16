function palindrome(str) {
  const filteredStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = filteredStr.split("").reverse().join("");
  return filteredStr === reversedStr;
}
palindrome("eye");

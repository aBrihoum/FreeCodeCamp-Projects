function telephoneCheck(str) {
  const reg = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
  return reg.test(str);
}

telephoneCheck("1 555-555-5555");

// Thanks to regex101.com

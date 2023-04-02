function sum1(num1) {
    num1 = num11;
    return function sum2(num2) {
      num2 = num22;
      console.log(num1 + num2);
    }
  }
  let num11 = 2;
  let num22= 4;
  const sum = sum1(num11);
  sum();
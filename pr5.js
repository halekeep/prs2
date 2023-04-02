const sum = (num1, num2) => {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        console.log(Math.pow(num1, num2));
    } else {
        console.log(`Значение ${num1} или значение ${num2} не натуральные`);
    }
}
sum (2, -1);
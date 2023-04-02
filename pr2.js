function getInfOfNum(userNum) {
    let altUserNum = userNum;
    userNum = + userNum;
    if (isNaN(userNum)) {
        debugger;
        return `${altUserNum} не является числом, введите корректное значение`;
    } else {
        if (userNum > 1000) {
            debugger;
            return `Число ${userNum} больше 1000, введите корректное значение`;
        } else if (userNum < 0) {
            debugger;
            return `Число ${userNum} является отрицательным, введите корректное значение`;
        } else if (userNum % 1 !== 0) {
            debugger;
            return `Число ${userNum} не является целым, введите корректное значение`;
        } else {
            if (userNum === 1 || userNum === 0) {
                debugger;
                return `${userNum} не является простым числом`;
            } else {
                let i = 2;
                const limit = Math.sqrt(userNum);
                while (i <= limit) {
                    if (userNum % i === 0) {
                    return `${userNum} не является простым числом`;
                    }
                i++;
                }
                debugger;
                return `${userNum} простое число`;
            }
        }
    }
}

let userNum1 = prompt('Введите целое число от 0 до 1000');
alert(getInfOfNum(userNum1));
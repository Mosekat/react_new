const createPhoneNumber = (numbers) => {

    let arrNumbers = numbers;
    if (arrNumbers.length < 10 || arrNumbers.length > 10) {
        return "Введите 10 значный номер"
    }
    arrNumbers.unshift('(');

    for (let i = 0; i < arrNumbers.length; i++) {
        if (i == 3) {
            arrNumbers.splice(4, 0, ")");
            arrNumbers.splice(5, 0, ' ');
        } else if (i == 9) {
            arrNumbers.splice(9, 0, '-');
        }
    }
    let str = arrNumbers.join("");
    return str;
}

module.exports = createPhoneNumber;
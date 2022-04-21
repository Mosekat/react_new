const surname = (str) => {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == " " || arr[i] == "-") {
            arr.splice(0, i + 1);
            break;
        }
    }

    return arr.join('');
}
module.exports = surname;



let userNumb = prompt('Введите число');

function numberObj(number) {
    var numbArr = number.split('')
    var objNumber = {};
    if (numbArr.length < 3) {
        return 'Введите трехзначное число'
    }
    else if (numbArr.length > 3) {
        return null;
    }
    else {
        objNumber['hundreds'] = +numbArr[0];
        objNumber['dozens'] = +numbArr[1];
        objNumber['units'] = +numbArr[2];

    }
    return alert(`Сотни: ${objNumber['hundreds']}, Десятки:${objNumber['dozens']}, Единицы:${objNumber['units']}`);
}


numberObj(userNumb);
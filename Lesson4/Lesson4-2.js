let cart = {
    'Перчатки': 325,
    'Садовая лопата': 789,
    'Почва для посадки': 42,
    'Лейка': 213
}

function countBasketPrice(obj) {

    let result = 0;

    for (let item in obj) {
        result += obj[item]
    }
    return `Сумма товаров в корзине: ${result}`
}

alert(countBasketPrice(cart));
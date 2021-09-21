/* Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

let cart = [
    ['Перчатки', 325],
    ['Садовая лопата', 789],
    ['Почва для посадки', 42],
    ['лейка', 213]
]

function countBasketPrice(arr) {
    let summ = 0;
    for (let key of arr) {
        summ += key[1];
    }
    return `Сумма набранных товаров составляет ${summ} рублей`;
}

alert(countBasketPrice(cart));
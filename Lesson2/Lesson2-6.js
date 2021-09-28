/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
 В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) 
и вернуть полученное значение (использовать switch).*/

function addition(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    let res;
    switch (operation) {
        case "addition":
            res = addition(arg1, arg2)
            break;
        case "substraction":
            res = substraction(arg1, arg2)
            break;
        case "multiplication":
            res = multiplication(arg1, arg2)
            break;
        case "division":
            res = division(arg1, arg2)
            break;
    }
    return res;
}

console.log(mathOperation(15, 20, "substraction"));
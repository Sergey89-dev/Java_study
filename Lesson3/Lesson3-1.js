//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let firstNum = 0;
while (firstNum <= 98) {
    if (firstNum % 2 == 0) {
        firstNum += 1;
        console.log(firstNum);
    }
    firstNum++;
}
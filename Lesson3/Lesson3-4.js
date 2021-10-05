/**Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

let rows = 20
let i = 0
let pyramid = ''
while (i < rows) {
    pyramid += 'x';
    console.log(pyramid);
    i++;
}
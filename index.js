/*Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log , alert, document.write*/
/*let all = ['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,true, false];
console.log (all);
alert (all);
document.write (all);*/
/*Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
Вивести кожну змінну за допомогою: console.log , alert, document.write*/
/*all = ['hell','ow','co', 'u', 15, 100, -9, 1, 3.1456, 2.78, 716,false, true];
console.log (all);
alert (all);
document.write (all);*/

/*Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.*/
/*let firstName = 'Dasha';
let middleName = 'Serhiivna';
let lastName = 'Gerasymenko';
document.write (` <div>${firstName} ${middleName} ${lastName}</div>`);*/

/*За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років"*/
/*let firstName2 = prompt ('enter your firstName');
let middleName2 = prompt ('enter your middleNam');
let age2 = prompt ('enter your age');
document.write (`<div>Вітаю ${firstName2} ${middleName2}.Тобі ${age2} років </div>`);*/

/*За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;*/
/*let a = 100;
let b = '100';
let c = true;
console.log (typeof a);
console.log (typeof b);
console.log (typeof c);*/

/*Поставет відповідний оператор в виразах що б вийшов відповідний результат.
В однакових виразаї не використовувати однакові оператори!!!*/
/*5 < 6 -> true
5 > 6 -> false
5 = 6 -> false
5 === 6 -> false
10 = 10 -> true
10 == 10 -> true
10 > 10 -> false
10 < 10 -> false
10 !== 10 -> false
123 = '123' -> false
123 == '123' -> true*/

/*Все параматры получаем с клавиатуры!!!!
Имитируем поведение пешехода на перекстке.
Если светофор зеленый - вывести "иди".
Если светофор желтый - вывести "подожди".
Если светофор красный - вывести "стой".
Если светофор в аварийном режиме вывести "делай что хочешь"!*/

/*let col = prompt('enter the color');

if (col === 'green') {
    console.log('Иди');
} else if (col === 'red') {
    console.log('Стой');
} else if (col === 'yellow') {
    console.log('Готовься');
} else if (' ') {
    console.log('Делай что хочешь');
}*/

// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!*/
/*
let col = prompt('enter the color');
let isRoadClear = prompt('is Road Clear?Y/N');


if (col === 'green' && isRoadClear === 'No') {
    console.log('Иди');
} else if (col === 'green' && isRoadClear === 'Yes') {
    console.log('Подожди пока нарушители проедут');
} else if (col === 'yellow' && isRoadClear === 'Yes') {
    console.log('Подожди');
} else if (col === 'yellow' && isRoadClear === 'No') {
    console.log('Подожди');
} else if (col === 'red' && isRoadClear === 'No') {
    console.log('Стой');
} else if (col === 'red' && isRoadClear === 'Yes') {
    console.log('Стой');
} else if (col === '' && isRoadClear === '') {
    console.log('Делай,что хочешь');
}
*/


/*сортировать два числа*/
/*let a = prompt ('enter');
let b = prompt ('enter');
if (a<b) {console.log (a);}
else {console.log (b);}
if (b>a) {console.log (b);}
else {console.log (a);}*/






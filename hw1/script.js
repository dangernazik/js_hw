//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

let a = 'hello', b = 'owu', c = 'com', d = 'ua';
let e = 1, f = 10, g = -999, h = 123;
const PI = 3.14, i = 2.7, j = 16, k = true, l = false;

console.log(a + " " + b + " " + c + " " + d)
alert(e + " " + f + " " + g + " " + h)
document.write(PI + " " + i + " " + j + " " + k + " " + l)

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не
// об'єкт, просто за допомоги конкатенації)
let firstName = 'Telishevskyi';
let middleName = 'Nazarii';
let lastName = 'Stepanovych';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof a1, a1 + "  " + typeof b1, b1 + "  " + typeof c1, c1)

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в
// консоль
let quest1 = prompt("Ім'я")
let quest2 = prompt("По батькові")
let quest3 = +prompt("Вік")
console.log("Ти " + quest1 + " " + quest2 + " і тобі " + quest3 + " років!")



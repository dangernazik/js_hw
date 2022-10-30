//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let y = +prompt('Enter number');
if (y !== 0) {
    console.log("Вірно ви ввели не 0")
} else {
    console.log("Невірно ви ввели 0")
}
let a1 = 1, a2 = 0, a3 = -3;
if (a1 !== 0) {
    console.log('If a1(1) - ' + "Вірно")
} else {
    console.log('If a1(1) - ' + "Невірно")
}
if (a2 !== 0) {
    console.log('If a2(0) - ' + "Вірно")
} else {
    console.log('If a2(0) - ' + "Невірно")
}
if (a3 !== 0) {
    console.log('If a3(-3) - ' + "Вірно")
} else {
    console.log('If a3(-3) - ' + "Невірно")
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Enter time(0->59)')
if(time >= 0 && time <= 14){
    console.log(time + ' це перша частина години');
}else if( time > 14 && time <= 29){
    console.log(time + ' це друга частина години');
}else if( time > 29 && time <= 44){
    console.log(time + ' це третя частина години');
}else if( time > 44 && time <= 59){
    console.log(time + ' це четверта частина години');
}else{
    console.log("???")
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day = +prompt('Enter day 1->31')
if(day >= 1 && day <= 9){
    console.log(day + " - перша декада");
}else if(day > 9 && day <= 19){
    console.log(day + " - друга декада");
}else if(day > 19 && day <= 31){
    console.log(day + " - третя декада");
}else{
    console.log("???")
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numOfDay = +prompt("Enter number of day")
switch (+numOfDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log('????')
        break;
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let firstNum = +prompt("Enter first number")
let secondNum = +prompt("Enter second number")
if(firstNum>secondNum){
    console.log('Перше число більше і це - ' + firstNum)
}else if(firstNum===secondNum){
    console.log("Ви ввели рівні числа")
}else{
    console.log('Друге число більше і це - ' + secondNum)
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)
let x = prompt("Enter x")
if(x === null || x === undefined || x === false || x === 0 || x === -0 || x === "" ){
    x = "default";
    console.log('x = ' + x)
}else {
    console.log(x)
}


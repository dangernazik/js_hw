// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function countSquareRectangle(a, b) {
    return  a * b
}

console.log("Площа прямокутника = " + countSquareRectangle(4, 6))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function countSquareTriangle(r) {
    const PI = 3.14
    return  PI * Math.pow(r, 2)
}

console.log("Площа трикутника = " + countSquareTriangle(4))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function countSquareCyl(h, r) {
    const PI = 3.14
    let res1 = 2 * PI * r * h
    let res2 = 2 * PI * r * (r + h)
    console.log("Площа бічної поверхні циліндра = " + res1)
    console.log("Площа повної поверхні циліндра = " + res2)
    return res1 , res2
}

countSquareCyl(3, 3)

// - створити функцію яка приймає масив та виводить кожен його елемент
function getArr(arr) {
    for (const item of arr) {
        console.log(item)
    }
}

let users = [
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]
getArr(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function getParagraph(text) {
    let res = `<p>${text}</p>`
    document.write(res)
}

getParagraph("Hello my booiiiiiiiii")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function getLI(text) {
    let res =
        `<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>`
    document.write(res)
}

getLI("HELLO")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function getLiCycle(text, i) {
    document.write(`<ul>`)

    for (let k = 0; k < i; k++) {
        let res =
            `
    <li>${text}</li>
 
`
        document.write(res)
    } document.write(`</ul>`)
}

getLiCycle("HI HI I'M BADD", 7)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function getArrList(array){
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++){
        let res =
            `
    <li>${array[i]}</li>
`
        document.write(res)
    }   document.write(`</ul>`)

}

let arr = ['hi', 123, 234, true, 'how are u?', 32, 155, 12.455, 83, "ten"];
getArrList(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function getUsersInfo (array){
    for (let i = 0; i < array.length; i++){
        let res =
            `<div style="font-size: 23px">Імя користувача - <b>${array[i].name}</b>, вік користувача - <b>${array[i].age}</b>, id користувача - <b>${array[i].id}</b></div>`
        document.write(res)
    }
}
let users1 = [
    {name: 'vasya', age: 31, id: 1412},
    {name: 'petya', age: 30, id: 141},
    {name: 'kolya', age: 29, id: 1412},
    {name: 'olya', age: 28,  id: 141},
    {name: 'max', age: 30,   id: 1412},
    {name: 'anya', age: 31,  id: 14},
    {name: 'oleg', age: 28,  id: 412},
    {name: 'andrey', age: 29,id: 112},
    {name: 'masha', age: 30, id: 142},
    {name: 'olya', age: 31,  id: 142},
    {name: 'max', age: 31,   id: 141}
]
getUsersInfo(users1)

// - створити функцію яка повертає найменше число з масиву
function smallestNumber(array){
    let min = array[0]
    for (let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]

        }
    }console.log(min)
}
let numArr = [ 11, 24, 33, 35, 12, 40, 13]
smallestNumber(numArr)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function arraySum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
let sumArr = [ 41, 43, 323, 15, 32, 455, 83]
arraySum(sumArr);

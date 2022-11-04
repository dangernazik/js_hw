// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrNum = [1, 2, 3, 4, 5]
for (let i = 0; i < arrNum.length; i++) {
    console.log(arrNum[i])
}
let arrStr = ['hello', 'my', 'dear', 'friend', '!']
for (let i = 0; i < arrStr.length; i++) {
    console.log(arrStr[i])
}
let arrAll = [1, "it's", true, 'or', false]
for (let i = 0; i < arrAll.length; i++) {
    console.log(arrAll[i])
}
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = []
arr[0] = true
arr[5] = "thanks"
arr[7] = 7
arr[9] = false
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// 1. перебрати його циклом while
let k1 = 0
while (k1 < arr2.length) {
    document.write(`<h1>${arr2[k1]}</h1>`)
    k1++
}
// 2. перебрати його циклом for
for (let k2 = 0; k2 < arr2.length; k2++) {
    document.write(`<h1 class="color_arr2_1">${arr2[k2]}</h1>`)
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let k3 = 0
while (k3 < arr2.length) {
    if (k3 % 2 !== 0) {
        document.write(`<h1>${arr2[k3]}</h1>`)
    }
    k3++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k4 = 0; k4 < arr2.length; k4++) {
    if (k4 % 2 !== 0) {
        document.write(`<h1 class="color_arr2_1">${arr2[k4]}</h1>`)
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let k5 = 0
while (k5 < arr2.length) {
    if (arr2[k5] % 2 === 0) {
        document.write(`<h1>${arr2[k5]}</h1>`)
    }
    k5++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k6 = 0; k6 < arr2.length; k6++) {
    if (arr2[k6] % 2 === 0) {
        document.write(`<h1 class="color_arr2_1">${arr2[k6]}</h1>`)
    }
}

// 8. вивести масив в зворотньому порядку.
for (let k8 = arr2.length - 1; k8 >= 0; k8--) {
    document.write(`<h1 style="color: darkgoldenrod">${arr2[k8]}</h1>`)
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let k91 = arr2.length - 1
while (k91 >= 0) {
    document.write(`<h1>${arr2[k91]}</h1>`)
    k91--
}


for (let k92 = arr2.length - 1; k92 >= 0; k92--) {
    document.write(`<h1 style="color: darkgoldenrod">${arr2[k92]}</h1>`)
}


let k93 = arr2.length - 1
while (k93 >= 0) {
    if (k93 % 2 !== 0) {
        document.write(`<h1>${arr2[k93]}</h1>`)
    }
    k93--
}


for (let k94 = arr2.length - 1; k94 >= 0; k94--) {
    if (k94 % 2 !== 0) {
        document.write(`<h1 class="color_arr2_1">${arr2[k94]}</h1>`)
    }
}


let k95 = arr2.length - 1
while (k95 >= 0) {
    if (arr2[k95] % 2 === 0) {
        document.write(`<h1>${arr2[k95]}</h1>`)
    }
    k95--
}


for (let k96 = arr2.length - 1; k96 >= 0; k96--) {
    if (arr2[k96] % 2 === 0) {
        document.write(`<h1 class="color_arr2_1">${arr2[k96]}</h1>`)
    }
}


for (let k97 = arr2.length - 1; k97 >= 0; k97--) {
    if (arr2[k97] % 3 === 0) {
        arr2[k97] = 'okten'
    }
}
for (let i = arr2.length - 1; i >= 0; i--) {
    document.write(`<h1>${arr2[i]}</h1>`)
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let k7 = 0; k7 < arr2.length; k7++) {
    if (arr2[k7] % 3 === 0) {
        arr2[k7] = 'okten'
    }
}
for (let i = 0; i < arr2.length; i++) {
    document.write(`<h1 style="color: blueviolet">${arr2[i]}</h1>`)
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [11, 31, 312, 2, 3, 32, 36, 21, 45, 31]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let words = ['hello', 'my', 'dear', 'friend', '!', 'how', 'are', 'you', "man", "?"]
for (let i = 0; i < words.length; i++) {
    console.log(words[i])
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let anything = [1, "it's", true, 'or', false, 1, "it's", true, 'or', false]
for (let i = 0; i < anything.length; i++) {
    console.log(anything[i])
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let boolStr = ['hello', 'my', 'dear', 'friend', '!', true, false, true, false, true]
for (let i = 0; i < boolStr.length; i++) {
    if (typeof boolStr[i] === "boolean") {
        console.log(boolStr[i])
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let boolStrNum = ['hello', 23, 12, 34, '!', true, false, 54, false, true]
for (let i = 0; i < boolStrNum.length; i++) {
    if (typeof boolStrNum[i] === "number") {
        console.log(boolStrNum[i])
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let StrNum = ['hello', 'Thanks', 12, 34, '!', true, false, 54, false, true]
for (let i = 0; i < StrNum.length; i++) {
    if (typeof StrNum[i] === "string") {
        console.log(StrNum[i])
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arrBoom = []
arrBoom[0] = 32
arrBoom[1] = true
arrBoom[2] = 32
arrBoom[3] = true
arrBoom[4] = 42
arrBoom[5] = "thanks"
arrBoom[6] = true
arrBoom[7] = 7
arrBoom[8] = false
arrBoom[9] = "thanks"
arrBoom[10] = true
for (let i = 0; i < arr.length; i++) {
    console.log(arrBoom[i])
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 11; i++) {
    console.log(i)
    document.write(`<h1>${i}</h1>`)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 101; i++) {
    console.log(i)
    document.write(`<h1>${i}</h1>`)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 101; i += 2) {
    console.log(i)
    document.write(`<h1>${i}</h1>`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 2; i < 101; i += 2) {
    console.log(i)
    document.write(`<h1>${i}</h1>`)

}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 101; i += 2) {
    console.log(i)
    document.write(`<h1>${i}</h1>`)
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [{name: 'Harry Potter', pageCount:423},
             {name: 'Metro 2033', pageCount:323},
             {name: 'Peter Pan', pageCount:403}]

// -знайти наібльшу книжку.
let max = books[0].pageCount.length
for (let i = 0; i < books.length; i++) {

    if(books[i].pageCount.length > max) {
        max = books[i].pageCount.length
        console.log(max);

    }
}
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
let max1 = books[0].name.length
for (let i = 0; i < books.length; i++) {

    if(books[i].name.length > max1) {
        max1 = books[i].name.length
        console.log(max1);
    }
    }
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world'
let str1 = 'lorem ipsum'
let str2 = 'javascript is cool'
console.log(str.length, str1.length, str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str.toUpperCase(), str1.toUpperCase(), str2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strUp = 'hello world'
let str1Up = 'lorem ipsum'
let str2Up = 'javascript is cool'

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   '
console.log(strDirty.replaceAll(" ", ""));

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToArray = (text) => {
    let split = text.split(' ')
    console.log(split)
}
let strToArr = 'Ревуть воли як ясла повні';
stringToArray(strToArr)




// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0]
const newArr = arr.map(item => item.toString())
console.log(newArr);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в
// залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (array, direction) => {
    if(direction === 'ascending'){
            let sort = array.sort((a, b) => {
            return  a - b
        })
        console.log(sort);

    }else if(direction === 'descending'){
        let sort = array.sort((a, b) => {
            return  b - a
        })
        console.log(sort);
    }
}
let nums = [11,21,3];
sortNums(nums, 'ascending');

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sortedFilteredArr = coursesAndDurationArray
    .sort((a, b) => {
    return b.monthDuration - a.monthDuration
})


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
    .filter(item => item.monthDuration > 5)
console.log(sortedFilteredArr);

// описати колоду карт

//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const deckOfCards = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value: "jack", color: 'black'},
    {cardSuit: 'spade', value: "queen", color: 'black'},
    {cardSuit: 'spade', value: "king", color: 'black'},
    {cardSuit: 'spade', value: "ace", color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: "jack", color: 'black'},
    {cardSuit: 'clubs', value: "queen", color: 'black'},
    {cardSuit: 'clubs', value: "king", color: 'black'},
    {cardSuit: 'clubs', value: "ace", color: 'black'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value: "jack", color: 'red'},
    {cardSuit: 'diamond', value: "queen", color: 'red'},
    {cardSuit: 'diamond', value: "king", color: 'red'},
    {cardSuit: 'diamond', value: "ace", color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value: "jack", color: 'red'},
    {cardSuit: 'heart', value: "queen", color: 'red'},
    {cardSuit: 'heart', value: "king", color: 'red'},
    {cardSuit: 'heart', value: "ace", color: 'red'},
    {value: "joker", color: 'red'},
    {value: "joker", color: 'black'}
]
// - знайти піковий туз
let spadeAce = deckOfCards.find(card => card.cardSuit === "spade" && card.value === "ace" &&  card.color === "black")
console.log(spadeAce);

// - всі шістки
let allSix = deckOfCards.filter(card => card.value === '6')
console.log(allSix);

// - всі червоні карти
let allRed = deckOfCards.filter(card => card.color === 'red')
console.log(allRed);

// - всі буби
let allDiamond = deckOfCards.filter(card => card.cardSuit === 'diamond')
console.log(allDiamond);

// - всі трефи від 9 та більше
let allClubs9toEnd = deckOfCards.filter(card =>card.cardSuit === 'clubs' && card.value >= '9' )
console.log(allClubs9toEnd);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let suitsArrays = deckOfCards.reduce((accumulator, card) => {
    if(card.cardSuit === "spade"){
        accumulator.spades.push(card)
    }
    else if(card.cardSuit === "clubs"){
        accumulator.clubs.push(card)
    }
    else if(card.cardSuit === "diamond"){
        accumulator.diamonds.push(card)
    }
    else if(card.cardSuit === "heart"){
        accumulator.hearts.push(card)
    }
    return accumulator
}, {spades:[], diamonds:[],hearts:[], clubs:[]})

console.log(suitsArrays);
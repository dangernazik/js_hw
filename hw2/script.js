//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['hi', 123, 234, true, 'how are u?', 32, 155, 12.455, 83, "ten"];
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i])
}

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Harry Potter",
    pageCount: 436,
    genre: 'fantasy'
}
let book2 = {
    title: "Metro 2033",
    pageCount: 398,
    genre: 'post apocalypse'
}

let book3 = {
    title: "Messi",
    pageCount: 420,
    genre: 'biography'
}

console.log(book1, book2, book3)

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age
let book4 = {
    title: "Tom Sawyer",
    pageCount: 245,
    genre: 'adventure',
    authors: [name = "Mark Twain", age = 41]
}
let book5 = {
    title: "Art of war",
    pageCount: 300,
    genre: 'documentary',
    authors: [name = "Sūn Zǐ", age = 49]
}
let book6 = {
    title: "Peter Pan",
    pageCount: 245,
    genre: 'adventure',
    authors: [name = "James Matthew Barrie", age = 46]
}
console.log(book4, book5, book6)

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

let users = [
    {name: 'Anton', username: 'SniperGame', password: '12345678'},
    {name: 'Andriy', username: 'GameNinja', password: 'qwerty'},
    {name: 'Nazar', username: 'FishCrazy', password: 'hello'},
    {name: 'Kolya', username: 'BurgerPandora', password: 'password'},
    {name: 'Olha', username: 'SmallMilo', password: 'cool123'},
    {name: 'Vadym', username: 'VadWarrior', password: 'game321'},
    {name: 'Oleg', username: 'BlackCaptain', password: 'black'},
    {name: 'Yurii', username: 'NoobBoy', password: 'warrior'},
    {name: 'Vitalii', username: 'BreadTek', password: 'monster'},
    {name: 'Mariya', username: 'Abominate', password: 'badBoy123'}
]
for(let i = 0; i<users.length; i++){
    console.log(`Пароль ${i} користувача ${users[i].username} - ${users[i].password}`)
}
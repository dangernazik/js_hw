// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let user1 = new User(0, 'taras', 'dovbyk', 'asadsad@gmail.com', '0973254254')

let userArr = []
for (let i = 0; i < 10; i++) {
    user1 = {
        id: +`${user1.id}` + 1,
        name: `${user1.name}`,
        surname: `${user1.surname}`,
        email: `${user1.email}`,
        phone: `${user1.phone}`
    }
    userArr.push(user1)
}
console.log(userArr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = userArr.filter(user => user.id % 2 === 0)
console.log(filteredUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = userArr.sort((a, b) => a.id - b.id)
console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = [order]
    }
}

let clientsArr = []
let client1 = new Client(0, 'taras', 'dovbyk', 'asadsad@gmail.com', '0973254254', ['laptop', 'phone', 'keyboard'])
for (let i = 0; i < 10; i++) {
    client1 = {
        id: +`${client1.id}` + 1,
        name: `${client1.name}`,
        surname: `${client1.surname}`,
        email: `${client1.email}`,
        phone: `${client1.phone}`,
        order: [`${client1.order}`]
    }
    clientsArr.push(client1)
}
console.log(clientsArr)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClientsArr = clientsArr.sort((a, b) => a.order.length - b.order.length)
console.log(sortedClientsArr);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car1(model, producer, year, maxSpeed, engine) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engine = engine
}
    function drive(Car1)
    {
       return console.log("Їдемо зі швидкістю " + Car1.maxSpeed)
    }
    function info(Car1)
    {
        for (const thisKey in Car1) {
            console.log(thisKey, Car1[thisKey])
        }
    }
    function increaseMaxSpeed (Car1, newSpeed)
    {
        Car1.maxSpeed = newSpeed
        let car = {
            model: `${Car1.model}`,
            producer: `${Car1.producer}`,
            year: +`${Car1.year}`,
            maxSpeed: newSpeed,
            engine: +`${Car1.engine}`
        }
        console.log(car);
        console.log('===================')
    }

    function changeYear (Car1, newValue)
    {
        Car1.year = newValue
        let car = {
            model: `${Car1.model}`,
            producer: `${Car1.producer}`,
            year: newValue,
            maxSpeed: +`${Car1.maxSpeed}`,
            engine: +`${Car1.engine}`
        }
        console.log(car);
        console.log('===================')
    }
    function addDriver(Car1, newDriver){
        newDriver = {
            name: newDriver.name,
            age: newDriver.age
        }
        let car = {
            model: `${Car1.model}`,
            producer: `${Car1.producer}`,
            year: +`${Car1.year}`,
            maxSpeed: +`${Car1.maxSpeed}`,
            engine: +`${Car1.engine}`,
            driver: newDriver
        }
        console.log(car);
        console.log('===================')
    }
let car1 = new Car1('rs6', 'audi', 2017, 280, 3)
drive(car1)
info(car1)
increaseMaxSpeed(car1,421)
changeYear(car1, 2020)
let driver1 = {name: "mike", age: 42}
addDriver(car1, driver1)
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
class Car {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engine = engine
    }

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        return console.log("Їдемо зі швидкістю " + this.maxSpeed)
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        for (const thisKey in this) {
            console.log(`${thisKey} -- ${this[thisKey]}`)
        }
        console.log('===================')

    }

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        Car.maxSpeed = newSpeed
        let car = {
            model: `${this.model}`,
            producer: `${this.producer}`,
            year: +`${this.year}`,
            maxSpeed: +`${Car.maxSpeed}`,
            engine: +`${this.engine}`
        }
        console.log(car);
        console.log('===================')
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        Car.year = newValue
        let car = {
            model: `${this.model}`,
            producer: `${this.producer}`,
            year: +`${Car.year}`,
            maxSpeed: +`${this.maxSpeed}`,
            engine: +`${this.engine}`
        }
        console.log(car);
        console.log('===================')
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(newDriver) {
        newDriver = {
            name: newDriver.name,
            age: newDriver.age
        }
        let car = {
            model: `${this.model}`,
            producer: `${this.producer}`,
            year: +`${this.year}`,
            maxSpeed: +`${this.maxSpeed}`,
            engine: +`${this.engine}`,
            driver: newDriver
        }
        console.log(car);
        console.log('===================')
    }

}
let car = new Car('rs6', 'audi', 2017, 280, 3)
console.log(car);
car.drive()
car.info()
car.increaseMaxSpeed(231)
car.changeYear(2022)
let driver = {name: "pall", age: 23}
car.addDriver(driver)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }


}
class Prince{
    constructor( name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let cinderellas = [cinderella = new Cinderella('anna', 32, 36),
                   cinderella = new Cinderella('anna', 21, 37),
                   cinderella = new Cinderella('anna', 22, 36),
                   cinderella = new Cinderella('anna', 23, 37),
                   cinderella = new Cinderella('anna', 24, 36),
                   cinderella = new Cinderella('anna', 25, 37),
                   cinderella = new Cinderella('anna', 26, 35),
                   cinderella = new Cinderella('olya', 27, 38),
                   cinderella = new Cinderella('anna', 28, 39),
                   cinderella = new Cinderella('anna', 29, 35),
]
let prince = new Prince('tom', 30, 38)
console.log(prince);
for (let i = 0; i < cinderellas.length; i++) {
    if (prince.shoe === cinderellas[i].footSize){
        console.log( `Принц ${prince.name} повинен бути з попелюшкою ${cinderellas[i].name} у якої розмір ноги ${cinderellas[i].footSize}`)
    }
}
let filteredCinderella = cinderellas.find(foot => foot.footSize === 38)
console.log(filteredCinderella);
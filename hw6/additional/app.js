// - создать массив с 20 числами.
let arr20 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18, 2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// -- при помощи метода sort и колбека  отсортировать массив.
let sortedArr20 = arr20.sort((a, b) => {
    return a - b
})
console.log(sortedArr20);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let sortedDownArr20 = arr20.sort((a, b) => {
    return b - a
})
console.log(sortedDownArr20)

// -- при помощи filter получить числа кратные 3
let filteredArr1 = arr20.filter(item => item % 3 === 0)
console.log(filteredArr1);

// -- при помощи filter получить числа кратные 10
let filteredArr2 = arr20.filter(item => item % 10 === 0)
console.log(filteredArr2);

// -- перебрать (проитерировать) массив при помощи foreach()
arr20.forEach(item => console.log(item))

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let mapArr20 = arr20.map(item => item * 3)
console.log(mapArr20);

// - создать массив со словами на 15-20 элементов.
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js', 'c++', 'c', 'assembly', 'java', 'phyton', 'framework', 'go'];
// -- отсортировать его по алфавиту в восходящем порядке.
let sortedListOfItems = listOfItems.sort()
console.log(sortedListOfItems);

// -- отсортировать его по алфавиту  в нисходящем порядке.
let sortedDownListOfItems = listOfItems.reverse()
console.log(sortedDownListOfItems);

// -- отфильтровать слова длиной менее 4х символов
let filteredListOfItems = listOfItems.filter(item => item.length < 4)
console.log(filteredListOfItems);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let mapListOfItems = listOfItems.map(item => item + '!')
console.log(mapListOfItems);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]
// - відсортувати його за  віком (зростання , а потім окремо спадання)
const sortedAgeUp = users.sort((a, b) => a.age - b.age)
console.log(sortedAgeUp);

const sortedAgeDown = users.sort((a, b) => b.age - a.age)
console.log(sortedAgeDown);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
const sortedLengthUp = users.sort((a, b) => a.name.length - b.name.length)
console.log(sortedLengthUp);

const sortedLengthDown = users.sort((a, b) => b.name.length - a.name.length)
console.log(sortedLengthDown)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його
// створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let addId = users.map(user=> {
    return {
        info: `${user.name} (${user.age})`,
        id: 24 + Math.random()
    }

})
console.log(addId);

// - відсортувати його за індентифікатором
const sortedId = addId.sort((a, b) => a.id - b.id)
console.log(sortedId);

// -- наисать функцию калькулятора с 2мя числами и колбеком
let twoNumsCalc = (a, b, sign) => {
    if (sign === '+') {
        return a + b
    } else if (sign === '-') {
        return a - b
    } else if (sign === '*') {
        return a * b
    } else if (sign === '/') {
        return a / b
    } else {
        console.log('error');
    }
}
console.log(twoNumsCalc(2, 4, '*'));
// -- наисать функцию калькулятора с 3мя числами и колбеком
let threeNumsCalc = (a, b, c, sign) => {
    if (sign === '+') {
        return a + b + c
    } else if (sign === '-') {
        return a - b - c
    } else if (sign === '*') {
        return a * b * c
    } else if (sign === '/') {
        return a / b / c
    } else {
        console.log('error');
    }
}
console.log(threeNumsCalc(2, 4, 5, '-'));


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    }, {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    }, {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    }, {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    }, {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    }, {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    }, {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    }, {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    }, {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    }, {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    }, {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    }, {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    }, {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let filteredCarsEngine1 = cars.filter(car => car.volume >= 3)
console.log(filteredCarsEngine1);
// - двигун = 2л
let filteredCarsEngine2 = cars.filter(car => car.volume === 2)
console.log(filteredCarsEngine2);
// - виробник мерс
let filteredCarsEngine3 = cars.filter(car => car.producer === "mercedes")
console.log(filteredCarsEngine3);
// - двигун більше 3х літрів + виробник мерседес
let filteredCarsEngine4 = cars.filter(car => car.producer === "mercedes" && car.volume >= 3)
console.log(filteredCarsEngine4);
// - двигун більше 3х літрів + виробник субару
let filteredCarsEngine5 = cars.filter(car => car.producer === "subaru" && car.volume >= 3)
console.log(filteredCarsEngine5);
// - сили більше ніж 300
let filteredCarsEngine6 = cars.filter(car => car.power > 300)
console.log(filteredCarsEngine6);
// - сили більше ніж 300 + виробник субару
let filteredCarsEngine7 = cars.filter(car => car.producer === "subaru" && car.power > 300)
console.log(filteredCarsEngine7);
// - мотор amg63
let filteredCarsEngine8 = cars.filter(car => car.engine === "amg63")
console.log(filteredCarsEngine8);
// - сили більше ніж 300 + виробник субару + мотор ej204x
let filteredCarsEngine9 = cars.filter(car => car.engine === "ej204x" && car.producer === "subaru" && car.power > 300)
console.log(filteredCarsEngine9);
// - двигун меньше 3х літрів + виробник мерседес
let filteredCarsEngine10 = cars.filter(car => car.producer === "mercedes" && car.volume < 3)
console.log(filteredCarsEngine10);
// - двигун більше 2л + сили більше 250
let filteredCarsEngine11 = cars.filter(car => car.power > 250 && car.volume > 2)
console.log(filteredCarsEngine11);
// - сили більше 250  + виробник бмв
let filteredCarsEngine12 = cars.filter(car => car.power > 250 && car.producer === "bmw")
console.log(filteredCarsEngine12);


// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
]

// -- отсортировать его по id пользователей
let sortedUsers1 = usersWithAddress.sort((a, b) => a.id - b.id)
console.log(sortedUsers1);
// -- отсортировать его по id пользователей в обратном опрядке
let sortedCarsUsers2 = usersWithAddress.sort((a, b) => b.id - a.id)
console.log(sortedCarsUsers2);
// -- отсортировать его по возрасту пользователей
let sortedCarsUsers3 = usersWithAddress.sort((a, b) => a.age - b.age)
console.log(sortedCarsUsers3);
// -- отсортировать его по возрасту пользователей в обратном порядке
let sortedCarsUsers4 = usersWithAddress.sort((a, b) => b.age - a.age)
console.log(sortedCarsUsers4);
// -- отсортировать его по имени пользователей
let sortedCarsUsers5 = usersWithAddress.sort((a, b) => a.name > b.name ? 1 : -1)
console.log(sortedCarsUsers5);
// -- отсортировать его по имени пользователей в обратном порядке
let sortedCarsUsers6 = usersWithAddress.sort((a, b) => a.name > b.name ? -1 : 1)
console.log(sortedCarsUsers6);
// -- отсортировать его по названию улицы  в алфавитном порядке
let sortedCarsUsers7 = usersWithAddress.sort((a, b) => a.address.street > b.address.street ? 1 : -1)
console.log(sortedCarsUsers7);
// -- отсортировать его по номеру дома по возрастанию
let sortedUsers8 = usersWithAddress.sort((a, b) => a.address.number - b.address.number)
console.log(sortedUsers8);
// -- отфильтровать (оставить) тех кто младше 30
let filteredUsers1 = usersWithAddress.filter(user => user.age < 30)
console.log(filteredUsers1);
// -- отфильтровать (оставить) тех у кого отрицательный статус
let filteredUsers2 = usersWithAddress.filter(user => !user.status)
console.log(filteredUsers2);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let filteredUsers3 = usersWithAddress.filter(user => !user.status && user.age < 30)
console.log(filteredUsers3);
// -- отфильтровать (оставить) тех у кого номер дома четный
let filteredUsers4 = usersWithAddress.filter(user => user.address.number % 2 === 0)
console.log(filteredUsers4);


//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================


// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
//     Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
let myCars = [
    {
        carBrand: 'audi',
        enginePower: 360,
        owner: {name: "vasya", age: 19, experience: 1.5},
        price: 30000,
        yearOfProduction: 2012
    },
    {
        carBrand: 'mercedes',
        enginePower: 300,
        owner: {name: "oleg", age: 29, experience: 8},
        price: 23000,
        yearOfProduction: 2010
    },
    {
        carBrand: 'bmw',
        enginePower: 400,
        owner: {name: "taras", age: 27, experience: 4},
        price: 45000,
        yearOfProduction: 2015
    },
    {
        carBrand: 'lanos',
        enginePower: 160,
        owner: {name: "kolya", age: 20, experience: 2},
        price: 5000,
        yearOfProduction: 2006
    },
    {
        carBrand: 'lada',
        enginePower: 120,
        owner: {name: "vitya", age: 22, experience: 3},
        price: 3000,
        yearOfProduction: 1990
    },
    {
        carBrand: 'skoda',
        enginePower: 220,
        owner: {name: "nazar", age: 24, experience: 4},
        price: 15000,
        yearOfProduction: 2014
    },
    {
        carBrand: 'jeep',
        enginePower: 320,
        owner: {name: "mariya", age: 23, experience: 3},
        price: 16000,
        yearOfProduction: 2011
    },
    {
        carBrand: 'suzuki',
        enginePower: 190,
        owner: {name: "yurii", age: 31, experience: 12},
        price: 14000,
        yearOfProduction: 2013
    },
    {
        carBrand: 'porsche',
        enginePower: 400,
        owner: {name: "igor", age: 26, experience: 5},
        price: 50000,
        yearOfProduction: 2016
    },
    {
        carBrand: 'rolls-royce',
        enginePower: 350,
        owner: {name: "max", age: 39, experience: 10},
        price: 150000,
        yearOfProduction: 2015
    },
]


// Зробити половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
let engineRepair = (car => {

    for (let i = 0; i < car.length - 6 ; i+=2) {
         car[i] = {
            carBrand: `${car[i].carBrand}`,
            enginePower: car[i].enginePower + (car[i].enginePower / 100 * 10),
            owner: {name: `${car[i].owner.name}`, age:`${car[i].owner.age}` , experience: `${car[i].owner.experience}`},
            price: `${car[i].price}`,
            yearOfProduction: car[i].yearOfProduction
        };
        console.log(car[i]);
    }
})
// engineRepair(myCars)

//НЕ РОЗУМІЮ ЯК ЗРОБИТИ  НАСТУПНЕ ЗАВД

// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// let newOwner = (car => {
//     for (let i = 0; i < car.length ; i++) {
//         car[i] = {
//             carBrand: `${car[i].carBrand}`,
//             enginePower:`${car[i].enginePower}`,
//             owner: {name: `${car[i].owner.name}!!!!`, age:`${car[i].owner.age}@@@@` , experience: `${car[i].owner.experience}####`},
//             price: `${car[i].price}`,
//             yearOfProduction: car[i].yearOfProduction
//         };
//         console.log(car[i]);
//     }
// })
// newOwner(engineRepair(myCars))


// Для початку вкладіть всі наші створені автомобілі в масив cars.

// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
let engineRepairAndPrice = (car => {

    for (let i = 0; i < car.length; i += 2) {
        car[i] = {
            carBrand: `${car[i].carBrand}`,
            enginePower: car[i].enginePower + (car[i].enginePower / 100 * 10),
            owner: {name: `${car[i].owner.name}`, age: `${car[i].owner.age}`, experience: `${car[i].owner.experience}`},
            price: car[i].price + (car[i].price / 100 * 5),
            yearOfProduction: car[i].yearOfProduction
        };
        console.log(car[i]);
    }
})
engineRepairAndPrice(myCars)
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то
// необідно відправити його на курси підвищення кваліфікації
let driversCourse = myCars.reduce((accumulator, owner) => {
    if (owner.owner.experience < 5 && owner.owner.age > 25) {
        accumulator.inexpiriencedOwners.push(owner)
    } else {
        accumulator.expiriencedOwners.push(owner)
    }
    return accumulator
}, {expiriencedOwners: [], inexpiriencedOwners: []})

console.log(driversCourse);
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sum = 0;
// for (let i = 0; i < myCars.length; i++) {
//     sum += myCars[i].price
// }
// console.log('Сума всіх авто = ' + sum);

//or

let sum = myCars.reduce((accumulator, car)=>{
    accumulator = accumulator += car.price
    return accumulator
}, 0)
console.log('Сума всіх авто = ' + sum);
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Есвли такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
let arr = [1, 2, 3, 4, 4, 4, 7, 7, 9, 10]
let indexOfNum = (array, num) => {
    let firstIndex = array.indexOf(num)
    let lastIndex = array.lastIndexOf(num)
    for (let i = 0; i < array.length; i++) {
        if (num === array[i]) {
            console.log('Answer: MinIndex = ' + firstIndex + ', MaxIndex = ' + lastIndex)
            break;
        } else {
            console.log(-1)
        }
    }


}
indexOfNum(arr, 4)

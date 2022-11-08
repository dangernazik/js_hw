// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)
let getSmallestNum = (a, b, c) => {
    let min = a
    if (a > b && b < c) {
        min = b
    } else if (a > c && c < b) {
        min = c
    }
    console.log(min);
}
getSmallestNum(31, 44, 12)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let getBiggestNum = (a, b, c) => {
    let max = a
    if (a < b && b > c) {
        max = b
    } else if (a < c && c > b) {
        max = c
    }
    console.log(max);
}
getBiggestNum(31, 52, 346)

// - створити функцію яка повертає найбільше число з масиву
let getBiggestNumOfArr = (array) => {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]

        }
    }
    console.log(max)
}
arr1 = [31, 43, 35, 6, 5, 40]
getBiggestNumOfArr(arr1)

// - створити функцію яка повертає найменше число з масиву
let getSmallestNumOfArr = (array) => {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    console.log(min)
}
getSmallestNumOfArr(arr1)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumOfNumInArr = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
}
let sumArr = [41, 43, 323, 15, 32, 455, 83]
sumOfNumInArr(sumArr);

// - Дано натуральное число n. Выведите все числа от 1 до n.
let printArray = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
printArray(10)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке
// убывания в противном случае.
let printArrayAtoB = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i)
        }
    }
}
printArrayAtoB(53, 23)

// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let changeElements = (array, n) => {
    const buffer = array[n]
    array[n] = array[n + 1]
    array[n + 1] = buffer
    console.log(array)
}
let arr2 = [9, 8, 0, 4]
changeElements(arr2, 1)

// -Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let zeroToEnd = (arr) => {
    let k = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {
            arr[k++] = arr[i];
        }
    }

    for (let i = k; i < arr.length; i++) {
        arr[i] = 0;
    }
    console.log(arr)
}
let arr3 = [31, 2, 0, 32, 0, 432, 3, 0, 3, 0, 2]
zeroToEnd(arr3)
// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
for (const simpson of simpsons) {
    let simpsonInfoDiv = document.createElement('div');
    simpsonInfoDiv.classList.add('member')
    simpsonInfoDiv.style.background = 'silver'

    let h2 = document.createElement('h2');
    h2.innerText = simpson.name + ' ' + simpson.surname;

    let p = document.createElement('p');
    p.innerText = simpson.age + ' ' + simpson.info;
    p.style.fontSize = '20px'

    let img = document.createElement('img')
    img.classList.add("img")
    img.src = simpson.photo


    simpsonInfoDiv.append(h2, p, img);


    document.body.appendChild(simpsonInfoDiv);
}


// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
for (let i = 0; i < coursesArray.length; i++) {
    let divElement = document.createElement('div')
    divElement.classList.add('element')

    let divTitle = document.createElement('div')

    let h2 = document.createElement('h2')
    h2.innerText = coursesArray[i].title
    divTitle.classList.add('title')

    let divParagraph = document.createElement('div')
    divParagraph.classList.add('infoTime')

    let p1 = document.createElement('p')
    p1.innerText = "Month duration = " + coursesArray[i].monthDuration
    p1.classList.add('paragraph')

    let p2 = document.createElement('p')
    p2.innerText = "Hour duration = " + coursesArray[i].hourDuration
    p2.classList.add('paragraph')

    let divList = document.createElement('div')
    divList.classList.add('list')

    let ul = document.createElement('ul')
    ul.classList.add('ul')

    for (let j = 0; j < coursesArray[i].modules.length; j++) {
        let li = document.createElement('li');
        li.classList.add('li');
        li.innerText = coursesArray[i].modules[j];
        ul.appendChild(li)
    }

    divTitle.appendChild(h2)
    divParagraph.append(p1, p2)
    divList.appendChild(ul)
    divElement.append(divTitle, divParagraph, divList)
    document.body.append(divElement)
}
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let text = 'sad nana'
let divBlock = document.createElement('div')
divBlock.classList.add('wrap', 'collapse', 'alpha', 'beta')
divBlock.style.background = 'silver'
divBlock.style.color = 'black'
divBlock.style.fontSize = '25px'

divBlock.innerText = text
document.body.appendChild(divBlock)

//НАПИШІТЬ БУДЬ-ЛАСКА, ШО ТУТ НИЖЧЕ ТРЕБА БУЛО НАПИСАТИ, НЕ РОЗУМІЮ ЯК ЙОГО КЛОНУВАТИ
// let clone = document.createElement('div')
// let h2 = document.createElement('h2')
// h2.innerText = divBlock
//
// clone.appendChild(h2)
// document.body.appendChild(clone)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main', 'Products', 'About us', 'Contacts']
let menu = document.getElementsByClassName('menu')
for (const menu1 of menu) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.classList.add('li');
        li.innerText = arr[i]
        menu1.appendChild(li)
    }
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const element = coursesAndDurationArray[i];
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.innerText = 'Назва курсу - ' + element.title + ', його тривалість ' + element.monthDuration

    div.appendChild(p)
    document.body.appendChild(div)
}

// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з
// title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let i = 0; i < coursesAndDurationArray1.length; i++) {
    const element = coursesAndDurationArray1[i];
    let div = document.createElement('div')
    div.classList.add('item')

    let h2 = document.createElement('h2')
    h2.innerText = 'Назва курсу - ' + element.title
    h2.classList.add('heading')

    let p = document.createElement('p')
    p.innerText = 'його тривалість ' + element.monthDuration
    p.classList.add('description')

    div.append(h2, p)
    document.body.appendChild(div)
}

// -----------
//
//- Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
//зникав елемент з id="text".

document.querySelector('#text').onclick = function (e) {
    document.getElementById('text').hidden = true
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let f1 = document.forms.f1;
f1.onsubmit = function (e) {
    if (this.age.value < 18) {
        e.preventDefault();
        alert('u are small!!')
    } else if(his.age.value >= 18){
        e.preventDefault();
        console.log(this.age.value);
        alert("welcome to club")
    }else{
        e.preventDefault();
        console.log('error');
    }
};
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let f2 = document.forms.f2
// f2.onsubmit = function (e){
//     for(let i = 0; i < this.numberOfRows.value; i++){
//         e.preventDefault();
//         console.log(this.info.value);
//         let div = document.createElement('div')
//         let h2 = document.createElement('h2')
//         h2.innerText = this.info.value
//         div.appendChild(h2)
//         document.body.appendChild(div)
//     }
// }

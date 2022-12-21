// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку userDetails.html, котра
// має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
        let wrap = document.createElement('div')
        wrap.classList.add('wrap')
            for (const user of users) {
                let div = document.createElement('div')
                div.innerText = `${user.id} ${user.name}`
                div.classList.add('user')
                wrap.appendChild(div)

                let a = document.createElement('a')
                a.href = `user-details.html?id=${user.id}`
                a.classList.add('a')
                a.innerText = ' Info about user'
                div.appendChild(a)

                document.body.appendChild(wrap)
            }
        }
    )


//
// Стилизація проєкта -
//     index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
// На странице userDetails.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку postDetails.html, котра
// має детальну інфу про поточний пост.

let url = new URL(location.href)
let id = url.searchParams.get('id')


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(userInfo => {
        function foo(user){
            let wrap = document.createElement('div')
            wrap.classList.add('wrap')

            for (const userKey in user) {
                let objKey = user[userKey]
                    let div = document.createElement('div');
                    div.classList.add("div")
                    div.innerHTML = `<b>${userKey}:</b> ${objKey}`
                    document.body.appendChild(wrap)
                    div.style.fontWeight = '800';
                    wrap.append(div)
                    document.body.appendChild(wrap)
                if(typeof objKey === 'object'){
                    div.innerHTML = `${userKey}: `
                    div.style.color = 'darkorchid'
                    document.body.appendChild(div)
                    foo(objKey)
                }
            }
        }
        foo(userInfo)

        let buttonDIv = document.createElement('div')
        let button = document.createElement('button')
        button.innerText = 'post of current user'
        buttonDIv.appendChild(button)
        button.classList.add('button')
        buttonDIv.classList.add('buttonDiv')
        document.body.appendChild(buttonDIv)
        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => {

                    let ul = document.createElement('ul')
                    ul.classList.add('wrapPost')

                    for (const post of posts) {
                        let li = document.createElement('li')

                        let a = document.createElement('a')
                        a.innerText = 'info of post'
                        a.href = `post-details.html?id=${post.id}`
                        a.classList.add("a")
                        li.innerHTML = 'TITLE - ' + post.title
                        li.classList.add('post')
                        li.appendChild(a)
                        ul.append(li)

                    }
                    document.body.appendChild(ul)
                })
            button.disabled = "true"
        }

    });



//     На странице postDetails.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href)
let id = url.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
            for (const postKey in post) {
                let div = document.createElement('div')
                div.innerHTML = `<b>${postKey}:</b> ${post[postKey]}`
                document.body.append(div)
            }
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => response.json())
                .then(comments => {
                        let div1 = document.createElement('div')
                        div1.classList.add("div1")
                        let h2 = document.createElement('h2')
                        h2.classList.add('title')
                        h2.innerText = 'Хтось шось написав'
                        div1.append(h2)
                        document.body.append(div1)

                        let wrap = document.createElement('div')
                        wrap.classList.add('wrap')
                        for (const comment of comments) {
                            let div = document.createElement('div')
                            div.innerHTML = `<b>${comment.email}:</b> ${comment.name}`
                            div.classList.add('comment')
                            wrap.append(div)
                            document.body.append(wrap)
                        }
                    }

                )

        }
    )




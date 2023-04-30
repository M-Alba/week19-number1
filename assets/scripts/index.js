const articlesContainer = document.querySelector('.articlesContainer');

document.addEventListener("DOMContentLoaded", function (event) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((article) => {
            article.forEach(item => {
                const articleContent =
                    `<section>
                        <h2 class="articleTitle">Заголовок: ${item.title}</h2>
                        <p class="articleText">Статья: ${item.body}</p>
                    </section>`
                articlesContainer.insertAdjacentHTML('beforeend', articleContent);
            });
        })
});
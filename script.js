
let moviesContainer = document.querySelector(".moviesContainer")
peliculas.forEach(pelicula => {
    const article = document.createElement('article');
    article.className = 'px-5 border-solid border-zinc-950 border-2 rounded-3xl w-96 h-96';

    const img = document.createElement('img');
    img.src = pelicula.image;
    img.alt = pelicula.title;
    img.className = 'mt-5';

    const div = document.createElement('div');
    div.className = 'text-center';

    const h3 = document.createElement('h3');
    h3.className = 'mt-3.5';
    h3.textContent = pelicula.title;

    const p = document.createElement('p');
    p.className = 'mt-1 text-xs';
    p.textContent = pelicula.overview;

    div.appendChild(h3);
    div.appendChild(p);
    article.appendChild(img);
    article.appendChild(div);
    moviesContainer.appendChild(article);
});
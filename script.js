function filtrarPeliculas() {
    let filtroGenero = document.getElementById('genreFilter').value.toLowerCase();
    let filtroNombre = document.getElementById('nameFilter').value.trim().toLowerCase();

    let listaPeliculas = document.getElementById('moviesList');
    listaPeliculas.innerHTML = ''; 

    let seEncontro = false;
    let peliculasAgregadas = new Set(); 

    peliculas.forEach(pelicula => {
        let generosPelicula = pelicula.genres.map(genero => genero.toLowerCase());
        let nombrePelicula = pelicula.title.toLowerCase();

        if ((filtroGenero === "all" || generosPelicula.includes(filtroGenero)) && (nombrePelicula.includes(filtroNombre))) {
            seEncontro = true;
            if (!peliculasAgregadas.has(pelicula.id)) {
                const elementoPelicula = document.createElement('div');
                elementoPelicula.innerHTML = `
                    <h3 class="h3"><a href="../pages/detalle.html?id=${pelicula.id}&nombre=${pelicula.title}">${pelicula.title}</a></h3>
                    <img src="${pelicula.image}" alt="${pelicula.title}">
                    <p>${pelicula.overview}</p>
                    <p>Géneros: ${pelicula.genres.join(', ')}</p>
                `;
                listaPeliculas.appendChild(elementoPelicula);
                peliculasAgregadas.add(pelicula.id);
            }
        }
    });

    if (!seEncontro) {
        const mensajeSinResultados = document.createElement('p');
        mensajeSinResultados.textContent = 'No se encontraron películas.';
        listaPeliculas.appendChild(mensajeSinResultados);
    }
}

document.getElementById('genreFilter').addEventListener('change', filtrarPeliculas);

document.getElementById('nameFilter').addEventListener('input', filtrarPeliculas);

filtrarPeliculas();

//const peliculasDescripciones=[];

const peliculasID= peliculas.map((peliculas, indice)=>{
    return{
        title:`${peliculas.title}`,
        img:`${peliculas.image}`,
        overview:`${peliculas.overview}`,
        id:indice,
    }
})

console.log(peliculasID);
document.addEventListener('DOMContentLoaded', function() {
});
let filtroGenero = document.querySelector('#genreFilter');
let filtroNombre = document.querySelector("#nameFilter");

function renderizarPeliculas(filtroGenero, filtroNombre) {
    const peliculasFiltradas = peliculas.filter(pelicula => {
        const coincidenciaGenero = (filtroGenero === 'all' || pelicula.genres.includes(filtroGenero));
        const coincidenciaNombre = pelicula.title.toLowerCase().includes(filtroNombre.toLowerCase());
        return coincidenciaGenero && coincidenciaNombre;
    });

    const listaPeliculas = document.getElementById('moviesList');
    listaPeliculas.innerHTML = '';

    if (peliculasFiltradas.length === 0) {
        const mensajeSinResultados = document.createElement('p');
        mensajeSinResultados.textContent = 'No se encontraron películas.';
        listaPeliculas.appendChild(mensajeSinResultados);
    }else {
        peliculasFiltradas.forEach(pelicula => {
            const elementoPelicula = document.createElement('div');
            elementoPelicula.innerHTML = `
                <h3>${pelicula.title}</h3>
                <img src="${pelicula.image}" alt="${pelicula.title}">
                <p>${pelicula.overview}</p>
                <p>Géneros: ${pelicula.genres.join(', ')}</p>
            `;
            listaPeliculas.appendChild(elementoPelicula);
        });
    }
}

filtroGenero.addEventListener('change', function() {
    const valorFiltroGenero = this.value;
    const valorFiltroNombre = (filtroNombre.value);
    renderizarPeliculas(valorFiltroGenero, valorFiltroNombre);
});

document.getElementById('nameFilter').addEventListener('input', function() {
    const valorFiltroNombre = this.value;
    const valorFiltroGenero = document.getElementById('genreFilter').value;
    renderizarPeliculas(valorFiltroGenero, valorFiltroNombre);
});

renderizarPeliculas('all', '');

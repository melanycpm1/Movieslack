console.log("search:"+location.search);
const urlParams=  new URLSearchParams(location.search);
console.log(urlParams)
console.log(urlParams.get("nombre"))



/*let $main=document.querySelector("#main");*/

//$main.innerHTML=`<div class="grid grid-rows-2 grid-cols-2 items-center justify-items-center relative top-7">


/*let tituloPelicula=document.querySelector(".tituloPelicula");
let generoPeli=document.querySelector(".generoPeli");

let peliculaEncontra=peliculas.find(pelicula=>pelicula.id==id)
tituloPelicula.innerHTML=`<h2>${peliculaEncontra.title}</h2>`;
generoPeli.textContent=`<span>${peliculaEncontra.genres}</span>`*/

let tituloPelicula=document.getElementsByClassName("tituloPelicula");
tituloPelicula.textContent="hola"

import { openForm, closeForm, btnOpenForm, btncloseForm, btnAddLibro, txtMsj, carritoLibros, filtroPrecio, contenedorFiltros } from './variables-bd.js';
import { Libro } from './libro.js';
btnOpenForm.addEventListener('click', openForm);
btncloseForm.addEventListener('click', function () {
    closeForm();
    txtMsj.innerHTML = "";
    txtMsj.style.color = "";
});
//carga de libros por defecto

const cargaDefault = () => {
    Libro.addLibroDefault()

};
cargaDefault()
renderLibros()


btnAddLibro.addEventListener('click', () => {


    let titulo = document.querySelector('#titulo-libro').value;
    let author = document.querySelector('#autor-libro').value;
    let series_t = document.querySelector('#series_t').value;
    let genre_s = document.querySelector('#genero-libro').value;

    let price = document.querySelector('#precio-libro').value;
    let pages_i = document.querySelector('#paginas-libro').value;

    const libro = new Libro(titulo, author, series_t, genre_s, price, pages_i);
    if (verificacion()) {


        const libro = new Libro(titulo, author, series_t, genre_s, price, pages_i);
        try {
            if (Libro.BD.find(libroBd => libroBd.id === libro.id/* Id const arriba */)) {
                throw new Error("El libro ya existe");
            } else {
                libro.addLibro();
                txtMsj.innerHTML = "Libro agregado correctamente";
                txtMsj.style.color = "green";
                renderLibros();
                formLibro.reset();
            }
        }
        catch (e) {
            console.error(e);
            txtMsj.innerHTML = e.message;
            txtMsj.style.color = "red";
            return;
        }
    }
})



function verificacion() {
    txtMsj.innerHTML = "";


    let titulo = document.querySelector('#titulo-libro').value;
    let author = document.querySelector('#autor-libro').value;
    let series_t = document.querySelector('#series_t').value;
    let genre_s = document.querySelector('#genero-libro').value;

    let price = document.querySelector('#precio-libro').value;
    let pages_i = document.querySelector('#paginas-libro').value;

    if (titulo == "" || author == "" || series_t == "" || genre_s == "" || price == "" || pages_i == "") {
        txtMsj.innerHTML = "Por favor, complete todos los campos";
        txtMsj.style.color = "red";
        return false;
    }
    return true;
}



/* 
<div class="articulo-libro">
            <h3>Lucene in Action, Second Edition</h3>
            <p><strong>Autor:</strong> Michael McCandless</p>
            <p><strong>Género:</strong> IT</p>
            <p><strong>Precio:</strong> $30</p>
            <p><strong>Páginas:</strong> 475</p>
        </div>
*/

function renderLibros() {
    carritoLibros.innerHTML = '';
    if (Libro.BD.length === 0) {
        carritoLibros.innerHTML = '<p>No hay libros disponibles</p>';
        return;//sale de la funcion no ejecuta el forEach
    }
    Libro.BD.forEach(libro => {
        crearArticuloLibro(libro);
    });
}
/* Ordenar por precios */

contenedorFiltros.addEventListener('change', (event) => {

    if (event.target.classList.contains('filtro-precio')) {

        carritoLibros.innerHTML = '';

        if (event.target.value === 'asc') {

            Libro.BD.sort((a, b) => a.price - b.price);
        }
        if (event.target.value === 'desc') {

            Libro.BD.sort((a, b) => b.price - a.price);
        }
        renderLibros()
    }
});


function crearArticuloLibro(libro) {
    const articulo = document.createElement('div');
    articulo.classList.add('articulo-libro');
    articulo.innerHTML = `
    <h3>${libro.name}</h3>
    <p><strong>Autor:</strong> ${libro.author}</p>
    <p><strong>Género:</strong> ${libro.genre_s}</p>
    <p><strong>Precio:$</strong> ${libro.price}</p>
    <p><strong>Páginas:</strong> ${libro.pages_i}</p>
    <p>Stock: ${libro.inStock ? 'Disponible' : 'No disponible'}</p>
    
    `;
    /* <small>Id: ${libro.id}</small> */
    carritoLibros.appendChild(articulo);
}
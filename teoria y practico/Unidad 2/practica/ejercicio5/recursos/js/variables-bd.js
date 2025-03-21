const flotanteForm = document.querySelector('#overlayFormulario');
const btnOpenForm = document.querySelector('#btnOpenForm');
const btnAddLibro = document.querySelector('#btnAddLibro');
const btncloseForm = document.querySelector('#btncloseForm');
const txtMsj = document.querySelector('#txtMsj');
const carritoLibros = document.querySelector('#carritoLibros');
const filtroPrecio = document.querySelector('.filtro-precio');
const contenedorFiltros = document.querySelector('#contenedorFiltros');
/*  Funciones Open Close formulario */
const openForm = () => { flotanteForm.style.display = 'flex'; }
const closeForm = () => { flotanteForm.style.display = 'none'; }


/* Variables generales */









export {

    btnOpenForm,
    btnAddLibro,
    btncloseForm,
    openForm,
    closeForm,
    txtMsj,
    carritoLibros,
    filtroPrecio,
    contenedorFiltros

};
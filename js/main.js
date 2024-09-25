const productos = [
    {
        id: "libro-01",
        titulo: "Libro 01",
        imagen: "./assets/books/book1.jpg",
        precio: 1000
    },
    {
        id: "libro-02",
        titulo: "Libro 02",
        imagen: "./assets/books/book2.jpg",
        precio: 1020
    },
    {
        id: "libro-03",
        titulo: "Libro 03",
        imagen: "./assets/books/book3.jpg",
        precio: 1030
    },
    {
        id: "libro-04",
        titulo: "Libro 04",
        imagen: "./assets/books/book4.jpg",
        precio: 1400
    },
    {
        id: "libro-05",
        titulo: "Libro 05",
        imagen: "./assets/books/book5.jpg",
        precio: 5000
    },
    {
        id: "libro-06",
        titulo: "Libro 06",
        imagen: "./assets/books/book6.jpg",
        precio: 1060
    },
    {
        id: "libro-07",
        titulo: "Libro 07",
        imagen: "./assets/books/book7.jpg",
        precio: 1700
    },
    {
        id: "libro-08",
        titulo: "Libro 08",
        imagen: "./assets/books/book8.jpg",
        precio: 1080
    },
    {
        id: "libro-09",
        titulo: "Libro 09",
        imagen: "./assets/books/book9.jpg",
        precio: 1000
    },
    {
        id: "libro-01",
        titulo: "Libro 01",
        imagen: "./assets/books/book1.jpg",
        precio: 1000
    },
];

//DOM

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos() {

    //recorre los productos
    productos.forEach(producto => {

        //creando el div que contiene los productos
        const div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML = `
        <div class="producto">
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">"${producto.titulo}"</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar ();
    console.log(botonesAgregar)
}

cargarProductos();

// actualiza los botones
function actualizarBotonesAgregar () {
    //los trae del dom
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    //cuando clickeamos llama a la funcion agregar al carrito
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

//array de productos en carrito
const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    console.log(idBoton);

    const productoAgregado = productos.find(producto => producto.id === idBoton);
    console.log(productoAgregado);

    productosEnCarrito.push(productoAgregado);
}
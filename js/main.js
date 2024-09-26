let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

//DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");

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
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else {
    productosEnCarrito = [];
}

//array de productos en carrito


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;

    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
}

function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numero.innerText = nuevoNumero;
}
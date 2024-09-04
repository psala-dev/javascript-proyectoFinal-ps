const productos = [
    {
        id: "01",
        titulo: "libro 01",
        imagen: "./assets/book1.jpg",
        categoria: {
            nombre: "libros",
            id: "libros"
        },
        precio: 1000
    },
    {
        id: "02",
        titulo: "libro 02",
        imagen: "./assets/book2.jpg",
        categoria: {
            nombre: "libros",
            id: "libros"
        },
        precio: 1200
    },
    {
        id: "03",
        titulo: "libro 03",
        imagen: "./assets/book3.jpg",
        categoria: {
            nombre: "cafe",
            id: "cafe"
        },
        precio: 1300
    },
    {
        id: "04",
        titulo: "libro 04",
        imagen: "./assets/book4.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 1400
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");

//mostrar productos
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-img" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id=${producto.id}>Agregar</button>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;
        
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

        cargarProductos(productosBoton);
    } else{
        tituloPrincipal.innerText = "";
        cargarProductos(productos);
    }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
};

let productoEnCarrito
const productoEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if(productoEnCarritoLS) {
    let productoEnCarrito = productoEnCarritoLS
} else {
    productoEnCarrito = [];
}
productoEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton);

    if(productoEnCarrito.some(producto => producto.id === id.boton)) {
        productoEnCarrito.findIndex(producto => producto.id === idBoton);
        productoEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productoEnCarrito.push(productoAgregado);
}    
actualizarNumero();

localStorage.setItem("productos-en-carrito", JSON.stringify(productoEnCarrito));
}

function actualizarNumero() {
    let nuevonumero = productoEnCarrito.reduce((acc, producto) => acc +producto.cantidad, 0)
    numero.innerText = nuevonumero;
}

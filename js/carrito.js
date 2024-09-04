const productoEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

if(productosEnCarrito) {

    contenedorCarritoVacio.classList.add("disable");
    contenedorCarritoProductos.classList.remove("disable");
    contenedorCarritoAcciones.classList.remove("disable");
    contenedorCarritoComprado.classList.add("disable");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
           <img class="carrito-producto-img" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="carrito-producto-titulo">
                            <small>titulo</small>
                            <h3>${producto.titulo}</h3>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small>cantidad
                            </small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="carrito producto-precio">
                            <small>precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>carrito-producto-subtotal</small>
                            <p>$${producto.precio* producto.cantidad}</p>
                        
                        </div>
                    <button class="class carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>`;

                    contenedorCarritoProductos.append(div);
    
    })
    
} else{

}
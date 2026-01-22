// Arreglo de productos
let productos = [
    {
        nombre: "Televisor smart 75 pulgadas",
        precio: 900,
        descripcion: "Resoluciòn 4k, entretenimiento en casa"
    },
    {
        nombre: "Cine en casa",
        precio: 400,
        descripcion: "Ideal para disfrutar peliculas con calidad de audio profesional"
    },
    {
        nombre: "Aire Acondicionado",
        precio: 750,
        descripcion: "Eficiente para mantener ambientes frescos y confortables"
    }
];

// Referencia al <ul>
const lista = document.getElementById("listaProductos");

// Función para renderizar productos
function mostrarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
            <hr>
        `;
        lista.appendChild(li);
    });
}

// Botón agregar (con datos ingresados)
btnAgregar.addEventListener("click", () => {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = prompt("Ingrese el precio:");
    const descripcion = prompt("Ingrese la descripción:");

    if (nombre && precio && descripcion) {
        productos.push({
            nombre: nombre,
            precio: precio,
            descripcion: descripcion
        });

        mostrarProductos();
    } else {
        alert("Debe completar todos los campos");
    }
});

// Mostrar productos al cargar
mostrarProductos();

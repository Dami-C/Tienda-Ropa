const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []
const card = document.getElementById("card")


function retornoCard({id, imagen, nombre, precio}) {
        return `<div class="card" id="card${id}" style="width: 18rem;">
                    <img src="${imagen}" class="card-img-top" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">$${precio.toFixed(2)}</p>
                        <button id="${id}" class="agregar btn btn-success">🛒</button>
                    </div>
                </div>`
}

function retornoError() {
    return `<div class="card-error">
                <h2>Houston, tenemos un problema 🔌</h2>
                <h3>No pudimos cargar los productos. 🤦🏻‍♂️</h3>
                <h3>Intenta nuevamente en unos instantes...</h3>
            </div>`
}

function armarTablaCarrito(prendas) {
    return `<tr>
                <td class="centrar img-xx-large">${prendas.imagen}</td>
                <td>${prendas.nombre}</td>
                <td>${prendas.precio}</td>
                <td><button class="button button-outline button-delete" id="${prendas.nombre}" title="Quitar del carrito">🗑</button></td>
            </tr>`
}
const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []

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


function armarTablaCarrito(prendas) {
    return `<tr>
                <td class="centrar img-xx-large"><img src="${prendas.imagen}" alt="" style="width: 70px; height: 80px;"></td>
                <td>${prendas.nombre}</td>
                <td>$${prendas.precio}</td>
                <td><button><img class="cesto" src="./assets/cesto.png" width="25px;"></button></td>
            </tr>`
}
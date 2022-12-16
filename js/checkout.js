function recuperarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))
    if (carrito.length > 0) {
    carrito.forEach(prendas => tablaHTML += armarTablaCarrito(prendas))
    }
    tbody.innerHTML = tablaHTML
    calcularTotal()
}
recuperarCarrito()


function calcularTotal() {
    let total = document.querySelector("h3#total")
    let totalCarrito = carrito.reduce((acc, prendas)=> acc + prendas.precio, 0)
    total.innerText = `Total: $ ${totalCarrito.toLocaleString()}` 
}


const btnComprar = document.querySelector("#btnComprar")

btnComprar.addEventListener("click", ()=> {
    Swal.fire({
        icon: 'question',
        title: '¿Confirmas la compra?',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: `Cancel`,
    })
    .then(result =>{
        if(result.isConfirmed){
            localStorage.removeItem("carrito")
            carrito.length = 0
            Swal.fire("Gracias Por Elegirnos", '','','info')
            .then(()=>{
                location.href = './index.html'
            })
        }
    })
})
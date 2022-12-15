    function cargarTabla() {
        let tablaHTML = ""
        const tbody = document.querySelector("tbody")
        const carrito = JSON.parse(localStorage.getItem("miCarrito"))

        if (carrito.length > 0) {
            carrito.forEach(prendas => tablaHTML += armarTablaCarrito(prendas))
            tbody.innerHTML = tablaHTML
    }
}

    function activarClickBotones() {
        const buttonsDelete = document.querySelectorAll("button.button-outlinebutton-delete")
        buttonsDelete.forEach(btn => {
        btn.addEventListener("click", ()=> {
             //buscar usando button.id el producto en el array carrito.
             //hay que utilizar findIndex() porque necesitamos el índice del producto
             //luego con el método splice(), elimino el índice recuperado del carrito.
             //debemos declarar carrito de forma GLOBAL.
        })
    })
}
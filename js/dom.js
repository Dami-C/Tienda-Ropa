
const imgCarrito = document.getElementById("imgCarrito")
const bolsaCompras = document.getElementById("bolsaCompras")
const footer = document.getElementById("footer")
const container = document.getElementById("cajaPrendas")
const inputSearch = document.querySelector("input#inputSearch")
// const URL = 'bbdd/productos.json'


titulo.innerText = "Vestite Rey"
imgCarrito.src = "./assets/carrito.png"
footer.innerHTML = "<p>Copyright Damian Cordeiro - <strong>Comisión 34095 JS</strong></p>" 


imgCarrito.addEventListener("mousemove", ()=> {
    let totalProductos = carrito.length
        imgCarrito.title = `${totalProductos} productos en el carrito`
})

function cargarProductos(array) {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(prendas => contenido += retornoCard(prendas))
            container.innerHTML = contenido
        }
}
cargarProductos(prendas)

function activarClickBotones() {
    const botonesAdd = document.querySelectorAll("button.agregar.btn.btn-success")
    botonesAdd.forEach(button => {
        button.addEventListener("click", ()=> {
            let resultado = prendas.find(prendas => prendas.id === parseInt(button.id))
            
                    carrito.push(resultado)
                    localStorage.setItem("miCarrito", JSON.stringify(carrito))
                    toast(`'${resultado.nombre}' se agregó al carrito`, 'green')
        })
    })
}

function filtrarProductos() { //
    let resultado = prendas.filter(prendas => prendas.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
        if (resultado.length > 0) {
            cargarProductos(resultado)
            activarClickBotones()
        } else {
            console.warn("No se han encontrado coincidencias.")
        }
}

inputSearch.addEventListener("search", ()=> { //
    inputSearch.value.trim() !== "" ? filtrarProductos() : cargarProductos(prendas)
})

const toast = (text, bgcolor)=> {
    Toastify({
        text: text,
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: { background: bgcolor || 'CornFlowerBlue', fontSize: '24px'}
    }).showToast();
}
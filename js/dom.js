
const card = document.getElementById("card")
const imgCarrito = document.getElementById("imgCarrito")
const bolsaCompras = document.getElementById("bolsaCompras")
const footer = document.getElementById("footer")
const container = document.getElementById("cajaPrendas")
const inputSearch = document.querySelector("input#inputSearch")
const URL = 'bbdd/productos.json'
const prendas = []


async function obtenerInfoProductos(){
    try{
        const response = await fetch(URL)
        const data = await response.json()
            if (data.length > 0){
                prendas.push(...data)
                cargarProductos(prendas)
                activarClickBotones()
            }

    } catch (error) {
        toast('No hay Productos disponibles','red')
    }
}
obtenerInfoProductos()


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


function activarClickBotones() {
    const botonesAdd = document.querySelectorAll("button.agregar.btn.btn-success")
    botonesAdd.forEach(button => {
        button.addEventListener("click", ()=> {
            let resultado = buscarPrenda(button.id)
                    carrito.push(resultado)
                    localStorage.setItem("miCarrito", JSON.stringify(carrito))
                    toast(`'${resultado.nombre}' se agregó al carrito`, 'green')
        })
    })
}

cargarProductos(prendas)
activarClickBotones(carrito)


function buscarPrenda(id) {
    let resultado = prendas.find(prenda => prenda.id === parseInt(id))
    return resultado
}

function filtrarProductos() {
    let resultado = prendas.filter(prendas => prendas.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
        if (resultado.length > 0) {
            cargarProductos(resultado)
            activarClickBotones()
        } else {
            toast('No se han encontrado coincidencias.' , 'red')
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
const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("producto-contenedor")

    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="cardInt" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn" id=boton${producto.id}>Comprar <i class= "fas fa-shopping-cart"></i></button>
                            </div>
                        </div>`

        contenedorProductos.appendChild(div)
        
        const boton = document.getElementById(`boton${producto.id}`)

        boton.addEventListener('click', ()=> {
            carritoIndex(producto.id)
                Swal.fire({
                  title: "Genial!",
                  text: "Haz agregado un producto al carrito",
                  icon: "Exito",
                  confirmButtonColor: 'rgba(6, 230, 159, 0.993)',
                  color: 'rgba(6, 230, 159, 0.993)',
                  background: '#161515',  
                  confirmButtonText: "Continuar",
            
                });
             
            /* alert(`Se agrego el producto ${producto.nombre}`) */
        })

    })
}


mostrarProductos(productos)
//SERVICIOS

class servicio {
    constructor (id, nombre, precio, descripcion){
        this.id = id
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.descripcion = descripcion;
    }
    
    
}

const serv1 = new servicio(1, "Pack básico", 22500,"4 POSTEOS - 3 REELS CON EDICIÓN - STORYS 2 VECES POR SEMANA (CADA DÍA SE SUBEN ENTRE 3 Y 5 PLACAS.) " );
const serv2 = new servicio(2, "Pack intermedio",27500,"6 POSTEOS - 3 REELS CON EDICIÓN - STORYS 3 VECES POR SEMANA (CADA DÍA SE SUBEN ENTRE 3 Y 5 PLACAS.) ");
const serv3 = new servicio(3, "Pack pro", 35000,"8 POSTEOS - 4 REELS CON EDICIÓN - STORYS 3 VECES POR SEMANA (CADA DÍA SE SUBEN ENTRE 3 Y 5 PLACAS.) ");
const serv4 = new servicio(4, "Fotografía Redes", 20000,"Sesión de dos horas de fotografía de producto con 10 fotografías editadas a elección.");

//ARRAY SERVICIOS

const servicios = [serv1,serv2,serv3,serv4];

let carritoCompras = JSON.parse(localStorage.getItem("carritoCompras")) || [];

const ventaServ = document.getElementById("serv1")

const verCarrito = document.getElementById("carrito")

const contendorCompra = document.getElementById("totalCompra")


servicios.forEach((serv) => {
    let contenido = document.createElement("div");
    contenido.innerHTML =`
    
    <h2>${serv.nombre}: <h2/>
    <h3>Incluye: ${serv.descripcion}<h3/>
    <h3>Precio: $${serv.precio}.-<h3/>
`
ventaServ.append(contenido);   

let comprar= document.createElement("button");
comprar.innerText="Adquirir servicio";
contenido.append(comprar)
comprar.className = "comprar";

comprar.addEventListener("click", () => {
    carritoCompras.push({
        id: serv.id,
        nombre: serv.nombre,
        precio: serv.precio
    })
    local();
})


});

verCarrito.addEventListener("click", ()=> {
    contendorCompra.innerHTML = ``
    contendorCompra.style.display = "block";
    const compra = document.createElement("div");
    compra.innerHTML =`
    <h2 class="ms-3">Servicios contratados: <h2/>

    `
    contendorCompra.append(compra)

    carritoCompras.forEach((serv)=>{
        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.innerHTML = `
        <h3 class="ms-5">${serv.nombre}</h3>
        <h3 class="ms-5">$${serv.precio}.-</h3>
        
        `;
    contendorCompra.append(contenidoCarrito);
    })

    const total = carritoCompras.reduce((acumulador, precio) => acumulador + precio.precio, 0);
    let totalFinal = document.createElement("div")
    totalFinal.innerHTML = `
    <h3 class="ms-5">Total a pagar: $ ${total}<h3/>
    
    `
    contendorCompra.append(totalFinal)

    const cerrarCompra = document.createElement("button")
    
    cerrarCompra.className = "comprar ms-5"
    cerrarCompra.innerText = "Cerrar carrito"
    cerrarCompra.addEventListener("click", ()=>{
        contendorCompra.style.display = "none";
    })


    contendorCompra.append(cerrarCompra);

});



const local = () => {

localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
};






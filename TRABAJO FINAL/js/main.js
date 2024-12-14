let lista = document.getElementById("lista");
let totalText = document.getElementById("totalText");



const productos = [
    {nombre: "Camiseta Selección Argentina Prematch", precio: 8000, stock: 5 ,talles: 6 - 8 - 10 - 12 - 14, imagen: `./img/seleccion.jpg`}, 
    {nombre: "Camiseta Selección Argentina Messi", precio: 8000, stock: 5 ,talles: 6 - 8 - 10 - 12 - 14, imagen: `./img/messi.jpg`}, 
    {nombre: "Camiseta Boca Juniors Prematch", precio: 6500, stock: 5 ,talles: 6 - 8 - 10 - 12 - 14, imagen: `./img/boca.jpg`}, 
    {nombre: "Camiseta Club Social y Deportivo La Lola", precio: 6000, stock: 5 ,talles: 6 - 8 - 10 - 12 - 14, imagen: `./img/lalola.jpg`}, 
   
];

function pintarProductos(arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML += 
        `<li class="tarjeta">
        <img src= ${arrayProductos[i].imagen} "
        <p> ${arrayProductos[i].nombre} </p> 
        <p> Precio: $${arrayProductos[i].precio}</p>
        <p> Talles: Del 6 al 14 </p>
        <input type="number" id="talle${i}" placeholder="Ingrese talle">
        <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly>
        <input type="number" id="entrada${i}" placeholder="Ingrese cantidad">
        <button id="btn${i}">Agregar al carrito</button>
        </li>`;
    }
    for (let i = 0; i <arrayProductos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener("click", () => {
            comprar(i); 
            validarTalles(i);
        });
    }
}
let total = 0;

function comprar(index) {
    const stockElement = document.getElementById(`stock${index}`);
    const stock = parseInt(stockElement.value);
    const entradaElement = document.getElementById(`entrada${index}`);
    const cantidad = parseInt(entradaElement.value);
    const precio = productos[index].precio;

    if (cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        totalText.innerHTML = `Total: $${total}`;
        stockElement.value = stock - cantidad;
        alert(`Compra realizada exitosamente. Total: $${total}`);
    } else {
        alert(`Cantidad no valida. Debe ser mayor que 0 y menor o igual al stock.`);
    }
function validarTalles(input) {
      const talles = parseInt(input.value);
      if (isNaN(talles)) {
            alert("Por favor, ingresa un talle válido.");
            return false;
      } else if (talles <6 || talles >14){
            alert("El valor debe estar emtre 6 y 14.");
            return false;
      } else {
            return true
      }
      }
}

pintarProductos(productos);
validarTalles(arrayProductos);


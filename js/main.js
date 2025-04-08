// console.log(document.getElementById("encabezado1")); 

let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");//primero

let otrosElemento = document.querySelectorAll("ul>li");//todos

console.log("otroElemento: ", otroElemento)

console.log(otrosElemento.length);

console.log(listas.length);
//console.log(listas[0]);
console.log(listas.item(1));

console.log(elementos.length)

let contador=0;
function modifica(){
    //encabezado1.innerText = "Ejercicio DOM";
    encabezado1.innerHTML = "<em>Ejercicio</em> DOM";
    encabezado2.innerText = ++contador;
}// modifica

// console.log(encabezado1.innerText);
// console.log(encabezado2.innerText);

btnMostrar.addEventListener("click", function(event){
    event.preventDefault();//no hagas lo que haces por defecto
    //console.log("botón btnModificar presionado");

});
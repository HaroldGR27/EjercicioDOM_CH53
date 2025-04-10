// console.log(document.getElementById("encabezado1")); 

let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTel = document.getElementById("txtTel");

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");//primero

let otrosElemento = document.querySelectorAll("ul>li");//todos

console.log("otroElemento: ", otroElemento)

console.log(otrosElemento.length);

console.log(listas.length);
//console.log(listas[0]);
console.log(listas.item(1));

console.log(elementos.item(2));

console.log(elementos.length);

let contador = 0;
function modifica() {
    //encabezado1.innerText = "Ejercicio DOM";
    encabezado1.innerHTML = "<em>Ejercicio</em> DOM";
    encabezado2.innerText = ++contador;
}// modifica

// console.log(encabezado1.innerText);
// console.log(encabezado2.innerText);

btnMostrar.addEventListener("click", function (event) {
    event.preventDefault();//no hagas lo que haces por defecto
    //console.log("botón btnModificar presionado");

    let element = document.createElement("li");
    element.innerText = "Another item"; //<li>Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true)// sirve para clonar los datos de element

    // ***NOTA: no se puede tener el mismo elemento en dos o mas posiciones

    // before: Inserta el elemeneto antes de la lista
    // listas.item(0).before(element); 

    // prepend: Inserta el elemento al principio de la lista
    // listas.item(0).prepend(element2);

    // append: Inserta el elemento al final de la lista
    // listas.item(0).append(element);

    // // after: Inserta el elemento despue de la lista
    // listas.item(0).after(element2);

    //afeterbegin Inserta el elemento al principio de la lista
    // listas.item(1).insertAdjacentElement("afterbegin", element)

    // //beforeend: Inserta el elemento al final de la lsita
    // listas.item(1).insertAdjacentElement("beforeend", element2)

    listas.item(1).insertAdjacentHTML("beforebegin",
        `<li class="list-group-item">Before Begin item</li>`);

    listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">
        After End item
        </li>`);

    listas.item(1).insertAdjacentHTML("afterbegin",
        `<li class="list-group-item">After Begin item</li>`);

    listas.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">Before End item</li>`);
    });//botonMostrar

// se ejecuta cuando termina de cargar todos los elementos de la pagina
window.addEventListener("load", function(event){
    console.log("Se termino de cargar la pagina")
});//load

//blur -> cuando se sale del campo
// txtRFC.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtRFC.value = txtRFC.value.toUpperCase();
// });//txtRFC

// txtCURP.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtCURP.value = txtCURP.value.toUpperCase();
// });//txtRFC

//lo de arriba es lo mismo que aca pero más automatizado
                
                        //|
                        //v

function txtToUpper(event){
    event.target.value=event.target.value.trim().toUpperCase();
}
txtRFC.addEventListener("blur",txtToUpper);
txtCURP.addEventListener("blur",txtToUpper);


txtTel.addEventListener("blur", function(event){
    event.preventDefault();
    txtTel.value = txtTel.value.trim().slice(0,10);
});//txtTel

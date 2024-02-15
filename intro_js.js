//consola (log, info, warn, error, asert)
console.log("Hola mundo");
console.info("Clash of clans");
console.warn("Esta es una advertencia");
console.error("Esto es un error");
console.assert(1 == "1");
//console.assert(1==="1");
console.assert(1 == true);
//console.assert(1 === true);

//variables, constantes

//Declarar una variable de manera antigua (no recomendada)
var gigantes = 10;

//Declarar una variable de manera moderna (recomendada)
let arqueras =20;

//Declarar una constante(El usuario no puede cambiarlo)
const precio= 0.99;


//alert, prompt, confirm

alert("Hola");
const nombre = prompt("¿Cómo te llamas?");
console.log("Hola " + nombre);
const hambre = confirm("¿Tienes hambre?");

if (hambre) {
    console.log("Es hora de comer");
}
else{
    console.log("Continuemos programando");
    }

// funciones tradicionales

function atacar(){
    console.log("Atacar a los goblins");
}

atacar();


//funciones modernas

let accion_nbasica = (construccion) => {
    console.log("Construir");
}
accion_nbasica();
let accion = (construccion) => {
    console.log("Construir" + construccion);
}

accion(" cuartel");


// arreglo

const arreglo= ["Elemento1"]
const arreglo2= new Array();

arreglo.push("Otro elemento");
arreglo.push(5);

const elemento = 8;
arreglo.push(elemento);



arreglo[10] = "Uno más";

arreglo["dos"] = 2;

console.log(arreglo);

//Recorrido tradicional del arreglo
for(let i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}

//Recorrido alternativo del arreglo

for (let valor of arreglo){
    console.log(valor);
}

for (let indice in arreglo){
    console.log(indice);
}

//Objetos
const objeto = {atributo1: "Valor 1", atributo2: "Valor 2"};
objeto.atributo3 = 3;
console.log(objeto);


//modificar html

document.write("Hola");
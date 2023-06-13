//Definir variable
var texto = "Un texto"; //Declaración + asignación, sino texto:string;
var numero = 10;
var verdadero = true;
var cualquiera = "Cualquier valor";
verdadero = false;
//Definición de constantes
var nombre = "Agostina";
console.log("Hola 20.36");
//Vectores y arrays
var personas = ["Agostina", "Franca", "Julieta"];
console.log(personas);
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map(function (personas) {
        return "<li>" + personas + "</li>";
    }).join("") + //El join permite armar otro array, une cada uno de los elementos el join.
    "</ul>";

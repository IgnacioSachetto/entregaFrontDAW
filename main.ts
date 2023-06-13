//Definir variable
let texto:string = "Un texto"; //Declaración + asignación, sino texto:string;
let numero:number = 10;
let verdadero:boolean = true;
let cualquiera:any = "Cualquier valor";

verdadero = false;

//Definición de constantes
const nombre:string = "Agostina";
console.log("Hola 20.36");

//Vectores y arrays
let personas:string[]=["Agostina", "Franca", "Julieta"];
console.log(personas);

let div_personas:HTMLElement = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
                            personas.map((personas:string)=> {
                                return "<li>" + personas + "</li>";
                            }).join("") + //El join permite armar otro array, une cada uno de los elementos el join.
                             "</ul>"; 
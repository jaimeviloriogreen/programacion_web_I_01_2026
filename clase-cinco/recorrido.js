// Definir variables utilizando let
let nombreConLet = "Julio";
let apellidoConLet = "Pérez";
let edadConLet = 31;

// Definir variables utilizando const
const nombre = "Jaime";
const apellido = "vilorio";
const edad = 38;
const esProfesor = true;
const altura = 5.9;

// Operadores lógicos
console.log(false && false); // Y / and / &&
console.log(true || false); // O // or // ||
console.log(!true); // No // not / !

// Operadores relacionales
console.log("1" == 1); //===  Operador de igualdad flexible
console.log("1" === 1); //===  Operador de igualdad estricto

console.log("20" != 10); // Distito de flexible
console.log("20" !== 10); // Distito de estricto

// Objeto
const persona = {
  nombre: "Juan",
  apellido: "Santana",
  familia: {
    hija: "María Santana",
    esposa: "Josefina Pérez",
  },
};
console.log(persona);

const amigos = ["Juan", "Pedro", "José"];
amigos.push("Mario");
console.log(amigos);

// amigos.forEach((element) => console.log(element));
for (let i = 0; i < amigos.length; i++) {
  console.log(amigos[i]);
}

// Funciones
function saludar(nombre) {
  console.log(`Hola, mi nombre es${nombre}`);
}

const mostrarMensaje = (nombre) => console.log("Hola " + nombre);

saludar(nombre);
mostrarMensaje(nombre);

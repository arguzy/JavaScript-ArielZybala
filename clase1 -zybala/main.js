/*
//VAR: se declara de forma global en el SCOPE//
var valorPrimario = 30;

var nombre = "ariel";

valorPrimario = 120;

var Mensaje = "PARAMETRO desde variable";

console.log("PARAMETRO Lo ves en la consola del navegador");

console.log( Mensaje );

nombreusuario = prompt ( "ingrese su nombre");

console.log ( "bienvenido usuario" );

alert ("Gracias por ingresar tu nombre");

/*LET: se declara de forma local en el SCOPE
Se declara: let */


let numero1 = 15;
let numero2 = 20;
let numeroFinal;
//suma//
numeroFinal = numero1 + numero2;
console.log("La suma da: " + numeroFinal);
/*acá con el espacio dentro del string del log*/

//resta//
numeroFinal = numero1 - numero2;
console.log("La resta da:"+ " " + numeroFinal);

//división//
numeroFinal = numero1 / numero2;
console.log("La división da:"+ " " + numeroFinal);

//multiplicación//
numeroFinal = numero1 * numero2;
console.log("La multiplicación da:"+ " " + numeroFinal);

let nombre = prompt ( " ingrese su nombre ");
let apellido = prompt ( " ingrese su apellido ");
const espacio = " "
let nombreCompleto = nombre + espacio + apellido;

alert ("Bienvenido"+ espacio + nombreCompleto);
/* También se puede:
alert ("Bienvenido" + nombre + espacio + apellido)
y me ahorro, por ese momento una variable.
*/

let solicitaNro1 = parseInt(prompt("ingrese un número"));
let solicitaNro2 = parseInt(prompt("ingrese otro número"));
let cuenta = solicitaNro1 + solicitaNro2;
alert ("Al sumar da:" + espacio + cuenta);

/*
También se puede:
let solicitaNro1 = prompt("ingrese un número"));
let solicitaNro2 = prompt("ingrese otro número"));
let cuenta = parseInt( solicitaNro1 ) + parseInt( solicitaNro2 );
alert ("Al sumar da:" + espacio + cuenta);

En esta opción, el input del usuario queda en string, y sólo en la variable "cuenta", se vuelve un valor númerico. 
*/

solicitaNro1 = parseFloat(prompt("ingrese un número con decimales -por favor, use el punto para separar los decimales-"));
solicitaNro2 = parseInt(prompt("ingrese otro número"));
cuenta = solicitaNro1 + solicitaNro2;
alert ("Al sumar da:" + espacio + cuenta);


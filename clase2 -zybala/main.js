
// EJERCICIO PARA EL DESAFIO

alert ("Vamos a crear su Usuario")

let NombreUsuario = prompt("por favor, ingrese un nombre de usuario")

let ContrasenaUsuario = prompt("por favor, ingrese una contraseña")

let RepiteNombreUsuario = prompt("por favor, ingrese nuevamente el nombre de usuario")

let RepiteContrasenaUsuario = prompt("por favor, ingrese nuevamente  la contraseña");

if ((NombreUsuario === RepiteNombreUsuario) && (ContrasenaUsuario === RepiteContrasenaUsuario)){
    alert("El usuario ha sido creado correctamente")
} else if ((NombreUsuario === RepiteNombreUsuario) || (ContrasenaUsuario === RepiteContrasenaUsuario)) {
    alert("La contraseña o el usuario han sido mal ingresados")
} else {
    alert("Ni" + " " + NombreUsuario + " " + ", ni" + " " + ContrasenaUsuario + " " + "fueron correctamente repetidos")
}


// EJERCICIO  DE CLASE 20/9 COMPARACIÓN DE 2 NÚMEROS

let num1 = parseFloat(prompt("ingresa un número"));
let num2 = parseFloat(prompt("ingresa otro"));
let num3 = parseFloat(prompt("ingresa otro número más"));

if ((num1 > num2) && (num1 > num3)){
    alert(num1 +" "+ "es el número ingresado más alto")
} else if ((num2 > num1) && (num2 > num3)){
    alert(num2 +" "+ "es el número ingresado más alto")
} else {
    alert(num3 +" "+ "es el número ingresado más alto")
}


// EJERCICIO DÍA 21/09  

let precioMoto = parseFloat(prompt("Precio de lista para la moto elegida"));
let Dia = prompt("Hoy es martes, sábado o es feríado?");
let DiaNormalizado = Dia.toLowerCase()
let precioFinal;

if (DiaNormalizado == "martes"){
    precioFinal = precioMoto-(0.12 * precioMoto);
    alert("Los martes con el descuenta te queda en" + " " + precioFinal)
} else if (DiaNormalizado == "sabado"){
    precioFinal = precioMoto-(0.18 * precioMoto);
    alert("Los sábados con el descuenta te queda en" + " " + precioFinal)
} else if (DiaNormalizado == "feriado"){
    precioFinal = precioMoto-(0.25 * precioMoto);
    alert("Los feríados con el descuenta te queda en" + " " + precioFinal)
} else{
    alert("Esos días no hay descuento")
}


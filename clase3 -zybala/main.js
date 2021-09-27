



/* Ejercicio Tablas de multiplicar

let NumUser = Number(prompt("Ingrese el número de la tabla a multiplicar"))
for (let i = 0; i <= 10; i++){
    console.log((NumUser) * (i++))    
}
*/






/* Ejercicio Básico con while
while (opcion != "no"){
    let nroCalc1 = parseInt(prompt("ingrese numero a calcular"))
    let nroCalc2 = parseInt(prompt("ingrese numero a calcular"))
    let suma = nroCalc1 + nroCalc2
    console.log=( "LA SUMA DA" + suma)
    let opcion = prompt("Sigue o no?")
}
*/




/* Ejercicio Básico con do while
do {
    let nroCalc1 = parseInt(prompt("ingrese numero a calcular"))
    let nroCalc2 = parseInt(prompt("ingrese numero a calcular"))
    let suma = nroCalc1 + nroCalc2
    console.log=( "LA SUMA DA" + suma)
    let opcion = prompt("Sigue o no?")
}
while (opcion != "no");
*/






/*Ejercicio Votación

let VotosPartidoA = 1;
let VotosPartidoB = 1;
let VotosNulo = 1;

let ConteoA = 0;
let ConteoB = 0;
let ConteoVotoAnulado = 0;

for (let i=1; i<=5; i++) {
    let Votante = prompt("Ingrese su nombre").toLocaleLowerCase();
    if (Votante == "ariel"){
        alert("no puedes votar, por moroso")
    } else {
        let Edad = parseInt(prompt("Ingrese su edad"));

        if (Edad <= 15){
            alert("No tienes edad para votar")
        } else {

            let Voto = prompt("Por favor ingrese su voto por el partido A o B").toLowerCase(); 
            if (Voto == "a") {
                ConteoA = VotosPartidoA++;
            } else if( Voto == "b"){
                ConteoB = VotosPartidoB++;
            } else {
                ConteoVotoAnulado = VotosNulo++;
            }
        }
    }
}
console.log("Votos de Partido A " + ConteoA);
console.log("Votos de Partido B " + ConteoB);
console.log("Los Votos Anulados fueron: " + ConteoVotoAnulado);

if( ConteoA > ConteoB){
    console.log("Ganador Partido A")
} else if( ConteoA < ConteoB){
    console.log("Ganador Partido B")
}   else {
    console.log("Hubo Empate")
}
*/







/* Ejercicio Calculadora

let Operation = prompt("Desea Sumar, Restar, Multiplicar o Dividir? Si no deseas continuar, escribe: No").toLowerCase();
while (Operation != "no"){
    let FirstNumber = Number(prompt("ingrese un número"));
    let SecondNumber= Number(prompt("ingrese otro número"));
    if(Operation == "sumar"){
        console.log("Si sumas los números te da"+" "+ (FirstNumber + SecondNumber))
    } else if(Operation == "restar"){
        console.log("Si restas los números te da"+" "+ (FirstNumber - SecondNumber))
    } else if(Operation == "dividir"){
        console.log("Si divides los números te da"+" "+ (FirstNumber / SecondNumber))
    } else if(Operation == "multiplicar"){
        console.log("Si multiplicas los números te da"+" "+ (FirstNumber * SecondNumber))
        console.log( ())
    }
    Operation = prompt("Desea Sumar, Restar, Multiplicar o Dividir? Si no deseas continuar, escribe: No").toLowerCase();
}
*/






// Ejercicio Calcular promedio de Alumnos y de curso general
let CourseAverage = [];

for (i=1; i<=10; i++){
let Name = prompt("Nombre del Alumno").toLowerCase();
let Surname = prompt("Apellido del Alumno").toLowerCase();
let FirstQuali = Number(prompt("ingrese la calificación"));
let SecondQuali = Number(prompt("ingrese la calificación"));

let CompleteName = (Name+" "+Surname).toUpperCase();
let Summ = Number(FirstQuali + SecondQuali);
let AverageStudent = Number(Summ/2);
console.log ("El promedio del alumno" + " " + CompleteName + " "  + "es" + " " + AverageStudent);
CourseAverage[i] = Summ;
}
let GeneralAverage = (CourseAverage [1] + CourseAverage [2] + CourseAverage [3] + CourseAverage [4] + CourseAverage [5] + CourseAverage [6] + CourseAverage [7] + CourseAverage [8] + CourseAverage [9] + CourseAverage [10])/20;
console.log("Promedio general del curso es igual a"+ " " + GeneralAverage);




/* Ejercicio Solicita contraseña
let PassFormUser = prompt("Ingrese su Contraseña");
let PassLogIn;
do {
    PassLogIn = prompt("Ingrese su Contraseña");
} while (PassFormUser !== PassLogIn);
*/

/* ejercicios de iteración
for (i = 0; i <= 10; i++){
    console.log(i)
}
for (i = 10; i >= 0; i--){
    console.log(i)
}
*/



//-----------------------------------------------------------------------------------

/* Intento para crear un camino de razonamiento para ingresar datos de carrito

let ShopCart = [];
let item;
while (item != "finalizar compra"){
    item = prompt("Ingrese el Producto que quiere Comprar o Finalizar Compra").toLowerCase();
    if (item === "finalizar compra") { break; }
    let Amount = Number(prompt("ingrese la cantidad que quiere del producto seleccionado"))
    ShopCart [item] = Amount; 
}

console.log(ShopCart);
// a partir de este array tenemos que producto quiere y cuántos
*/


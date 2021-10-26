////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let fruta = prompt("Ingrese una fruta");
function Cargar (){
    let dni = prompt("DNI")
    let nameUser = prompt("ingrese nombre");
    localStorage.setItem(dni , nameUser);
    sessionStorage.setItem("fruta favorita" , fruta);

}

//console.log(localStorage.getItem(dni del usuario));

for(let i = 0 ; i < localStorage.length ; i++){

    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));

}

localStorage.clear();

const product1= (id:2, producto:"Arroz");
localStorage.setItem("producto1", product1); //asi queda object / Object en el archivo
*/
function productBuy(productSelected) {
    if (productSelected == idProduct) {
        for (let i = 0; i < fullProducts.length; i++) {
            for (let h = 0; h < fullProducts[i].length; h++) {
                return console.log(fullProducts[i][h]);
            }
        }
    }
}

console.log(productBuy("zdb1"));

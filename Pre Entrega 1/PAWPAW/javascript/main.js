class products{
    constructor(idProduct, categoryProduct, nameProduct , priceProduct , stockProduct){
    this.idProduct = idProduct;
    this.categoryProduct = categoryProduct
    this.nameProduct = nameProduct;
    this.priceProduct = priceProduct;
    this.stockProduct = stockProduct;  
}
    getIVA(a){
        if (a == 21){
        iva = parseInt(this.priceProduct * 1.21);
        return iva;
        }else if (a == 10){
        iva = parseInt(this.priceProduct * 1.10);
        return iva;
        } //uso parse int porque algunos numeros se vuelven muy largos con iva a 1.10
    }
}

let productPots = [];
let productFood = [];
let productClothe = [];
let productBelt = [];
let productPretal = [];
let productToys = [];
let statusCartShop = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////////
productPots.push(new products("zdb1" , "Tazones" , "ZeeDog B-Metal" , 700 , 1000)); 
productPots.push(new products("zdb2" , "Tazones" , "ZeeDog B-Standart" , 600 , 1500));
productPots.push(new products("zdb3" , "Tazones" , "ZeeDog B-Multi" , 3000 , 2000));
productPots.push(new products("zdb4" , "Tazones" , "ZeeDog B-Expand" , 500 , 2500));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
productFood.push(new products("es12" , "Alimento Balanceado" , "Eukanuba Small -12meses" , 300 , 1000));
productFood.push(new products("es1" , "Alimento Balanceado", "Eukanuba Small +1año" , 300 , 2000));
productFood.push(new products("em12" , "Alimento Balanceado" , "Eukanuba Medium -12meses" , 350 , 1000));
productFood.push(new products("em1" , "Alimento Balanceado", "Eukanuba Medium +1año" , 350 , 2000));
/////////////////////////////////////////////////////////////////////////////////////////////////////////
productClothe.push(new products("zdbp" , "Ropa para Perro" , "ZeeDog R-Buzo" , 800 , 1000));
productClothe.push(new products("zdbb" , "Ropa para Perro" , "ZeeDog R-Remera" , 800 , 1000));
productClothe.push(new products("zdi" , "Ropa para Perro", "ZeeDog R-Imper" , 1500 , 500));
productClothe.push(new products("zdc" , "Ropa para Perro", "ZeeDog R-Capa" , 2600 , 250));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
productBelt.push(new products("zddib" , "Correas para Perros" , "ZeeDog C-Dibujos" , 1000 , 2000));
productBelt.push(new products("zdneg" , "Correas para Perros" , "ZeeDog C-Negra" , 2500 , 500));
productBelt.push(new products("zdcel" , "Correas para Perros" , "ZeeDog C-Celeste" , 2400 , 750));
productBelt.push(new products("zdml" , "Correas para Perros", "ZeeDog C-ManosLibres" , 2200 , 1500));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
productPretal.push(new products("zdps" , "Pretales para Perros" , "ZeeDog P-Fuego" , 1800 , 1000));
productPretal.push(new products("zdpc" , "Pretales para Perros" , "ZeeDog P-Tigre" , 1800 , 1000));
productPretal.push(new products("zdpb" , "Pretales para Perros" , "ZeeDog P-Bicolor" , 2400 , 750));
productPretal.push(new products("zdph" , "Pretales para Perros" , "ZeeDog P-Control" , 2400 , 750));
////////////////////////////////////////////////////////////////////////////////////////////////////////////
productToys.push(new products("zdm" , "Jugetes para Perros" , "ZeeDog J-Mordillo" , 1200 , 1500));
productToys.push(new products("zdq" , "Jugetes para Perros" , "ZeeDog J-Quebrados" , 2400 , 1000));
productToys.push(new products("zdhel" , "Jugetes para Perros" , "ZeeDog J-Helado" , 2900 , 750));
productToys.push(new products("zdbs" , "Jugetes para Perros" , "ZeeDog J-BananaSnack" , 1000 , 2000));
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let requestToUser;
let productFromList;
let subtotal;
let amount;
let z;
let orderByNameLowerCase;
let aux;
let iva;
const minus = (a , b) => {return a - b};
const summ = (a , b) => {return a + b};
const multip = (a , b) => {return a * b};

///////////////////////////////////////////////// PROCESO DE COMPRA /////////////////////////////////////////////////////////

requestToUser = Number(prompt("Quiere realizar una compra? \n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
while(requestToUser != 0){
    
    if (requestToUser === 1 && requestToUser != NaN){
    requestToUser = Number(prompt("Qué tipo de producto desea comprar? Si no desea comprar nada escriba 0\n\n Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6 "))

        if(requestToUser <= 6 && requestToUser != NaN){
            while(requestToUser != 0){
                switch (requestToUser) {
                    case 1:
                        productFromList = productPots;
                        CreatOrder (productFromList);
                        break;
                    case 2:
                        productFromList = productFood;
                        CreatOrder (productFromList);
                        break;
                    case 3:
                        productFromList = productClothe;
                        CreatOrder (productFromList);
                        break;

                    case 4:
                        productFromList = productBelt;
                        CreatOrder (productFromList);
                        break;

                    case 5:
                        productFromList = productPretal;
                        CreatOrder (productFromList);
                        break;

                    case 6:
                        productFromList = productToys;
                        CreatOrder (productFromList);
                        break; 
                    
                    default:
                        break;
                }
                requestToUser = Number(prompt("Para continuar comprando seleccióne una opcion o escriba 0 para finalizar\n\n Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6 "))
            }
            } else if (requestToUser >= 7){ 
            alert("No es un número válido, vuelva a insistir");
            requestToUser = Number(prompt("Qué tipo de producto desea comprar? Si no desea comprar nada escriba 0\n\n Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6 "));
            } else {
            alert("No ingreso una término correcto, vuelva a insistir");
            requestToUser = Number(prompt("Qué tipo de producto desea comprar? Si no desea comprar nada escriba 0\n\n Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6"));
            }

    } else if (requestToUser > 1){ 
        alert("No es un número válido, vuelva a insistir");
        requestToUser = Number(prompt("Quiere realizar una compra? \n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
    } else {
        alert("No ingreso un término correcto, vuelva a insistir");
        requestToUser = Number(prompt("Quiere realizar una compra? \n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
    }
    }

alert('Su carrito de compras tiene: ')
for(i=0 ; i < statusCartShop.length ; i++){
    alert("El producto: " + statusCartShop[i].nameProduct + "\n\n por la cantidad de: " + statusCartShop[i].stockProduct +" unidades"+ "\n\n al precio de:\n\n" +"$" +statusCartShop[i].getIVA(21) + " con IVA consumidor final \n\n" + "$" + statusCartShop[i].getIVA(10) + " con IVA Responsable Inscripto" )}



//////////////////////ALGORITMO VER PRODUCTOS EN OFERTA/////////////////////

requestToUser = Number(prompt("Desea conocer las Ofertas del Mes? \n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
while(requestToUser != 0){
    if(requestToUser == 1 && requestToUser != NaN){
        getOnSale();
        requestToUser = 0;
    } else {
        alert("El número o término ingresado no es correcto, vuelva a insistir")
        requestToUser = Number(prompt("Desea conocer las Ofertas del Mes? \n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
    }
}


///////////////////////ALGORITMO ORDENAR PRODUCTOS POR NOMBRE o PRECIO - ASCENDENTE o DESCENDENTE/////////////////////////////////////

requestToClient = Number(prompt("Elija una Categoría:\n\n Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6"))
while(requestToClient != 0){
    if(requestToClient <= 6 && requestToClient != NaN){
        switch (requestToClient) {
        case 1:
        arrayCalled = productPots
        filtersApplicators(arrayCalled);
            break;
        case 2:
        arrayCalled = productFood
        filtersApplicators(arrayCalled);
            break;
        case 3:
        arrayCalled = productClothe
        filtersApplicators(arrayCalled);
            break;
        case 4:
        arrayCalled = productBelt
        filtersApplicators(arrayCalled);
            break;
        case 5:
        arrayCalled = productPretal
        filtersApplicators(arrayCalled);
            break;
        case 6:
        arrayCalled = productToys
        filtersApplicators(arrayCalled);
            break;

            default:
                break;
        }
        requestToClient = Number(prompt("Elija otra Categoría: Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6"))
    } else if (requestToClient >= 7 && requestToClient != NaN){
        alert("Para ese numéro no hay Categorías asignadas");
        requestToClient = Number(prompt("Elija una Categoría: Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6"));
    } else {
        alert("Para ese término no hay Categorías asignadas");
        requestToClient = Number(prompt("Elija una Categoría: Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6"));
    }

}


//////////////////////////////////////////////////FUNCIONES PARA EL PROCESO DE COMPRA DEL USUARIO CLIENTE/////////////////////////////////////////////////

function CreatOrder (productFromList){
    requestToUser = Number(prompt("Por favor selección uno de los productos:\n\n" + productFromList[0].nameProduct +", si desea este producto escriba 1\n\n" + productFromList[1].nameProduct +", si desea este producto escriba 2\n\n" + productFromList[2].nameProduct +", si desea este producto escriba 3\n\n" + productFromList[3].nameProduct +", si desea este producto escriba 4\n\n" +"Si no desea comprar escriba 0\n\n"));
    while( requestToUser != 0){
        if(requestToUser <= 4 && requestToUser != NaN){
        switch (requestToUser) {
        case 1:
        z = 0
        processingOrder (productFromList);
        break;
        case 2:
        z = 1
        processingOrder (productFromList);
        break;
        case 3:
        z = 2
        processingOrder (productFromList);
        break;
        case 4:
        z = 3
        processingOrder (productFromList);
        break;
        default:
        break;   
    } break;
    } else if (requestToUser > 5){
    alert("Ese número no tiene producto asignado")
    requestToUser = Number(prompt("Por favor selección uno de los productos:\n\n" + productFromList[0].nameProduct +", si desea este producto escriba 1\n\n" + productFromList[1].nameProduct +", si desea este producto escriba 2\n\n" + productFromList[2].nameProduct +", si desea este producto escriba 3\n\n" + productFromList[3].nameProduct +", si desea este producto escriba 4\n\n" +"Si no desea comprar escriba 0\n\n"))
    }  else {
    alert("Ese término no es aceptado")
    requestToUser = Number(prompt("Por favor selección uno de los productos:\n\n" + productFromList[0].nameProduct +", si desea este producto escriba 1\n\n" + productFromList[1].nameProduct +", si desea este producto escriba 2\n\n" + productFromList[2].nameProduct +", si desea este producto escriba 3\n\n" + productFromList[3].nameProduct +", si desea este producto escriba 4\n\n" +"Si no desea comprar escriba 0\n\n"))
    }
    }
}

function processingOrder (productFromList){
    alert("Ud. eligió el " + productFromList[z].nameProduct);
    requestToUser = Number(prompt("Que cantidad de Producto desea?"));
    productFromList[z].stockProduct = minus(productFromList[z].stockProduct, requestToUser);
    if (productFromList[z].stockProduct >= 0 && productFromList[z] != NaN){ 
    alert("Tenemos esa cantidad en stock");
    subtotal = multip(productFromList[z].priceProduct, requestToUser);
    alert("El precio por esa cantidad es: $" + subtotal);
    statusCartShop.push(new products(productFromList[z].idProduct, productFromList[z].categoryProduct, productFromList[z].nameProduct , subtotal , requestToUser));
    alert("Se ha ingresado la compra al carrito");
    }
    else if( productFromList[z].stockProduct < 0)
    { alert ("No tenemos esa cantidad")
    productFromList[z].stockProduct = summ(productFromList[z].stockProduct, requestToUser);
    } else {
    alert ("No es un término correcto") 
    }

}

////////////////////////////////////////FUNCION FILTRO OFERTAS//////////////////////////
function getOnSale(){
    let onSale = []; 
    onSale.push(productPots.filter(productPots => productPots.priceProduct <= 600));
    onSale.push(productFood.filter(productFood => productFood.priceProduct <= 300));
    onSale.push(productClothe.filter(productClothe => productClothe.priceProduct <= 800));
    onSale.push(productBelt.filter(productBelt => productBelt.priceProduct <= 2200));
    onSale.push(productPretal.filter(productPretal => productPretal.priceProduct <= 1800));
    onSale.push(productToys.filter(productToys => productToys.priceProduct <= 1200));
for(let i=0; i< onSale.length; i++){
    for(j=0; j< onSale[j].length; j++){
        alert(onSale[i][j].nameProduct + " su precio es de $" + onSale[i][j].priceProduct);
    }
    }
}



///////////////// FUNCTIONES PARA EN EL ALGORITMO ORDENAR //////////////////////////
function filtersApplicators (arrayCalled){
requestToClient = Number(prompt("Elija un tipo de filtro:\n\n Opción 1 Ordenar por Nombre Acendente, entonces escriba 1 \n\n Opción 2 Ordenar por Nombre Decendente, entonces escriba 2 \n\n Opción 3 Ordenar por Precio Acendente, entonces escriba 3 \n\n Opción 4 por Precio Decendente, entonces escriba 4 \n\n O en su defecto escriba 0 para Salir"));
        while (requestToClient != 0)
        if (requestToClient <= 4 && requestToClient != NaN){
            switch (requestToClient) {
                case 1:
                    orderByNameAcendent (arrayCalled);
                    break;
                
                case 2:
                    orderByNameDecendent (arrayCalled);
                    break;
                
                case 3:
                    orderByPriceAcendent (arrayCalled);
                    break;
                
                case 4:
                    orderByPriceDecendent (arrayCalled);
                    break;
                default:
                    break;
            }
        } else if (requestToClient >= 5 && requestToClient != NaN){
            alert("Para ese numéro no hay filtros asignados");
            requestToClient = Number(prompt("Elija un tipo de filtro: Opción 1 Ordenar por Nombre Acendente, entonces escriba 1 \n\n Opción 2 Ordenar por Nombre Decendente, entonces escriba 2 \n\n Opción 3 Ordenar por Precio Acendente, entonces escriba 3 \n\n Opción 4 por Precio Decendente, entonces escriba 4 \n\n O en su defecto escriba 0 para Salir"));
        } else {
            alert("Para ese término no hay filtros asignados");
            requestToClient = Number(prompt("Elija un tipo de filtro: Opción 1 Ordenar por Nombre Acendente, entonces escriba 1 \n\n Opción 2 Ordenar por Nombre Decendente, entonces escriba 2 \n\n Opción 3 Ordenar por Precio Acendente, entonces escriba 3 \n\n Opción 4 por Precio Decendente, entonces escriba 4 \n\n O en su defecto escriba 0 para Salir"));
        }
}

///////////////// FUNCIONES FILTROS ///////////////////////////

function orderByNameAcendent (arrayCalled){
    for (let i = 0; i < arrayCalled.length; i++){
        for(let m = i + 1; m < arrayCalled.length; m++){
            if (arrayCalled[i].nameProduct.toLowerCase() > arrayCalled[m].nameProduct.toLowerCase()){
                aux = arrayCalled[m].nameProduct;
                arrayCalled[m].nameProduct = arrayCalled[i].nameProduct;
                arrayCalled[i].nameProduct = aux;
            }
        }
    }
    
    for (let i=0; i < arrayCalled.length; i++){
        alert(arrayCalled[i].nameProduct);
    }
    return requestToClient = 0;
}

function orderByNameDecendent (arrayCalled){
    for (let i = 0; i < arrayCalled.length; i++){
        for(let m = i + 1; m < arrayCalled.length; m++){
            if (arrayCalled[i].nameProduct.toLowerCase() < arrayCalled[m].nameProduct.toLowerCase()){
                aux = arrayCalled[m].nameProduct;
                arrayCalled[m].nameProduct = arrayCalled[i].nameProduct;
                arrayCalled[i].nameProduct = aux;
            }
        }
    }
    
    for (let i=0; i < arrayCalled.length; i++){
        alert(arrayCalled[i].nameProduct);
    }
    return requestToClient = 0;

}

function orderByPriceAcendent (arrayCalled){
    for (let i = 0; i < arrayCalled.length; i++){
        for(let m = i + 1; m < arrayCalled.length; m++){
            if (arrayCalled[i].priceProduct > arrayCalled[m].priceProduct){
                aux = arrayCalled[m].priceProduct;
                arrayCalled[m].priceProduct = arrayCalled[i].priceProduct;
                arrayCalled[i].priceProduct = aux;
            }
        }
    }
    
    for (let i=0; i < arrayCalled.length; i++){
        alert(arrayCalled[i].nameProduct + " su precio es de $" + arrayCalled[i].priceProduct);
    } 
    return requestToClient = 0;
}

function orderByPriceDecendent (arrayCalled){
    for (let i = 0; i < arrayCalled.length; i++){
        for(let m=i + 1; m < arrayCalled.length; m++){
            if (arrayCalled[i].priceProduct < arrayCalled[m].priceProduct){
                aux = arrayCalled[m].priceProduct;
                arrayCalled[m].priceProduct = arrayCalled[i].priceProduct;
                arrayCalled[i].priceProduct = aux;
            }
        }
    }
    
    for (let i=0; i < arrayCalled.length; i++){
        alert(arrayCalled[i].nameProduct + " su precio es de $" + arrayCalled[i].priceProduct);
    } 
    return requestToClient = 0;
}



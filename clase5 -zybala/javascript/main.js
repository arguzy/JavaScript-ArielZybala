// el algoritmo tiene la función de que un usuario administrador pueda saber cual es el precio de un producto al público y cual es el stock y le orroje cuánto stock queda si esta por vender una X cantidad de ese stock

class productCreator {
    constructor (idProduct, nameProduct, priceProduct, stockProduct){
        this.idProduct = idProduct;
        this.nameProduct = nameProduct;
        this.priceProduct = priceProduct;
        this.stockProduct = stockProduct;
    }
    getStock(){
        return this.stockProduct;
    }
    productSold(saleOperation){
        this.stockProduct = this.stockProduct - saleOperation;
        return this.stockProduct;
    }
    getPriceToPublic(){
        this.priceProduct = this.priceProduct * 1.21;
        return this.priceProduct;
        }
    }



const product1 = new productCreator ("zdb1", "ZeeDog B-Metal", 700, 1000); 
const product2 = new productCreator ("zdb2", "ZeeDog B-Standart", 600, 1500); 
const product3 = new productCreator ("zdb3", "ZeeDog B-Multi", 3000, 2000); 
const product4 = new productCreator ("zdb4", "ZeeDog B-Expand", 500, 2500); 


let productList = [product1, product2, product3, product4];

let requestToUser = Number(prompt("Sobre qué producto desea consultar? \n\n Opción 1: ZeeDog B-Metal entonces escriba 1 \n\n Opción 2: ZeeDog B-Standart entonces escriba 2\n\n Opción 3: ZeeDog B-Multi entonces escriba 3\n\n Opción 4: ZeeDog B-Expand entonces escriba 4 \n\n Si no desea preguntar por ninguno ingrese 0"));
    while(requestToUser != 0){
    switch (requestToUser){
        case 1 :
            requestToUser = Number(prompt("Si quiere conocer cuánto stock hay disponible \n\n entonces escriba 1 \n\n Si quiere conocer el precio más IVA entonces escriba 2"));
            if (requestToUser == 1){
                doOperation(productList[0]);
            }else if (requestToUser == 2){
                finalPrice(productList[0]);
            }
            break
        case 2 :
            requestToUser = Number(prompt("Si quiere conocer cuánto stock hay disponible \n\n entonces escriba 1 \n\n Si quiere conocer el precio más IVA entonces escriba 2"));
            if (requestToUser == 1){
            doOperation(productList[1]);
            }else if (requestToUser == 2){
            finalPrice(productList[1]);
            }
        break
        case 3 :
            requestToUser = Number(prompt("Si quiere conocer cuánto stock hay disponible \n\n entonces escriba 1 \n\n Si quiere conocer el precio más IVA entonces escriba 2"));
            if (requestToUser == 1){
            doOperation(productList[2]);
            }else if (requestToUser == 2){
            finalPrice(productList[2]);
            }
        break
        case 4 :
            requestToUser = Number(prompt("Si quiere conocer cuánto stock hay disponible \n\n entonces escriba 1 \n\n Si quiere conocer el precio más IVA entonces escriba 2"));
            if (requestToUser == 1){
            doOperation(productList[3]);
            }else if (requestToUser == 2){
            finalPrice(productList[3]);
            }
        break
    }    
    requestToUser = Number(prompt("Desea consultar por otro? \n\n Opción 1: ZeeDog B-Metal entonces escriba 1 \n\n Opción 2: ZeeDog B-Standart entonces escriba 2\n\n Opción 3: ZeeDog B-Multi entonces escriba 3\n\n Opción 4: ZeeDog B-Expand entonces escriba 4 \n\n Si no desea preguntar por ninguno ingrese 0"));
    }
function doOperation (productConsult) {
    alert(productConsult.getStock());
    saleOperation = Number(prompt("Cuántos Productos quiere vender? si lo ha hecho \n\n Ingrese cuántos productos intenta vender. \n\n Caso contrario ingrese 0"));
    alert("Si intenta vender esa cantidad de productos, el stock de esa mercaderia luego será: " + productConsult.productSold(saleOperation));  
}

function finalPrice (productConsult){
    alert(productConsult.getPriceToPublic());
}

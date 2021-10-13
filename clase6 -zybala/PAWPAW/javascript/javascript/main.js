class products{
    constructor(idProduct, categoryProduct, nameProduct , priceProduct , stockProduct){
    this.idProduct = idProduct;
    this.categoryProduct = categoryProduct
    this.nameProduct = nameProduct;
    this.priceProduct = priceProduct;
    this.stockProduct = stockProduct;  
}
    productSold(saleOperation){
        this.stockProduct = this.stockProduct - saleOperation;
        if(this.stockProduct >= 0){
            return alert("Perfecto, tenemos esa cantidad en stock");
        } else if (this.stockProduct < 0){
            return alert("No tenemos tantos productos como Ud. solicita");
        }
    }
}

let productPots = [];
let productFood = [];
let productClothe = [];
let productBelt = [];
let productPretal = [];
let productToys = [];
let fullProducts = []



fullProducts.push(productPots , productFood , productClothe , productBelt , productPretal , productToys);
console.log(fullProducts);

let idProduct;
let categoryProduct;
let nameProduct;
let priceProduct;    
let stockProduct;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

idProduct = "zdb1";
categoryProduct = "Pots"
nameProduct ="ZeeDog B-Metal";
priceProduct = 700;    
stockProduct = 1000; 
productPots.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));
    
idProduct = "zdb2";
categoryProduct = "Pots"
nameProduct = "ZeeDog B-Standart";
priceProduct = 600;
stockProduct = 1500; 
productPots.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdb3";
categoryProduct = "Pots"
nameProduct ="ZeeDog B-Multi", 
priceProduct = 3000,
stockProduct = 2000; 
productPots.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdb4";
categoryProduct = "Pots"
nameProduct = "ZeeDog B-Expand",
priceProduct = 500,
stockProduct = 2500; 
productPots.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

idProduct = "es12"
categoryProduct = "food"
nameProduct = "Eukanuba Small -12meses"
priceProduct = 300
stockProduct = 1000
productFood.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "es1"
categoryProduct = "food"
nameProduct = "Eukanuba Small +1año"
priceProduct = 300
stockProduct = 2000
productFood.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "em12"
categoryProduct = "food"
nameProduct = "Eukanuba Medium -12meses"
priceProduct = 350
stockProduct = 1000
productFood.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "em1"
categoryProduct = "food"
nameProduct = "Eukanuba Medium +1año"
priceProduct = 350
stockProduct = 2000
productFood.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

idProduct = "zdbp"
categoryProduct = "clothes"
nameProduct = "ZeeDog R-Buzo"
priceProduct = 800
stockProduct = 1000
productClothe.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdbb"
categoryProduct = "clothes"
nameProduct = "ZeeDog R-Remera"
priceProduct = 800
stockProduct = 1000
productClothe.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdi"
categoryProduct = "clothes"
nameProduct = "ZeeDog R-Imper"
priceProduct = 1500
stockProduct = 500
productClothe.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdc"
categoryProduct = "clothes"
nameProduct = "ZeeDog R-Capa"
priceProduct = 2600
stockProduct = 250
productClothe.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

idProduct = "zddib"
categoryProduct = "belt"
nameProduct = "ZeeDog C-Dibujos"
priceProduct = 1000
stockProduct = 2000
productBelt.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdneg"
categoryProduct = "belt"
nameProduct = "ZeeDog C-Negra"
priceProduct = 2500
stockProduct = 500
productBelt.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdcel"
categoryProduct = "belt"
nameProduct = "ZeeDog C-Celeste"
priceProduct = 2400
stockProduct = 750
productBelt.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdml"
categoryProduct = "belt"
nameProduct = "ZeeDog C-ManosLibres"
priceProduct = 2200
stockProduct = 1500
productBelt.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

idProduct = "zdps"
categoryProduct = "pretal"
nameProduct = "ZeeDog P-Fuego"
priceProduct = 1800
stockProduct = 1000
productPretal.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdpc"
categoryProduct = "pretal"
nameProduct = "ZeeDog P-Tigre"
priceProduct = 1800
stockProduct = 1000
productPretal.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdpb"
categoryProduct = "pretal"
nameProduct = "ZeeDog P-Bicolor"
priceProduct = 2400
stockProduct = 750
productPretal.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdph"
categoryProduct = "pretal"
nameProduct = "ZeeDog P-Control"
priceProduct = 2400
stockProduct = 750
productPretal.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

idProduct = "zdm"
categoryProduct = "toy"
nameProduct = "ZeeDog J-Mordillo"
priceProduct = 1200
stockProduct = 1500
productToys.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdq"
categoryProduct = "toy"
nameProduct = "ZeeDog J-Quebrados"
priceProduct = 2400
stockProduct = 1000
productToys.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdhel"
categoryProduct = "toy"
nameProduct = "ZeeDog J-Helado"
priceProduct = 2900
stockProduct = 750
productToys.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

idProduct = "zdbs"
categoryProduct = "toy"
nameProduct = "ZeeDog J-BananaSnack"
priceProduct = 1000
stockProduct = 2000
productToys.push(new products(idProduct , categoryProduct , nameProduct , priceProduct , stockProduct));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let requestToUser;
const onSale = []; 
let lowerPrice;


requestToUser = Number(prompt("Desea conocer las Ofertas del Mes? \n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
if(requestToUser == 1){
lowerPrice = productPots.filter(productPots => productPots.priceProduct <= 600);
onSale.push(lowerPrice);

lowerPrice = productFood.filter(productFood => productFood.priceProduct <= 300);
onSale.push(lowerPrice);

lowerPrice = productClothe.filter(productClothe => productClothe.priceProduct <= 800);
onSale.push(lowerPrice);

lowerPrice = productBelt.filter(productBelt => productBelt.priceProduct <= 2200);
onSale.push(lowerPrice);

lowerPrice = productPretal.filter(productPretal => productPretal.priceProduct <= 1800);
onSale.push(lowerPrice);

lowerPrice = productToys.filter(productToys => productToys.priceProduct <= 1200);
onSale.push(lowerPrice);

for (i=0; i <= 5; i++){
    onSaleListing(onSale[i]);
}
} else {alert("Okey veo que ya conoce nuestros productos")}


requestToUser = Number(prompt("Quiere realizar una compra? \n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));

if (requestToUser == 1){
    requestToUser = Number(prompt("Qué tipo de producto desea comprar? Si no desea comprar nada escriba 0\n\n Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6 "))} 
    else{ 
        alert("Disculpe las molestias, adios");
    }
while(requestToUser != 0){
    switch (requestToUser) {
        case 1:
            alert("Ud. eligió los Tazones, Bebederos y Comederos para Perros");
            requestToUser = (prompt("Desea conocer su precio de mayor a menor?\n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
                    if(requestToUser == 1){
                        orderByDecendent(productPots);
                    } else { 
                        alert("Okey, veo que ya conoce los productos y los precios")
                    }
                    modelsQuestionListing(productPots);
                switch (requestToUser) {
                    case 1:
                    alert("Ud. eligió el " + productPots[0].nameProduct);
                    requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                    productPots[0].productSold(requestToUser);
                    break;
        
                case 2:
                    alert("Ud. eligió el " + productPots[1].nameProduct);
                    requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                    productPots[1].productSold(requestToUser);
                    break;
        
                case 3:
                    alert("Ud. eligió el " + productPots[2].nameProduct);
                    requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                    productPots[2].productSold(requestToUser);
                    break;
        
                case 4:
                    alert("Ud. eligió el " + productPots[3].nameProduct);
                    requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                    productPots[3].productSold(requestToUser);
                    break;
            
                default: alert("Ud. eligió una opción no válida")
                    break;
            }
            break;

        case 2:
            alert("Ud. eligió Alimento Balanceado para Perros");
            requestToUser = (prompt("Desea conocer su precio de mayor a menor?\n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
                    if(requestToUser == 1){
                        orderByDecendent(productFood);
                    } else { 
                        alert("Okey, veo que ya conoce los productos y los precios")
                    }
                    modelsQuestionListing(productFood);
                    switch (requestToUser) {
                        case 1:
                        alert("Ud. eligió el " + productFood[0].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productFood[0].productSold(requestToUser);
                        break;
            
                    case 2:
                        alert("Ud. eligió el " + productFood[1].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productFood[1].productSold(requestToUser);
                        break;
            
                    case 3:
                        alert("Ud. eligió el " + productFood[2].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productFood[2].productSold(requestToUser);
                        break;
            
                    case 4:
                        alert("Ud. eligió el " + productFood[3].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productFood[3].productSold(requestToUser);
                        break;
                
                    default: alert("Ud. eligió una opción no válida")
                        break;
                }
            break;

        case 3:
            alert("Ud. eligió la Ropa para Perros");
            requestToUser = (prompt("Desea conocer su precio de mayor a menor?\n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
                    if(requestToUser == 1){
                        orderByDecendent(productClothe);
                    } else { 
                        alert("Okey, veo que ya conoce los productos y los precios")
                    }
                    modelsQuestionListing(productClothe);
                    switch (requestToUser) {
                        case 1:
                        alert("Ud. eligió el " + productClothe[0].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productClothe[0].productSold(requestToUser);
                        break;
            
                    case 2:
                        alert("Ud. eligió el " + productClothe[1].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productClothe[1].productSold(requestToUser);
                        break;
            
                    case 3:
                        alert("Ud. eligió el " + productClothe[2].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productClothe[2].productSold(requestToUser);
                        break;
            
                    case 4:
                        alert("Ud. eligió el " + productClothe[3].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productClothe[3].productSold(requestToUser);
                        break;
                
                    default: alert("Ud. eligió una opción no válida")
                        break;
                }
            break;

        case 4:
            alert("Ud. eligió Correas para Perros");
            requestToUser = (prompt("Desea conocer su precio de mayor a menor?\n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
                    if(requestToUser == 1){
                        orderByDecendent(productBelt);
                    } else { 
                        alert("Okey, veo que ya conoce los productos y los precios")
                    }
                    modelsQuestionListing(productBelt);
                    switch (requestToUser) {
                        case 1:
                        alert("Ud. eligió el " + productBelt[0].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productBelt[0].productSold(requestToUser);
                        break;
            
                    case 2:
                        alert("Ud. eligió el " + productBelt[1].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productBelt[1].productSold(requestToUser);
                        break;
            
                    case 3:
                        alert("Ud. eligió el " + productBelt[2].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productBelt[2].productSold(requestToUser);
                        break;
            
                    case 4:
                        alert("Ud. eligió el " + productBelt[3].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productBelt[3].productSold(requestToUser);
                        break;
                
                    default: alert("Ud. eligió una opción no válida")
                        break;
                }
            break;

        case 5:
            alert("Ud. eligió los Pretales para Perro");
            requestToUser = (prompt("Desea conocer su precio de mayor a menor?\n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
                    if(requestToUser == 1){
                        orderByDecendent(productPretal);
                    } else { 
                        alert("Okey, veo que ya conoce los productos y los precios")
                    }
                    modelsQuestionListing(productPretal);
                    switch (requestToUser) {
                        case 1:
                        alert("Ud. eligió el " + productPretal[0].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productPretal[0].productSold(requestToUser);
                        break;
            
                    case 2:
                        alert("Ud. eligió el " + productPretal[1].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productPretal[1].productSold(requestToUser);
                        break;
            
                    case 3:
                        alert("Ud. eligió el " + productPretal[2].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productPretal[2].productSold(requestToUser);
                        break;
            
                    case 4:
                        alert("Ud. eligió el " + productPretal[3].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productPretal[3].productSold(requestToUser);
                        break;
                
                    default: alert("Ud. eligió una opción no válida")
                        break;
                }
            break;

        case 6:
            alert("Ud. eligió los Juguetes para Perro");
            requestToUser = (prompt("Desea conocer su precio de mayor a menor?\n\n Si - entonces escriba 1 \n\n No - entonces escriba 0"));
                    if(requestToUser == 1){
                        orderByDecendent(productToys);
                    } else { 
                        alert("Okey, veo que ya conoce los productos y los precios")
                    }
                    modelsQuestionListing(productToys);
                    switch (requestToUser) {
                        case 1:
                        alert("Ud. eligió el " + productToys[0].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productToys[0].productSold(requestToUser);
                        break;
            
                    case 2:
                        alert("Ud. eligió el " + productToys[1].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productToys[1].productSold(requestToUser);
                        break;
            
                    case 3:
                        alert("Ud. eligió el " + productToys[2].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productToys[2].productSold(requestToUser);
                        break;
            
                    case 4:
                        alert("Ud. eligió el " + productToys[3].nameProduct);
                        requestToUser = Number(prompt("Que cantidad de Producto desea?"));
                        productToys[3].productSold(requestToUser);
                        break;
                
                    default: alert("Ud. eligió una opción no válida")
                        break;
                }
            break; 
        
        default:
            break;
    }
    requestToUser = Number(prompt("Desea agregar otro producto al carrito? Si no desea comprar nada escriba 0\n\n Opción 1 Tazones, entonces escriba 1 \n\n Opción 2 Alimento Balanceado, entonces escriba 2 \n\n Opción 3 Ropa para Perros, entonces escriba 3 \n\n Opción 4 Correas, entonces escriba 4 \n\n Opción 5 Pretales, entonces escriba 5 \n\n Opción 6 Juguetes Para Perros, entonces escriba 6 "))
}


function orderByDecendent (SubArrayNamed){
    for (let i = 0; i < SubArrayNamed.length; i++){
        for(let m=i+1; m < SubArrayNamed.length; m++){
            if (SubArrayNamed[i].priceProduct < SubArrayNamed[m].priceProduct){
                aux = SubArrayNamed[m].priceProduct;
                SubArrayNamed[m].priceProduct = SubArrayNamed[i].priceProduct;
                SubArrayNamed[i].priceProduct = aux;
            }
        }
    }
    
    for (let i=0; i < SubArrayNamed.length; i++){
        alert(SubArrayNamed[i].nameProduct + " su precio es de $" + SubArrayNamed[i].priceProduct);
    } 
}

function modelsQuestionListing (SubArrayNamed) {
    requestToUser = Number(prompt("Por favor selección uno de los productos:\n\n" + SubArrayNamed[0].nameProduct +", si desea este producto escriba 1\n\n" + SubArrayNamed[1].nameProduct +", si desea este producto escriba 2\n\n" + SubArrayNamed[2].nameProduct +", si desea este producto escriba 3\n\n" + SubArrayNamed[3].nameProduct +", si desea este producto escriba 4\n\n" +"Si no desea comprar escriba 0\n\n"));
    return requestToUser;
}

function onSaleListing (SubArrayNamed) {
    for (let i=0; i < SubArrayNamed.length; i++){
        alert(SubArrayNamed[i].nameProduct + " su precio es de $" + SubArrayNamed[i].priceProduct);
    } 
}

function orderByDecendent (ArrayNamed){
    for (let i = 0; i < ArrayNamed.length; i++){
        for(let m=i+1; m < ArrayNamed.length; m++){
            if (ArrayNamed[i].priceProduct < ArrayNamed[m].priceProduct){
                aux = ArrayNamed[m].priceProduct;
                ArrayNamed[m].priceProduct = ArrayNamed[i].priceProduct;
                ArrayNamed[i].priceProduct = aux;
            }
        }
    }
    
    for (let i=0; i < ArrayNamed.length; i++){
        alert(ArrayNamed[i].nameProduct + " su precio es de $" + ArrayNamed[i].priceProduct);
    } 
}


class products{
    constructor(idProduct, categoryProduct, nameProduct , priceProduct , stockProduct){
    this.idProduct = idProduct;
    this.categoryProduct = categoryProduct
    this.nameProduct = nameProduct;
    this.priceProduct = priceProduct;
    this.stockProduct = stockProduct;  
    }
}

let productPots = [];


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


requestToUser = Number(prompt("Quiere conocer que tazones, bebederos o Comederos para Perros tenemos, de mayor a menor precio?\n\n Si - entonces escriba 1 \n\n No - entonces escriba 2 "))
if(requestToUser == 1){
    orderByDecendent(productPots);
} else {"Okey, será en otra ocasión, hasta luego"};






// algoritmo para desafio complementario

const suma = (a , b) => a + b;
const blackFriday = x => x * 0.50;
const animalDay = x => x * 0.25;
const iva = x => x * 0.21;
const twelvefees = x => x / 11; //interés del 10%
let ProductPrice = Number(prompt("ingrese el precio del producto"));
let numberDay = Number(prompt("ingrese el número de día del mes en que se realizará la compra"));
let finalPrice;
let payInFees;


if (numberDay == 29){
    finalPrice = animalDay(suma(ProductPrice, iva(ProductPrice)))
    alert("El precio, por ser el día del animal es " + finalPrice);
    payInFees = twelvefees(finalPrice);
    alert("Si optas por el plan de 12 cuotas. El precio de cada cuota en cuotas es " + payInFees);
} else if (numberDay == 26){
    finalPrice = blackFriday(suma(ProductPrice, iva(ProductPrice)))
    alert("El precio, por ser BlackFriday es " + finalPrice);
    payInFees = twelvefees(finalPrice);
    alert("Si optas por el plan de 12 cuotas. El precio de cada cuota en cuotas es " + payInFees);
} else {
    finalPrice = suma(ProductPrice, iva(ProductPrice));
    alert("Ese día no hay descuentos, el precio final es; " + finalPrice);
    payInFees = twelvefees(finalPrice);
    alert("Si optas por el plan de 12 cuotas. El precio de cada cuota en cuotas es " + payInFees);
}

    

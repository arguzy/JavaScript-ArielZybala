// algoritmo para desafio simulador
let productList = parseInt(prompt("Por favor seleccione un producto o presione 0 para salir:\n\n 1- Tazón , presione 1\n\n 2- Alimento Balanceado, presione 2\n\n 3- Prenda de Ropa, presione 3\n\n 4- Correa , presione 4\n\n 5- Pretal , presione 5\n\n 6- Juguete, presione 6 "));
let i = (-1);
let productSelected = [];
while (productList != 0){
    switch (productList){
    case 1:
        alert("Usted ha incorporado un tazón a su carrito");
        i = i+1;
        productSelected[i] = "Tazón"
    break
    case 2:
        alert("Usted ha incorporado alimento balanceado a su carrito");
        i = i+1;
        productSelected[i] = "Alimento Balanceado"
        break    
    case 3:
    alert("Usted ha incorporado una prenda de ropa a su carrito");
        i = i+1;
        productSelected[i] = "Prenda de Ropa"
        break
    case 4:
        alert("Usted ha incorporado una correa a su carrito");
        i = i+1;
        productSelected[i] = "Correa"
        break
    case 5:
        alert("Usted ha incorporado un pretal a su carrito");
        i = i+1;
        productSelected[i] = "Pretal"
        break
    case 6:
        alert("Usted ha incorporado un juguete a su carrito");
        i = i+1;
        productSelected[i] = "Juguete"
        break
    }
    productList = parseInt(prompt("Por favor seleccione un producto o presione 0 para salir:\n\n 1- Tazón , presione 1\n\n 2- Alimento Balanceado, presione 2\n\n 3- Prenda de Ropa, presione 3\n\n 4- Correa , presione 4\n\n 5- Pretal , presione 5\n\n 6- Juguete, presione 6 "));
    }
    console.log("Usted tiene incorporado en su carrito los siguientes productos:" + " " + productSelected);


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

    

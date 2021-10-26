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
    takeStock(){
        this.stockProduct = this.stockProduct - 1;
    }
    getNewOrder(){
    orderToBuy = [this.nameProduct , this.priceProduct];
}

}
let orderToBuy = [];
let name;
let price;
let amount;
let deletebutton;
let productPots = [];
let productFood = [];
let productClothe = [];
let productBelt = [];
let productPretal = [];
let productToys = [];
let statusCartShop = [];
let fullProducts = [];


fullProducts.push(productPots);
fullProducts.push(productFood);
fullProducts.push(productClothe);
fullProducts.push(productBelt);
fullProducts.push(productPretal);
fullProducts.push(productToys);

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




let subtotal;
let fullOrder = [];
let toCartShop = [];
function productBuy(productSelected){
        for (let i = 0; i < fullProducts.length; i++) {
            for (let h = 0; h < fullProducts[i].length; h++) {
                if (productSelected == fullProducts[i][h].idProduct) {
                    fullProducts[i][h].takeStock();
                    fullProducts[i][h].getNewOrder();                    
                    fullOrder.push(orderToBuy)
                    toCartShop = JSON.stringify(fullOrder);
                    localStorage.setItem(`basket${i}`, toCartShop);
                    toCartShop = JSON.parse(localStorage.getItem(`basket${i}`))
                    

                }
            }
        }
    }


    function cartShopStatus(array){
                for(i = 0 ; i< array.length ; i++){

                const newlist = document.getElementById("tableEcommerce")
                let contenedor = document.createElement("tr");

                contenedor.innerHTML = `<td>${array[i][0]}</td>
                                        <td>${array[i][1]}</td>`
                newlist.appendChild(contenedor);
                
    }
}


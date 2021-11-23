let quarterToBuy = document.querySelectorAll(".quarter__buy");
let preOrder = [];

for(let button of quarterToBuy){
    button.addEventListener("click" , addCartShop)
}


function addCartShop(e){
    let nodeButton = e.target;
    let nodeCards = nodeButton.parentNode.parentNode;
    let productImage = nodeCards.querySelector("img").src;
    let productName = nodeCards.querySelector("#nameItem").textContent;
    let productPrice = nodeCards.querySelector("#priceItem").textContent;
    let productSubtotal = nodeCards.querySelector("#subtotalItem").textContent;
    let productUnits = nodeCards.querySelector("#unitsOfItem").textContent;

    const productSelected = {
    Image : productImage,
    Name : productName,
    Price : productPrice,
    Units : productUnits,   
    Subtotal : productSubtotal
    }

    preOrder.push(productSelected);
    
    newOrderToBy(productSelected);
}

function newOrderToBy (instance){
    const showOrder = document.getElementById("tablePreOrder");
    let content = document.createElement("tr");
    
    content.innerHTML = 
                   `<td class="fifth__imgProd"><img src="${instance.Image}"></td>
                    <td><p class="fifth__text">${instance.Name}</p></td>
                    <td><p class="fifth__text">$${instance.Price}</p></td>
                    <td><p class="fifth__text">${instance.Units}</p></td>
                    <td><p class="fifth__text">${instance.Subtotal}</p></td>
                    <td><button class="quarter__trash">Quitar</button></td>`
    showOrder.appendChild(content);
                }


//Función para hacer la suma final
//const finalResults = array-de-productos-en-el-carrito.reduce((acc , b) => acc + b.precio, 0)


let productsDataBase = [];
productsDataBase [0] = {idProduct : "zdb1" , categoryProduct : "Tazones" , nameProduct : "ZeeDog B-Metal" , priceProduct: 700 , stockProduct: 1000}; 
productsDataBase [1] = {idProduct : "zdb2" , categoryProduct : "Tazones" , nameProduct : "ZeeDog B-Standart" , priceProduct : 600 , stockProduct : 1500};
productsDataBase [2] = {idProduct : "zdb3" , categoryProduct : "Tazones" , nameProduct : "ZeeDog B-Multi" , priceProduct : 3000 , stockProduct :  2000};
productsDataBase [3] = {idProduct : "zdb4" , categoryProduct : "Tazones" , nameProduct : "ZeeDog B-Expand" , priceProduct : 500 , stockProduct : 2500};

productsDataBase [4] = {idProduct : "es12" , categoryProduct : "Alimento Balanceado" , nameProduct : "Eukanuba Small -12meses" , priceProduct : 300 , stockProduct : 1000};
productsDataBase [5] = {idProduct : "es1" , categoryProduct : "Alimento Balanceado", nameProduct : "Eukanuba Small +1año" , priceProduct : 300 , stockProduct : 2000};
productsDataBase [6] = {idProduct : "em12" , categoryProduct : "Alimento Balanceado" , nameProduct : "Eukanuba Medium -12meses" , priceProduct : 350 , stockProduct : 1000};
productsDataBase [7] = {idProduct : "em1" , categoryProduct : "Alimento Balanceado", nameProduct : "Eukanuba Medium +1año" , priceProduct : 350 , stockProduct : 2000};

productsDataBase [8] = {idProduct : "zdbp" , categoryProduct : "Ropa para Perro" , nameProduct : "ZeeDog R-Buzo" , priceProduct : 800 , stockProduct : 1000};
productsDataBase [9] = {idProduct : "zdbb" , categoryProduct : "Ropa para Perro" , nameProduct : "ZeeDog R-Remera" , priceProduct : 800 , stockProduct : 1000};
productsDataBase [10] = {idProduct : "zdi" , categoryProduct : "Ropa para Perro", nameProduct : "ZeeDog R-Imper" , priceProduct : 1500 , stockProduct :  500};
productsDataBase [11] = {idProduct : "zdc" , categoryProduct : "Ropa para Perro", nameProduct : "ZeeDog R-Capa" , priceProduct : 2600 , stockProduct :  250};

productsDataBase [12] = {idProduct : "zddib" , categoryProduct : "Correas para Perros" , nameProduct : "ZeeDog C-Dibujos" , priceProduct : 1000 , stockProduct :  2000};
productsDataBase [13] = {idProduct : "zdneg" , categoryProduct : "Correas para Perros" , nameProduct : "ZeeDog C-Negra" , priceProduct : 2500 , stockProduct :  500};
productsDataBase [14] = {idProduct : "zdcel" , categoryProduct : "Correas para Perros" , nameProduct : "ZeeDog C-Celeste" , priceProduct : 2400 , stockProduct :  750};
productsDataBase [15] = {idProduct : "zdml" , categoryProduct : "Correas para Perros", nameProduct : "ZeeDog C-ManosLibres" , priceProduct : 2200 , stockProduct :  1500};

productsDataBase [16] = {idProduct : "zdps" , categoryProduct : "Pretales para Perros" , nameProduct : "ZeeDog P-Fuego" , priceProduct : 1800 , stockProduct :  1000};
productsDataBase [17] = {idProduct : "zdpc" , categoryProduct : "Pretales para Perros" , nameProduct : "ZeeDog P-Tigre" , priceProduct : 1800 , stockProduct :  1000};
productsDataBase [18] = {idProduct : "zdpb" , categoryProduct : "Pretales para Perros" , nameProduct : "ZeeDog P-Bicolor" , priceProduct : 2400 , stockProduct :  750};
productsDataBase [19] = {idProduct : "zdph" , categoryProduct : "Pretales para Perros" , nameProduct : "ZeeDog P-Control" , priceProduct : 2400 , stockProduct :  750};

productsDataBase [20] = {idProduct : "zdm" , categoryProduct : "Jugetes para Perros" , nameProduct : "ZeeDog J-Mordillo" , priceProduct : 1200 , stockProduct :  1500};
productsDataBase [21] = {idProduct : "zdq" , categoryProduct : "Jugetes para Perros" , nameProduct : "ZeeDog J-Quebrados" , priceProduct : 2400 , stockProduct :  1000};
productsDataBase [22] = {idProduct : "zdhel" , categoryProduct : "Jugetes para Perros" , nameProduct : "ZeeDog J-Helado" , priceProduct : 2900 , stockProduct :  750};
productsDataBase [23] = {idProduct : "zdbs" , categoryProduct : "Jugetes para Perros" , nameProduct : "ZeeDog J-BananaSnack" , priceProduct : 1000 , stockProduct :  2000};




let counter = 1;
let quantity;
let subtotalToChange;

const buttonCounters = document.querySelectorAll(".quarter__counter");
for(let unit of buttonCounters){
unit.addEventListener("click" , counterUnits);

}

function counterUnits (e) {
    let nodeChild = e.target;
    let nodeParents = nodeChild.parentNode.parentNode.parentNode;
    let idSelected = nodeParents.querySelector("#idItem").textContent;
    let incrementSelected = nodeParents.querySelector("#counterIncrement");
    let decrementSelected = nodeParents.querySelector("#counterDecrement");

        for(let i = 0; i < productsDataBase.length; i++){
            
        if(idSelected == productsDataBase[i].idProduct){
            if(e.target == incrementSelected){
                if(counter < productsDataBase[i].stockProduct){
                    quantity = counter++; 
                    subtotalToChange = productsDataBase[i].priceProduct * quantity

                    return updateDisplay(quantity, subtotalToChange);
                }
            } else if (e.target == decrementSelected) {
                 if(counter > 1){
                    quantity = counter--; 
                    subtotalToChange = productsDataBase[i].priceProduct * quantity

                    return updateDisplay(quantity, subtotalToChange);
                    }
                }
            }
        }
    }

    
    function updateDisplay (quantity , subtotalToChange){
        document.getElementById("subtotalItem").innerHTML = subtotalToChange;
        document.getElementById("unitsOfItem").innerHTML = quantity;
            }



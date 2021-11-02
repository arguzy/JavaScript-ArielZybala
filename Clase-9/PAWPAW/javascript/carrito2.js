function cardItem( category , imagItem , descriptionImag , firstImag , secondImag , id , named , price , stock ){
    this.category = category;
    this.imagItem = imagItem;
    this.descriptionImag = descriptionImag;
    this.firstImag = firstImag;
    this.secondImag = secondImag;
    this.id = id;
    this.named = named;
    this.price = price;
    this.stock = stock;
}

productsDataBase = [];
productsDataBase.push(new cardItem("pots" , "media/prdts/bowl/item-carrito-bowl1.png" , "tazón para perro" , 'media/prdts/bowl/item-carrito-bowl2.png' , 'media/prdts/bowl/item-carrito-bowl1.png' , "zdb1" , "ZeeDog B-Metal" , 700 , 1000)); 
productsDataBase.push(new cardItem("pots" , "media/prdts/bowl/item-carrito-bowl3.png" , "tazón para perro" , 'media/prdts/bowl/item-carrito-bowl4.png' , 'media/prdts/bowl/item-carrito-bowl3.png' , "zdb2" , "ZeeDog B-Standart" , 600 , 1500));
productsDataBase.push(new cardItem("pots" , "media/prdts/bowl/item-carrito-bowl5.png" , "tazón para perro" , 'media/prdts/bowl/item-carrito-bowl6.png' , 'media/prdts/bowl/item-carrito-bowl5.png' , "zdb3" , "ZeeDog B-Multi" , 3000 , 2000));
productsDataBase.push(new cardItem("pots" , "media/prdts/bowl/item-carrito-bowl7.png" , "tazón para perro" , 'media/prdts/bowl/item-carrito-bowl8.png' , 'media/prdts/bowl/item-carrito-bowl7.png' , "zdb4" , "ZeeDog B-Expand" , 500 , 2500));

productsDataBase.push(new cardItem("food" , "media/prdts/alimento/item-carrito-alimento1.png" , "aliemnto para perro" , 'media/prdts/alimento/item-carrito-alimento1.png' , 'media/prdts/alimento/item-carrito-alimento1.png' , "es12" , "Eukanuba Small -12meses" , 300 , 1000));
productsDataBase.push(new cardItem("food" , "media/prdts/alimento/item-carrito-alimento2.png" , "aliemnto para perro" , 'media/prdts/alimento/item-carrito-alimento2.png' , 'media/prdts/alimento/item-carrito-alimento2.png' , "es1" ,"Eukanuba Small +1año" , 300 , 2000));
productsDataBase.push(new cardItem("food" , "media/prdts/alimento/item-carrito-alimento3.png" , "aliemnto para perro" , 'media/prdts/alimento/item-carrito-alimento3.png' , 'media/prdts/alimento/item-carrito-alimento3.png' , "em12" , "Eukanuba Medium -12meses" , 350 , 1000));
productsDataBase.push(new cardItem("food" , "media/prdts/alimento/item-carrito-alimento4.png" , "aliemnto para perro" , 'media/prdts/alimento/item-carrito-alimento4.png' , 'media/prdts/alimento/item-carrito-alimento4.png' , "em1" ,"Eukanuba Medium +1año" , 350 , 2000));

productsDataBase.push(new cardItem("clothe" , "media/prdts/ropa/item-carrito-ropa1.png" , "ropa para perro" , 'media/prdts/ropa/item-carrito-ropa2.png' , 'media/prdts/ropa/item-carrito-ropa1.png' , "zdbp" , "ZeeDog R-Buzo" , 800 , 1000));
productsDataBase.push(new cardItem("clothe" , "media/prdts/ropa/item-carrito-ropa3.png" , "ropa para perro" , 'media/prdts/ropa/item-carrito-ropa4.png' , 'media/prdts/ropa/item-carrito-ropa3.png' , "zdbb" , "ZeeDog R-Remera" , 800 , 1000));
productsDataBase.push(new cardItem("clothe" , "media/prdts/ropa/item-carrito-ropa5.png" , "ropa para perro" , 'media/prdts/ropa/item-carrito-ropa6.png' , 'media/prdts/ropa/item-carrito-ropa5.png' , "zdi" , "ZeeDog R-Imper" , 1500 , 500));
productsDataBase.push(new cardItem("clothe" , "media/prdts/ropa/item-carrito-ropa7.png" , "ropa para perro" , 'media/prdts/ropa/item-carrito-ropa8.png' , 'media/prdts/ropa/item-carrito-ropa7.png' , "zdc" , "ZeeDog R-Capa" , 2600 , 250));

productsDataBase.push(new cardItem("Belt" , "media/prdts/correa/item-carrito-correa1.png" , "correa para perros" , 'media/prdts/correa/item-carrito-correa2.png' , 'media/prdts/correa/item-carrito-correa1.png' , "zddib" , "ZeeDog C-Dibujos" , 1000 , 2000));
productsDataBase.push(new cardItem("Belt" , "media/prdts/correa/item-carrito-correa3.png" , "correa para perros" , 'media/prdts/correa/item-carrito-correa4.png' , 'media/prdts/correa/item-carrito-correa3.png' , "zdneg" , "ZeeDog C-Negra" , 2500 , 500));
productsDataBase.push(new cardItem("Belt" , "media/prdts/correa/item-carrito-correa5.png" , "correa para perros" , 'media/prdts/correa/item-carrito-correa6.png' , 'media/prdts/correa/item-carrito-correa5.png' , "zdcel" , "ZeeDog C-Celeste" , 2400 , 750));
productsDataBase.push(new cardItem("Belt" , "media/prdts/correa/item-carrito-correa7.png" , "correa para perros" , 'media/prdts/correa/item-carrito-correa8.png' , 'media/prdts/correa/item-carrito-correa7.png' , "zdml" , "ZeeDog C-ManosLibres" , 2200 , 1500));

productsDataBase.push(new cardItem("pretals" , "media/prdts/pretal/item-carrito-pretal1.png" , "pretal para perros" , 'media/prdts/pretal/item-carrito-pretal2.png' , 'media/prdts/pretal/item-carrito-pretal1.png' , "zdps" , "ZeeDog P-Fuego" , 1800 , 1000));
productsDataBase.push(new cardItem("pretals" , "media/prdts/pretal/item-carrito-pretal3.png" , "pretal para perros" , 'media/prdts/pretal/item-carrito-pretal4.png' , 'media/prdts/pretal/item-carrito-pretal3.png' , "zdpc" , "ZeeDog P-Tigre" , 1800 , 1000));
productsDataBase.push(new cardItem("pretals" , "media/prdts/pretal/item-carrito-pretal5.png" , "pretal para perros" , 'media/prdts/pretal/item-carrito-pretal6.png' , 'media/prdts/pretal/item-carrito-pretal5.png' , "zdpb" , "ZeeDog P-Bicolor" , 2400 , 750));
productsDataBase.push(new cardItem("pretals" , "media/prdts/pretal/item-carrito-pretal7.png" , "pretal para perros" , 'media/prdts/pretal/item-carrito-pretal8.png' , 'media/prdts/pretal/item-carrito-pretal7.png' , "zdph" , "ZeeDog P-Control" , 2400 , 750));

productsDataBase.push(new cardItem("toys" , "media/prdts/toys/item-carrito-toy1.png" , "juguete para perro" , 'media/prdts/toys/item-carrito-toy2.png' , 'media/prdts/toys/item-carrito-toy1.png' , "zdm" , "ZeeDog J-Mordillo" , 1200 , 1500));
productsDataBase.push(new cardItem("toys" , "media/prdts/toys/item-carrito-toy3.png" , "juguete para perro" , 'media/prdts/toys/item-carrito-toy4.png' , 'media/prdts/toys/item-carrito-toy3.png' , "zdq" , "ZeeDog J-Quebrados" , 2400 , 1000));
productsDataBase.push(new cardItem("toys" , "media/prdts/toys/item-carrito-toy5.png" , "juguete para perro" , 'media/prdts/toys/item-carrito-toy6.png' , 'media/prdts/toys/item-carrito-toy5.png' , "zdhel" , "ZeeDog J-Helado" , 2900 , 750));
productsDataBase.push(new cardItem("toys" , "media/prdts/toys/item-carrito-toy7.png" , "juguete para perro" , 'media/prdts/toys/item-carrito-toy8.png' , 'media/prdts/toys/item-carrito-toy7.png' , "zdbs" , "ZeeDog J-BananaSnack" , 1000 , 2000));

for (let i = 0; i < productsDataBase.length ; i++){
    fullProducts(productsDataBase[i]);
}


function fullProducts (instance){
    const showCard = document.getElementById("catalog");
    let content = document.createElement("div");
    
    content.innerHTML = ` <div class="quarter__prod" data-category=${instance.category}>
                            <img src=${instance.imagItem}
                            onmouseover="this.src='${instance.firstImag}';"
                            onmouseout="this.src='${instance.secondImag}';"
                            alt="${instance.descriptionImag}" class="quarter__pic">
                        <div class="quarter__brand">
                            <h3 class="quarter__item nameItem">${instance.named}</h3>
                            <span class="quarter__code">Código:<p class="idItem">${instance.id}</p></span>
                        </div>
                        <div class="quarter__price">
                                <span class="quarter__amount" >PRECIO $<p class="priceItem">${instance.price}</p></span>
                        </div>
                        <div class="quarter__purchaser">
                            <button class="quarter__buy">COMPRA!</button>
                            <span class="quarter__summation"><p class="subtotalItem">000</p></span>
                            <div class="quarter__numerator">
                                <button class="quarter__counter counterDecrement">-</button>
                                <span class="quarter__num"><p class="unitsOfItem">0</p></span>
                                <button class="quarter__counter counterIncrement">+</button>
                            </div>
                        </div>
                        </div>`
    showCard.appendChild(content);
} 


let quarterToBuy = document.querySelectorAll(".quarter__buy");
let preOrder = [];

for(let button of quarterToBuy){
    button.addEventListener("click" , addCartShop)
}

function addCartShop(e){
    let nodeButton = e.target;
    let nodeCards = nodeButton.parentNode.parentNode;
    let productImage = nodeCards.querySelector("img").src;
    let productName = nodeCards.querySelector(".nameItem").textContent;
    let productPrice = nodeCards.querySelector(".priceItem").textContent;
    let productSubtotal = nodeCards.querySelector(".subtotalItem").textContent;
    let productUnits = nodeCards.querySelector(".unitsOfItem").textContent;

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
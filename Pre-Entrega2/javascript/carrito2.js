
/////////////////////////////////1er paso armo el array con una función creadora////////////////

///////////////////////////////// La función creadora////////////////

function cardItem( category , imagItem , descriptionImag , firstImag , secondImag , id , named , price , stock , subtotal , units ){
    this.category = category;
    this.imagItem = imagItem;
    this.descriptionImag = descriptionImag;
    this.firstImag = firstImag;
    this.secondImag = secondImag;
    this.id = id;
    this.named = named;
    this.price = price;
    this.stock = stock;
    this.subtotal = subtotal;
    this.units = units


    
}

///////////////////////////////// El Array ////////////////

productsDataBase = [];
productsDataBase.push(new cardItem("pots" , "media/prdts/bowl/item-carrito-bowl1.png" , "tazón para perro" , 'media/prdts/bowl/item-carrito-bowl2.png' , 'media/prdts/bowl/item-carrito-bowl1.png' , "zdb1" , "ZeeDog B-Metal" , 700 , 5 , 0 , 0)); 
productsDataBase.push(new cardItem("pots" , "media/prdts/bowl/item-carrito-bowl3.png" , "tazón para perro" , 'media/prdts/bowl/item-carrito-bowl4.png' , 'media/prdts/bowl/item-carrito-bowl3.png' , "zdb2" , "ZeeDog B-Standart" , 600 , 1500 , 0 , 0));
productsDataBase.push(new cardItem("pots" , "media/prdts/bowl/item-carrito-bowl5.png" , "tazón para perro" , 'media/prdts/bowl/item-carrito-bowl6.png' , 'media/prdts/bowl/item-carrito-bowl5.png' , "zdb3" , "ZeeDog B-Multi" , 3000 , 2000 , 0 , 0));
productsDataBase.push(new cardItem("pots" , "media/prdts/bowl/item-carrito-bowl7.png" , "tazón para perro" , 'media/prdts/bowl/item-carrito-bowl8.png' , 'media/prdts/bowl/item-carrito-bowl7.png' , "zdb4" , "ZeeDog B-Expand" , 500 , 2500 , 0 , 0));

productsDataBase.push(new cardItem("food" , "media/prdts/alimento/item-carrito-alimento1.png" , "aliemnto para perro" , 'media/prdts/alimento/item-carrito-alimento1.png' , 'media/prdts/alimento/item-carrito-alimento1.png' , "es12" , "Eukanuba Small -12meses" , 300 , 1000 , 0 , 0));
productsDataBase.push(new cardItem("food" , "media/prdts/alimento/item-carrito-alimento2.png" , "aliemnto para perro" , 'media/prdts/alimento/item-carrito-alimento2.png' , 'media/prdts/alimento/item-carrito-alimento2.png' , "es1" ,"Eukanuba Small +1año" , 300 , 2000 , 0 , 0));
productsDataBase.push(new cardItem("food" , "media/prdts/alimento/item-carrito-alimento3.png" , "aliemnto para perro" , 'media/prdts/alimento/item-carrito-alimento3.png' , 'media/prdts/alimento/item-carrito-alimento3.png' , "em12" , "Eukanuba Medium -12meses" , 350 , 1000 , 0 , 0));
productsDataBase.push(new cardItem("food" , "media/prdts/alimento/item-carrito-alimento4.png" , "aliemnto para perro" , 'media/prdts/alimento/item-carrito-alimento4.png' , 'media/prdts/alimento/item-carrito-alimento4.png' , "em1" ,"Eukanuba Medium +1año" , 350 , 2000 , 0 , 0));

productsDataBase.push(new cardItem("clothe" , "media/prdts/ropa/item-carrito-ropa1.png" , "ropa para perro" , 'media/prdts/ropa/item-carrito-ropa2.png' , 'media/prdts/ropa/item-carrito-ropa1.png' , "zdbp" , "ZeeDog R-Buzo" , 800 , 1000 , 0 , 0));
productsDataBase.push(new cardItem("clothe" , "media/prdts/ropa/item-carrito-ropa3.png" , "ropa para perro" , 'media/prdts/ropa/item-carrito-ropa4.png' , 'media/prdts/ropa/item-carrito-ropa3.png' , "zdbb" , "ZeeDog R-Remera" , 800 , 1000 , 0 , 0));
productsDataBase.push(new cardItem("clothe" , "media/prdts/ropa/item-carrito-ropa5.png" , "ropa para perro" , 'media/prdts/ropa/item-carrito-ropa6.png' , 'media/prdts/ropa/item-carrito-ropa5.png' , "zdi" , "ZeeDog R-Imper" , 1500 , 500 , 0 , 0));
productsDataBase.push(new cardItem("clothe" , "media/prdts/ropa/item-carrito-ropa7.png" , "ropa para perro" , 'media/prdts/ropa/item-carrito-ropa8.png' , 'media/prdts/ropa/item-carrito-ropa7.png' , "zdc" , "ZeeDog R-Capa" , 2600 , 250 , 0 , 0));

productsDataBase.push(new cardItem("Belt" , "media/prdts/correa/item-carrito-correa1.png" , "correa para perros" , 'media/prdts/correa/item-carrito-correa2.png' , 'media/prdts/correa/item-carrito-correa1.png' , "zddib" , "ZeeDog C-Dibujos" , 1000 , 2000 , 0 , 0));
productsDataBase.push(new cardItem("Belt" , "media/prdts/correa/item-carrito-correa3.png" , "correa para perros" , 'media/prdts/correa/item-carrito-correa4.png' , 'media/prdts/correa/item-carrito-correa3.png' , "zdneg" , "ZeeDog C-Negra" , 2500 , 500 , 0 , 0));
productsDataBase.push(new cardItem("Belt" , "media/prdts/correa/item-carrito-correa5.png" , "correa para perros" , 'media/prdts/correa/item-carrito-correa6.png' , 'media/prdts/correa/item-carrito-correa5.png' , "zdcel" , "ZeeDog C-Celeste" , 2400 , 750 , 0 , 0));
productsDataBase.push(new cardItem("Belt" , "media/prdts/correa/item-carrito-correa7.png" , "correa para perros" , 'media/prdts/correa/item-carrito-correa8.png' , 'media/prdts/correa/item-carrito-correa7.png' , "zdml" , "ZeeDog C-ManosLibres" , 2200 , 1500 , 0 , 0));

productsDataBase.push(new cardItem("pretals" , "media/prdts/pretal/item-carrito-pretal1.png" , "pretal para perros" , 'media/prdts/pretal/item-carrito-pretal2.png' , 'media/prdts/pretal/item-carrito-pretal1.png' , "zdps" , "ZeeDog P-Fuego" , 1800 , 1000 , 0 , 0));
productsDataBase.push(new cardItem("pretals" , "media/prdts/pretal/item-carrito-pretal3.png" , "pretal para perros" , 'media/prdts/pretal/item-carrito-pretal4.png' , 'media/prdts/pretal/item-carrito-pretal3.png' , "zdpc" , "ZeeDog P-Tigre" , 1800 , 1000 , 0 , 0));
productsDataBase.push(new cardItem("pretals" , "media/prdts/pretal/item-carrito-pretal5.png" , "pretal para perros" , 'media/prdts/pretal/item-carrito-pretal6.png' , 'media/prdts/pretal/item-carrito-pretal5.png' , "zdpb" , "ZeeDog P-Bicolor" , 2400 , 750 , 0 , 0));
productsDataBase.push(new cardItem("pretals" , "media/prdts/pretal/item-carrito-pretal7.png" , "pretal para perros" , 'media/prdts/pretal/item-carrito-pretal8.png' , 'media/prdts/pretal/item-carrito-pretal7.png' , "zdph" , "ZeeDog P-Control" , 2400 , 750 , 0 , 0));

productsDataBase.push(new cardItem("toys" , "media/prdts/toys/item-carrito-toy1.png" , "juguete para perro" , 'media/prdts/toys/item-carrito-toy2.png' , 'media/prdts/toys/item-carrito-toy1.png' , "zdm" , "ZeeDog J-Mordillo" , 1200 , 1500 , 0 , 0));
productsDataBase.push(new cardItem("toys" , "media/prdts/toys/item-carrito-toy3.png" , "juguete para perro" , 'media/prdts/toys/item-carrito-toy4.png' , 'media/prdts/toys/item-carrito-toy3.png' , "zdq" , "ZeeDog J-Quebrados" , 2400 , 1000 , 0 , 0));
productsDataBase.push(new cardItem("toys" , "media/prdts/toys/item-carrito-toy5.png" , "juguete para perro" , 'media/prdts/toys/item-carrito-toy6.png' , 'media/prdts/toys/item-carrito-toy5.png' , "zdhel" , "ZeeDog J-Helado" , 2900 , 750 , 0 , 0));
productsDataBase.push(new cardItem("toys" , "media/prdts/toys/item-carrito-toy7.png" , "juguete para perro" , 'media/prdts/toys/item-carrito-toy8.png' , 'media/prdts/toys/item-carrito-toy7.png' , "zdbs" , "ZeeDog J-BananaSnack" , 1000 , 2000 , 0 , 0));


///////////////////// 2do imprimo de mi array el html, con DOM el contenido de mi array  ///////

///////////////////// un for para iterar la función que imprime las card del Stock //////////

for (let i = 0; i < productsDataBase.length ; i++){
    fullProducts(i , productsDataBase[i]);
}

//////////// la función con la llamada a la div en la que se van a imprimir las card //////////

function fullProducts (i , instance){
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
                            <span class="quarter__summation"><p  class="subtotalItem" id="subtotalPicked${i}">${instance.subtotal}</p></span>
                            <div class="quarter__numerator">
                                <button class="quarter__counter counterDecrement">-</button>
                                <span class="quarter__num"><p class="unitsItem" id="unitsPicked${i}">${instance.units}</p></span>
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
    let productIdItem = nodeCards.querySelector(".idItem").textContent;
    let productPrice = nodeCards.querySelector(".priceItem").textContent;
    let productSubtotal = nodeCards.querySelector(".subtotalItem").textContent;
    let productUnits = nodeCards.querySelector(".unitsItem").textContent;

    const productSelected = {
    
    itemImage : productImage,
    itemName : productName,
    itemid : productIdItem,
    itemPrice : productPrice,
    itemUnits : productUnits,   
    itemSubtotal : productSubtotal
    }

    preOrder.push(productSelected);
    
    if(productUnits <= 0){
        alert("Debe indicar la cantidad de unidades que desea")
        
    } else {
        newOrderToBy(productSelected);}
        
}

function newOrderToBy (selected){
        const tableRow = Array.from(document.querySelectorAll("td"))
        console.log(tableRow);
        //if(){
        const showOrder = document.getElementById("tablePreOrder");
        let content;
           content = document.createElement("tr");
        
            content.innerHTML = 
                       `<td class="fifth__img Prod"><img src="${selected.itemImage}"></td>
                        <td><p class="fifth__name"><span>${selected.itemName}<span></p></td>
                        <td><p class="fifth__price">$${selected.itemPrice}</p></td>
                        <td><p class="fifth__units">${selected.itemUnits}</p></td>
                        <td><p class="fifth__subtotal">${selected.itemSubtotal}</p></td>
                        <td><button class="quarter__trash")">Quitar</button></td>`
        showOrder.appendChild(content);
        //} else if ()
        
    garbage();
    return
    } 



const buttonCounters = document.querySelectorAll(".quarter__counter");
//console.log(buttonCounters);
for(let unit of buttonCounters){
unit.addEventListener("click" , counterUnits);
//console.log(unit);

}

function counterUnits (e) {
    let nodeChild = e.target;
//console.log(nodeChild);

    let nodeParents = nodeChild.parentNode.parentNode.parentNode;
//console.log(nodeParents);

    let idSelected = nodeParents.querySelector(".idItem").textContent;
//console.log(idSelected);

    let incrementSelected = nodeParents.querySelector(".counterIncrement");
//console.log(incrementSelected);

    let decrementSelected = nodeParents.querySelector(".counterDecrement");



        for(let i = 0; i < productsDataBase.length; i++){
            
        if(idSelected == productsDataBase[i].id){

            if(nodeChild == incrementSelected){
                if(productsDataBase[i].units < productsDataBase[i].stock){
                    productsDataBase[i].units = productsDataBase[i].units + 1;
                    productsDataBase[i].subtotal = productsDataBase[i].units * productsDataBase[i].price;
                    updateDisplay (i, productsDataBase[i].units , productsDataBase[i].subtotal)
                    return 
                }
            } else if (nodeChild == decrementSelected){
                if(productsDataBase[i].units > 1){
                    productsDataBase[i].units = productsDataBase[i].units - 1;
                    productsDataBase[i].subtotal = productsDataBase[i].units * productsDataBase[i].price;
                    updateDisplay (i, productsDataBase[i].units , productsDataBase[i].subtotal)
                    return 
                    }
                }
            }
        }
    }

function updateDisplay (i, newUnits , newSubtotal){
    document.getElementById(`subtotalPicked${i}`).innerHTML = newSubtotal;
    document.getElementById(`unitsPicked${i}`).innerHTML = newUnits;
    }


function garbage (){
    const pullOff = document.querySelectorAll(".quarter__trash")
        for(let buttonQuit of pullOff){
        buttonQuit.addEventListener("click" , trash)
        }
        
    function trash(t){
        const nodeButtonQuit = t.target
        let nodeOfPreOrder = nodeButtonQuit.parentNode.parentNode;

  }}
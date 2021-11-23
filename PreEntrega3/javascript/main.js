
$( document ).ready(function() {
    let geoLoc = navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        getToWeat(lat , long);
    }
    
    
    
    
    function getToWeat(lat , long){
        
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=77f7124cdb54c76fc595ac6911da9bfe`,
        type:"GET",
        data:{
            appid:'77f7124cdb54c76fc595ac6911da9bfe',
            dataType:'jsonp',
            units:'metric',
            lang:'es'
        },
        success:function(data){
            let nameOfLocation = data.name;
            console.log(nameOfLocation);
            productEnable(nameOfLocation);
        }
    });
    
    }
    
    
    
    
    });

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
    $("#catalog").append(
                     ` <div class="quarter__prod" data-category=${instance.category}>
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
                            <button class="quarter__counter">-</button>
                            <span class="quarter__num"><p class="unitsItem" id="unitsPicked${i}">${instance.units}</p></span>
                            <button class="quarter__counter">+</button>
                            </div>
                            <span class="querter__stock" id="stockPicked${i}" hidden>${instance.stock}</span>
                        </div>
                        </div>`
    )
    
}


let preOrder=[];
let totalToPrint;

$(".quarter__buy").click(function addCartShop(e){
    e.stopPropagation();
    let nodeButton = e.target;
    let nodeCard = nodeButton.parentNode.parentNode;
    let productImage = nodeCard.children[0].src;
    let productName = nodeCard.children[1].children[0].textContent;
    let productIdItem = nodeCard.children[1].children[1].children[0].textContent;
    let productPrice = parseInt(nodeCard.children[2].children[0].children[0].textContent);
    let productSubtotal = parseInt(nodeCard.children[3].children[1].children[0].textContent);
    let productUnits = parseInt(nodeCard.children[3].children[2].children[1].textContent);

    const productSelected = {
    
        itemImage : productImage,
        itemName : productName,
        itemId : productIdItem,
        itemPrice : productPrice,
        itemUnits : productUnits,   
        itemSubtotal : productSubtotal
        }
        
        
        preOrder.push(productSelected);
        //console.log(productSelected.itemId);    
        //console.log(preOrder[0].itemId);
        
        //for(let i=0; i< preOrder.length; i++){
        //    if (productSelected.itemId == preOrder[i].itemId){
        //      
        //}
        /*
        
        for(let i = 0;  i< preOrder.length; i++){
            totalToPrint +=parseInt(preOrder[i].itemPrice);
        }
        
        console.log(totalToPrint)
        */
        
        
        newOrderToBy(productSelected);

        });

//esta funcion imprime en el html las rows con los td de cada producto
function newOrderToBy (selected){
    $("#tablePreOrder").append(
        `   <tr class="fifth__productSelected" id="${selected.itemId}">
            <td class="fifth__img Prod"><img src="${selected.itemImage}"></td>
            <td><p id="fifth__name">${selected.itemName}</p></td>
            <td><p class="fifth__price">$${selected.itemPrice}</p></td>
            <td><p class="fifth__units">${selected.itemUnits}</p></td>
            <td><p class="fifth__subtotal">${selected.itemSubtotal}</p></td>
            <td><button type="button" class="fifth__trash">Quitar</button></td>
            </tr>`
            )
        //con este evento asignado, a la clase del boton quitar, se borra el producto de la lista de previa a ordenar la compra
            $(".fifth__trash").on("click" , (e)=>{
                e.stopPropagation();
                e.target.parentNode.parentNode.remove();
        })

};

//En esta función se articula la logica con la que se detecta el click sobre los botones contadores. Se suman y se restan unidades, se realiza un stop sobre el stock y se calcula el subtotal entre cantidad de unidades y precio
$(".quarter__counter").click(function selectUnits(e){
    e.stopPropagation();
    let nodeCount = e.target;
    let nodeCountParent = nodeCount.parentNode.parentNode.parentNode;
    let idSelected = nodeCountParent.children[1].children[1].children[0].textContent;
    let btnCount = e.target.textContent

    for(let i = 0; i < productsDataBase.length; i++){

            
        if(idSelected == productsDataBase[i].id){
            
            if(btnCount == "+"){
               
                if(productsDataBase[i].units < productsDataBase[i].stock){
                    productsDataBase[i].units = productsDataBase[i].units + 1;
                    productsDataBase[i].subtotal = productsDataBase[i].units * productsDataBase[i].price;
                    updateDisplay (i, productsDataBase[i].units , productsDataBase[i].subtotal, productsDataBase[i].stock);
                    return 
                }
            } else if (btnCount == "-"){
                if(productsDataBase[i].units > 1){
                    productsDataBase[i].units = productsDataBase[i].units - 1;
                    productsDataBase[i].subtotal = productsDataBase[i].units * productsDataBase[i].price;
                    updateDisplay (i, productsDataBase[i].units , productsDataBase[i].subtotal, productsDataBase[i].stock);
                    return 
                    }
                }
            }
        }
    });
// Esta función tiene por objetivo mostrar el subtotal y la cantidad de unidades que va a pedir el usuario antes de apretar comprar.
function updateDisplay (i, newUnits , newSubtotal){
        $(`#subtotalPicked${i}`).html(`${newSubtotal}`);
        $(`#unitsPicked${i}`).html(`${newUnits}`);
        }

        function productEnable (nameOfLocation){
            if(nameOfLocation == "San Nicolas"){
                console.log("chequedo");
                $(`.querter__recargo`).html(`<p>Por su locación podemos grantizar que todos los productos llegan en 24hs</p>`);
            }};





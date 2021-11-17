

//primera función, llamo al dom de los iconos de red que estan en el footer, y con un event click y función flecha le doy un metodo animate que cambia el atributo font-size y le da una un tamaño de 55 pixeles en un segundo, después corre otra función flecha y luego con una función anonima del mismo modo los llevamos a un tamaño más pequeño en 5 segundos. 
$(".social__icon").click(()=>{
    $(".social__app").animate({fontSize: "55px"}, 1000, function(){$(".social__app").animate({fontSize: "30px"} , 5000)}) 
    
});


//al button con el id goback, le declaramos el evento click y con una función anonima le decimos a las tags html y body que se va a usar el metodo animate y que se le va a asignar un nuevo valor a la distancia que tienen del punto más alto de la página y que se va a efectuar en 2 segundos 

    $('#goBack').click(function () {
        $("html, body").animate({
            scrollTop: 1
        }, 2000) 
    }); 


//Como manera de excepción, en caso de no querer usar animate o no poder usarlo, se crea esta opción secundaria: Le decimos al button con id btnAnimate, que tiene un evento "on", cuyos argumentos indican que dado un evento click se correra la función anonima que imprime una modificación en el DOM, por medio de un método addClass, y que se le asigna una class que tiene pre cargado un efecto en CSS 
$("#btnAnimate").on("click", (function(){
    $(".split__image").addClass("onAnimated");

}));

//Este caso es simple, se le asigna al container que tiene el linck a la página del sitio que tiene el carrito, una asingación directa de dos efectos y una modificación al css
$(".market__container").css("padding" , "100px").fadeOut(2000).fadeIn(2000);


//Esta es una asignación de un evento on, con argumento Scroll y una función flecha al objeto window. Por medio de esta función declaramos una variable LET que informa a través del metodo ScrollTop la distancia en pixeles (más 500) que esta a medida que se va alejando del punto más alto de la pagina, el usuario. Despues viene un if que dice, que si la distancia que lleva sumando el usuarop - es decir, cuanto es lo que viene bajando la barra de navegación- es menor, al número entero de la distancia que tienen los objetos con clase ".split__image" al tope de la pagina del sitio -es decir que tan al fondo de la pagina estan- "mas 100px", corre el efecto fadeout en 2 segundo. Y el condicional if cierra con la segunda opción que una vez que es mayor se da un fadein en 2 segundo.
$(window).on("scroll" , ()=>{
    let distance = ($(window).scrollTop()) + 500;
    if(distance < (parseInt($(".split__image").position().top) + 100)){
        $(".split__image").fadeOut(2000);
    }
    else if(distance > (parseInt($(".split__image").position().top))){
        $(".split__image").fadeIn(2000);
    }
});
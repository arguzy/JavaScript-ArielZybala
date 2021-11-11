// asi queda declarado la function que instancia al objeto/array, al que se lo llama para ver la infrmación del perfil
function buildUser( userFullname , userNick , userAvatar , userPass , userEmail , userAddress , userPostalCode){
    this.userName = userFullname;
    this.userNick = userNick;
    this.userAvatar = userAvatar;
    this.userPass = userPass;
    this.userEmail = userEmail;
    this.userAddress = userAddress;
    this.userPostalCode = userPostalCode;
}

// asi queda declarado un objeto/array, al que se lo usa de base de datos.
let dataBaseUsers =  [];
dataBaseUsers.push(new buildUser("Luda Keita" , "luda123", "img/userLuda.jpg" , "1111" , "l@l.com" , "Alcorta 111" , 1234)); 
dataBaseUsers.push(new buildUser("Maria Silva" , "maria123", "img/userMaria.jpg" , "2222" , "m@m.com" , "Alcorta 222" , 1234)); 
dataBaseUsers.push(new buildUser("Pedro Toros" , "pedro123", "img/userPedro.jpg" , "3333" , "p@p.com" , "Alcorta 333" , 1234)); 

//capturo si hace click el boton y le mando que detone una función
$("#btnLogin").on("click" , loginData);

//esta función toma 4 datos iniciales, los compara, y si lo ingresado por el usuario es igual a lo que hay en el código, entonces detona la función mostrar perfil --- caso contario da error e imprime un mensaja en el span que se encuentra determinado por la variable error y de paso le agrega texto y css
function loginData(){
    var nameSign = $("#nameOfUser").val();
    var passSign = $("#password").val();
    let error = $(".error");
    
    for (let i=0 ; i < dataBaseUsers.length; i++ ){
        if((dataBaseUsers[i].userNick == nameSign && dataBaseUsers[i].userPass == passSign) || (dataBaseUsers[i].userName == nameSign && dataBaseUsers[i].userPass == passSign) || (dataBaseUsers[i].userEmail == nameSign && dataBaseUsers[i].userPass == passSign)){
    
            alert("Bienvenido usuario: "+ dataBaseUsers[i].userName);
    
            goToProfile(dataBaseUsers[i]);
    
        } else if (nameSign == "" || passSign == "") {
            error.html("No ha ingresado datos en alguna de las casillas");
        
        } else {
            error.html("El usuario o la contraseña son incorrectos");
        }
    }
}


//mostrar perfil que esta llamada por el usuario a la hora de validar, lo que hace es tomar al objeto/array usuario y le pisa al main tapando al loguin, con un concatenado estructura html y las llamas al objeto/array usuario

function goToProfile(dataUser){
    $("#main").html(
        
        "<div id='boxProfile'>"+
        "<p>"+"Nombre de Usuario: "+dataUser.userName+"</p>"+
        "<p>"+"Apodo: "+dataUser.userNick+"</p>"+
        "<p>"+"Dirección de Correo: "+dataUser.userEmail+"</p>"+
        "<p>"+"Domicilio: "+dataUser.userAddress+"</p>"+
        "<p>"+"Código Postal: "+dataUser.userPostalCode+"</p>"+
        "<img src="+dataUser.userAvatar+" alt='Foto de Perfil'>"+
        "<button type='button' id='newPost'>Agregar un nuevo comentario</button>"+
        "<div id='post'></div>"+
        "</div>"

    )
    //en este punto llama a otra función que es agregar info sobre el evento click que tiene origen en el hipertexto que agrega la propia función en el button con id agregarinfo
    $("#newPost").on("click" , postOfUser)
}

//agregar info, esta función se ubca en la div con id info y va abriendo hijos p a traves del promp de let parrafo, que se detona cada vez que se clickea en el boton con id agregarinfo
    function postOfUser(){
        let text = prompt("Desea agregar algo a su perfil");
        $("#post").append(`<p>${text}</p>`);
    }

$(document).ready(()=>{
    $("#btnSignin").click(function(){
        $(".seventh__formSignin").toggle("slow");
        $("#btnLogSign").html(
            //acá iría un boton submit, pero a los efectos didacticos lo llevo como un boton normal
            "<button class='btn btn--form' id='btnsignin' type='button'> Registrarse </button>"
        )
    }
    )
})

$("#btnsignin").click(dataCaptor);

//esta función toma 4 datos iniciales, los compara, y si lo ingresado por el usuario es igual a lo que hay en el código, entonces detona la función mostrar perfil --- caso contario da error e imprime un mensaja en el span que se encuentra determinado por la variable error y de paso le agrega texto y css
/*function createNewUser(){
    let pass = $("#password");
    let repass = $("#repass")
    let error = $(".error");
    
    if(pass != repass){
        error.html("La contraseña no coincide");

    } else {
        return dataCaptor();
    }
}
*/
let newUserSign = [];


function dataCaptor (){
    
let avatarSign = $("#avatarSign");
let nameSign = $("#nameOfUser").val();
let passSign = $("#password").val();
let nickSign = $("#nickOfUser").val();
let repassSign = $("#repass").val();
let emailSign = $("#emailSign").val();
let addressSign = $("#addressSign").val();
let postalSign = $("#postalSign").val();


const buildSign = { 
avatarUserSign :  avatarSign,
nameUserSign :  nameSign,
passUserSign : passSign,
nickUserSign : nickSign,
repassUserSign : repassSign,
emailUserSign : emailSign,
addressUserSign : addressSign,
postalUserSign : postalSign,
}
    newUserSign.push(buildSign);
    console.log (newUserSign);
    presentNewProfile(buildSign);
}

function  presentNewProfile(infoSign){
    $("#main").html(
        
        "<div id='boxProfile'>"+
        "<p>"+"Nombre de Usuario: "+infoSign.nameUserSign+"</p>"+
        "<p>"+"Apodo: "+infoSign.passUserSign+"</p>"+
        "<p>"+"Dirección de Correo: "+infoSign.emailUserSign+"</p>"+
        "<p>"+"Domicilio: "+infoSign.addressUserSign+"</p>"+
        "<p>"+"Código Postal: "+infoSign.postalUserSign+"</p>"+
        "</div>"

    )
}


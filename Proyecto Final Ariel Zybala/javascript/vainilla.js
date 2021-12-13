let message = [];
const buttonForm = document.getElementById('btnForm');


buttonForm.addEventListener('click' , () => {

    let fullName = document.getElementById('fullnameContact').value;
    let phone = parseFloat(document.getElementById('phoneContact').value);
    let email = document.getElementById('emailContact').value;
    let petName = document.getElementById('namePetContact').value;
    let theQuestion = document.getElementById('consultationContact').value;

    class obtainMessage {
        constructor(fullName, phone, email, petName, theQuestion){
        this.fullName = fullName
        this.phone = phone
        this.email = email
        this.petName = petName
        this.theQuestion = theQuestion
    }
    
}
    message.push(new obtainMessage(fullName, phone, email, petName, theQuestion))
    console.log(message[0])
    return printReceived(message[0]);
});

function printReceived(message){
    //document.getElementById('buttonForm').remove
    let postQuestion = document.getElementById('newMessage');
    postQuestion.innerHTML=
    `
    <div class="third__label">
        <h3 class="third__lead">Se ha ingresado la siguiente consulta:</h3>
        <div class="seventh__framingForms">
        <p class="third__post">Por el dueño: ${message.fullName} </p>
        <p class="third__post">El teléfono indicado fue ${message.phone} y la casilla de correo ${message.email}</p>
        <p class="third__post">Su mascota es: ${message.petName}</p>
        <p class="third__post">Su consulta fue: ${message.theQuestion}</p>
        <p class="third__post">Pronto nos pondremos en contacto, muchas gracias</p>
        </div>
    </div>
    
    `


}

//fullName, phone, email, petName, theQuestion
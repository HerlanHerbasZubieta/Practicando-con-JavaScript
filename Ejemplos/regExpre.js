let expText = 'Este es una practica con expresiones regulares 4';
let search = expText.search(/este/i);

let patter = /con/i;
let verifyText = patter.test(expText);

let patterNum = /[0-9]/;
let verifyText2 = patterNum.test(expText);

//verficar si es un correo electronico
function validationEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

  


console.log(validationEmail('ivan@gmail.com'));
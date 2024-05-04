let numRandom = Math.floor(Math.random() * 100) + 1;
let numUser = document.getElementById('num');
let message = document.getElementById('message');
let attemps = document.getElementById('attemps');
let num = 0;

function checkResult() {
    num++;
    attemps.innerHTML = 'Numero de intentos: ' + num;
    let valueUser = parseInt(numUser.value);
    if (valueUser < 1 || valueUser > 100 || valueUser == '' || isNaN(valueUser)) {
        message.innerHTML = 'Debes introducir un numero entre 1 y  100';
        message.style.color = 'red';
        return;
    }
    if (valueUser === numRandom) {
        message.innerHTML = 'Has acertado ¡¡Felicidades!! 🎉🎉';
        message.style.color = 'green';
    } else if (valueUser > numRandom) {
        message.innerHTML = 'El numero es menor';
        message.style.color = 'red';
    } else {
        message.innerHTML = 'El numero es mayor';
        message.style.color = 'blue';
    }
}


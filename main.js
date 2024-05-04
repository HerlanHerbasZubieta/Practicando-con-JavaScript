//funcion con parametros con return
function sum(num1, num2){
    return num1 + num2;
}

//funcion con parametros con return
function sum2(num1, num2){
    console.log('The sum of the numbers is:', num1 + num2);
}

const temperature = "60.8";
//transformar en celcius
function transformToCelsius(farenheit){
    return (farenheit - 32) * 5/9;
}

//funcion flecha o arrow funcion con return
let arrowfunctionCelsius = (farenheit) => (farenheit - 32) * 5/9;

//funcion flecha o arrow funcion sin return
let greet = () => console.log('Hola Mundo');

let isPair = (num) => num % 2 === 0 ? 'Es par' : 'Es impar';

let isHero = (name) => {
    if(name === 'Batman' ) return 'Es heroe';
    if(name === 'Juan') return 'Es ciudadano';
    else return 'No es heroe ni ciudadano';
}


let result = sum(5,7);
let resultTemperature = transformToCelsius(temperature);
console.log(`The result is sum: ${result}`);
sum2(5,8);
console.log(`The temperature in celsius is: ${parseInt(resultTemperature)}`);
console.log(`Use arrow function: ${parseInt(arrowfunctionCelsius(temperature))}`);
greet();
console.log(isPair('9'));
console.log(isHero('Batman'));

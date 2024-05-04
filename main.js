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

//funcion flecha o arrow function sin return
let greet = () => console.log('Hola Mundo');

let isPair = (num) => num % 2 === 0 ? 'Es par' : 'Es impar';

//arrow function con mas lineas de codigo
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

//OBJETOS
let car1 = {
    model: 'Tesla',
    year: 2020,
    color: 'red'
}

let car2 = {
    model: 'Ford',
    year: 2019,
    color: 'blue'
}

let student = {
    name: 'Juan',
    lastName: 'Perez',
    age: '15',
    grade: '3ª',
    section: 'A',
    subjects: ['Math', 'Programming', 'English'], //un array dentro de un onjeto
    description: { // un objeto dentro de un objeto
        height: '1.5m',
        weight: '70kg'
    },
    information: function(){ //una funcion dentro de un objeto
        return `The student ${this.name} ${this.lastName} is ${this.age} years old, is grade ${this.grade} and is section ${this.section}`
    }

}

//cambiando valor de un objeto
car1.model = 'Toyota';
car2["color"] = 'green';

console.log('The car1 model is: ', car1.model);
console.log('The car2 color is: ', car2["color"]);
let studentInfo = student.information();
console.log(studentInfo);
let studentSubjects = student.subjects;
console.log(`The student subjects are: ${studentSubjects}`);

//Eventos
function showMessageAlert(){
    alert('Hola Mundo');
}

function showMessageText(){
    document.getElementById('text').innerHTML = 'Texto cambiado';
}

function showMessageChange(){
    document.getElementById('text').innerHTML = 'El texto fue cambiado';
}



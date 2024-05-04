//FECHA
const date = new Date();
console.log(date);

console.log('Dia:',date.getDate());
console.log('Mes:',date.getMonth()+1);
console.log('Año:',date.getFullYear());

let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('Hoy es:',date.getDate(),' de ',months[date.getMonth()],' de ',date.getFullYear());

//MATH
console.log(Math.PI); //numero pi
console.log(Math.SQRT1_2) //raiz cuadrada de 1/2
console.log(Math.SQRT2) //raiz cuadrada de 2
const num = 123.456789;
console.log(Math.round(num)); //redondea el numero
console.log(Math.ceil(num)); //redondea hacia arriba
console.log(Math.min(1,2,3,4,5,6,7,8,9,10)); //numero menor
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); //numero mayor
console.log(Math.random()*100); //numero aleatorio entre 0 y 10



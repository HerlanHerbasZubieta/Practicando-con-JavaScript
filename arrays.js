//ARRAYS
//inicializar un array con 4 elementos
let array = new Array(4);
array[0] = 'Cat';
array[1] = [1,4,6,6];
array[2] = {name: 'Juan', lastName: 'Perez'};
array[3] = () => 'Hola Mundo';
array[4] = 7
array[5] = {name: 'Juan', lastName: 'Perez'};

//tipos de metodos para arrays
let arrayNames = ['Juan', 'Pablo', 'Maria', 'Juana', 11];



console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]());

//tamaño de un array
console.log(arrayNames.length);

//ordenar un array
console.log(arrayNames.sort());

//mostrar el ultimo elemento
console.log(arrayNames[arrayNames.length - 1]);

let valuesText = '';
//Recorrer un array
for(let i = 0; i < arrayNames.length; i++){
    valuesText += '<li>' + arrayNames[i] + '</li>';
}

document.getElementById('list').innerHTML = valuesText;

//filtrar elementos de un array
let students = [
    {name: 'Marco', lastName: 'Perez', age: 23},
    {name: 'Juan', lastName: 'Perez', age: 21},
    {name: 'Maria', lastName: 'Gonzalez', age: 22},
    {name: 'Juana', lastName: 'Rodriguez', age: 23},
    {name: 'Juan', lastName: 'Martinez', age: 24},

]

let studentsFilter = students.filter(student => student.lastName == 'Perez');
console.log(studentsFilter);

for(let i = 0; i < studentsFilter.length; i++){
    console.log(studentsFilter[i].name);
}

// usando map para recorrer un array
let studentsMap = students.map(student => {
    if(student.name == 'Juan'){
        student.name = 'Juanito';
    }
    return student;
})
console.log(studentsMap);

// metodo fill si encuentra un valor igual a juanito todo se convierte a juanito
// let studentsFill = students.fill('Juanito');
// console.log(studentsFill);

//metodo find devuelve el valor si lo encuentra
let studentFind = students.find(student => student.name == 'Maria');
console.log(studentFind);

//metodo findIndex devuelve el indice del valor
let studentIndex = students.findIndex(student => student.name == 'Juanito');
console.log(studentIndex);

//metodo some devuelve true si encuentra el valor
let studentSome = students.some(student => student.name == 'Juan');
console.log(studentSome);

//metodo every devuelve true si todos los elementos son iguales
let arrayEvery = ['Juanito', 'Juanito', 'Juanito', 'Juanito', 'Juanito'];
let studentEvery = arrayEvery.every(x => x =='Juanito');
console.log(studentEvery);

//metodo pop devuelve el ultimo elemento y lo elimina
let arrayPop = ['Manzana', 'Pera', 'Mango', 'Banana', 'Limon'];
let fruitPop = arrayPop.pop();
console.log(arrayPop);
console.log(fruitPop);


//metodo unshift agrega un elemento al inicio del array
let arrayUnshift = ['Manzana', 'Pera', 'Mango', 'Banana', 'Limon'];
let fruitUnshift = arrayUnshift.unshift('Zanahoria');
console.log(arrayUnshift);
console.log(fruitUnshift);


//metodo shift devuelve el primer elemento y lo elimina
let arrayShift = ['Manzana', 'Pera', 'Mango', 'Banana', 'Limon'];
let fruitShift = arrayShift.shift();
console.log(arrayShift);
console.log(fruitShift);

//metodo push agrega un elemento al final del array
let arrayPush = ['Manzana', 'Pera', 'Mango', 'Banana', 'Limon'];
let fruitPush = arrayPush.push('Zanahoria');
console.log(arrayPush);
console.log(fruitPush);


//metodo splice elimina elementos de un array
let arraySplice = ['Manzana', 'Pera', 'Mango', 'Banana', 'Limon'];
let fruitSplice = arraySplice.splice(1, 2);
console.log(arraySplice);
console.log(fruitSplice);

//metodo slice devuelve un nuevo array con los elementos que se encuentren entre los indices
let arraySlice = ['Manzana', 'Pera', 'Mango', 'Banana', 'Limon'];
let fruitSlice = arraySlice.slice(1, 4);
console.log(arraySlice);
console.log(fruitSlice);

//metodo join une los elementos de un array en un string
let arrayJoin = ['Manzana', 'Pera', 'Mango', 'Banana', 'Limon', 'Zanahoria', 'Naranja'];
document.getElementById('join').innerHTML = arrayJoin.join(', ');

//metodo reduce devuelve un valor acumulado
let arrayReduce = [1, 2, 3, 4, 5, 1];
let sumReduce = arrayReduce.reduce((acc, cur) => acc + cur, 0);
console.log(arrayReduce);
console.log(sumReduce);

//metodo reduceRight devuelve un valor acumulado de derecha a izquierda
let arrayReduceRight = [1, 2, 3, 4, 5, 1, 2];
let sumReduceRight = arrayReduceRight.reduceRight((acc, cur) => acc+cur, 0 );
console.log(arrayReduceRight);
console.log(sumReduceRight);

//metodo includes devuelve true si encuentra el valor
let arrayIncludes = [1, 2, 3, 4, 5, 1, 2];
let valueIncludes = arrayIncludes.includes(9);
console.log(arrayIncludes);
console.log(valueIncludes);

//metodo indexOf devuelve el indice del valor
let arrayIndexOf = [1, 2, 3, 4, 5, 1, 2];
let indexOf = arrayIndexOf.indexOf(2);
console.log(arrayIndexOf);
console.log(indexOf);

//metodo lastIndexOf devuelve el indice del valor 
let arrayLastIndexOf = [1, 2, 3, 4, 5, 1, 2];
let lastIndexOf = arrayLastIndexOf.lastIndexOf(5);
console.log(arrayLastIndexOf);
console.log(lastIndexOf);

//ordenar un array de numeros con sort
let nums = [1,2,3,4,5,8,10,12,1,4,15,16,17,18,19,20]; //no ordena correctamente los numeros
console.log(nums.sort());

//para solucionar el error de ordenar numeros
let orderNums = nums.sort((a, b) => a - b);
console.log(orderNums);

 //de orden descendente
let orderNumsDesc = nums.sort((a, b) => b - a);
console.log(orderNumsDesc);


let arrayLenguages = ['Python', 'Java', 'C', 'C++', 'JavaScript', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin'];

//forof recorre el array y muestra cada elemento
for (let lenguage of arrayLenguages) {
    console.log(lenguage);
}

//forin recorre el array y muestra cada elemento
for (let lenguage in arrayLenguages) {
    console.log(`Lenguaje ${lenguage}: ` + arrayLenguages[lenguage]);
}

let objectStudent = {
    name: 'Juan',
    age: 20,
    grade: 10,
    attendance: 90,
    average: 90,
    approved: false,
    gender: 'male',
    address: 'Calle 123, 4567890',
    phone: '1234567890',
    email: 'juan@example.com',
    password: '1234567890',
    role: 'student'
}

for(const key in objectStudent){
    console.log(`${key}: ${objectStudent[key]}`);
}

//foreach recorre el array y muestra cada elemento
arrayLenguages.forEach(lenguage => {
    console.log(lenguage);
});


//while consiste en un ciclo que se repite mientras se cumpla una condición
let age = 0;
while(age < 18){
    console.log(`Tienes ${age} años, no tienes acceso a la aplicación`);
    age++;
}
console.log(`Tienes ${age} años, tienes acceso a la aplicación`);

//dowhile consiste en un ciclo que se repite mientras se cumpla una condición
let age1 = 0;
do{
    console.log(`Tienes ${age1} años, tienes acceso a la aplicación`);
    age1++;
}while(age1 < 18);



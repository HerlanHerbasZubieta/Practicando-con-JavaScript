const story = document.querySelector('.story');

const setText = document.getElementById('set-text');
setText.addEventListener('click', () =>{
    story.textContent = "Se cambio el texto";
})

const clearText = document.getElementById('clear-text');
clearText.addEventListener('click', () =>{
    story.textContent = 'Se limpio texto';
})

const p1 = document.getElementById('p1');
p1.textContent = 'Hola como estan'
p1.innerHTML = '<strong>' + p1.textContent + '</strong>'

// Agregar y Eliminar Elementos
const list = document.querySelector('.list');
const addItem = document.getElementById('addItem');
const removeItem = document.getElementById('removeItem');
let count = null;

addItem.addEventListener('click', (element)=> {
    const newItem = document.createElement('li');
    count = sum(count)
    newItem.textContent = `item ${count}`
    list.appendChild(newItem)
})

removeItem.addEventListener('click', ()=>{
    if(list.children.length > 0){
        list.removeChild(list.lastElementChild)
    }
})

function sum(count) {
    return count +1;
}

// agregar texto
const text = document.querySelector('.output');
const buttonText = document.querySelector('.myBtn');

buttonText.addEventListener('click', () => {
    const newElement = document.createElement('p')
    newElement.textContent = "soy el div"
    newElement.style.color = 'lightgreen'
    text.appendChild(newElement)
})

// Seleccionar por ID
const mydiv = document.getElementById("myDiv");
console.log(mydiv.textContent);

// Seleccionar por Clase
const paragraph = document.getElementsByClassName("myClass");
console.log(paragraph.item(1).innerHTML);

// Seleccionar por Etiqueta
const listItems = document.getElementsByTagName("li");
// console.log(listItems.item(0).textContent);

// Seleccionar usando querySelector
const firstParagraph = document.querySelector(".myClass");
console.log(firstParagraph.textContent);

// Seleccionar todos los elementos con querySelectorAll
const allParagraphs = document.querySelectorAll(".myClass");
allParagraphs.forEach((element, index) => console.log(`Es ${element.innerHTML} ${index+1}`));


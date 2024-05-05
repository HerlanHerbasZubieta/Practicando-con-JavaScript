import { barcelona, roma, paris, londres } from './cities.js';

let links = document.querySelectorAll('a');
let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');
let paragraph = document.getElementById('paragraph');
let price = document.getElementById('price');

links.forEach(element =>  {
    element.addEventListener('click', function() {
        links.forEach(element2 =>  {
            element2.classList.remove('active');
        });

        this.classList.add('active')

        let content = getContent(this.innerText);

        title.innerHTML = content.title;
        subtitle.innerHTML = content.subtitle;
        paragraph.innerHTML = content.paragraph;
        price.innerHTML = content.price;
    })
});

function getContent(link){
    let content = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return content[link];
}
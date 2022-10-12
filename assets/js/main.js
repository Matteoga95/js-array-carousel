//Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato


//MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. 
//Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

//creo array di img
const slides = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
];

//mi istanzio la variabile con l'indice della slide attiva
let activeSlide = 0;

//mi seleziono il container a cui aggiungere le slide
const slidesElementParent = document.querySelector(".container")

//loop dentro l' array 
for (let i = 0; i < slides.length; i++) {

    //percorso dell'img
    const slideurl = slides[i]

    //creo l'elemento
    const imgEl = document.createElement('img');

    imgEl.src = slideurl
    
    //se è indice 0 gli metto la classe active
    if (i === 0) {
        imgEl.classList.add("active")
    } 

    //lo aggiungo all html
    slidesElementParent.insertAdjacentElement("beforeend", imgEl)

}



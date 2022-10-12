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

//mi seleziono il container a cui aggiungere le slide
const slidesElementParent = document.querySelector(".container");

//loop dentro l' array 
for (let i = 0; i < slides.length; i++) {

    //percorso dell'img
    const slideurl = slides[i];

    //creo l'elemento
    const imgEl = document.createElement('img');

    imgEl.src = slideurl;

    //se è indice 0 gli metto la classe active
    if (i === 0) {
        imgEl.classList.add("active");
    }

    //lo aggiungo all html
    slidesElementParent.insertAdjacentElement("beforeend", imgEl);

}

// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

//mi istanzio la variabile con l'indice della slide attiva
let activeSlideCounter = 0;


//all click del mouse sulla freccia che punta in alto
const arrowUp = document.querySelector(".arrow-up > i")

arrowUp.addEventListener("click", function () {

    //per prendere la lista di slide
    //per tutte le immagini presenti nel blocco
    const slidesAll = document.querySelectorAll(".container > img");

    const activeSlide = slidesAll[activeSlideCounter];

    //tolgo classe active a quella con indice attiva
    activeSlide.classList.remove("active");

    //incremento active slide di uno 
     //aggiungo un if se l'img è già indice massimo
     if (activeSlideCounter === slidesAll.length -1){

        activeSlideCounter = 0;
    } else{
        activeSlideCounter += 1;
    }
    

    //selezionono l' immagine dopo 
    const nextSlide = slidesAll[activeSlideCounter];

    //e gli applico la classe
    nextSlide.classList.add("active");


})

//all click del mouse sulla freccia che punta in basso
const arrowDown = document.querySelector(".arrow-down > i")

arrowDown.addEventListener("click", function () {

    //per prendere la lista di slide
    //per tutte le immagini presenti nel blocco
    const slidesAll = document.querySelectorAll(".container > img");

    const activeSlide = slidesAll[activeSlideCounter];

    //tolgo classe active a quella con indice attiva
    activeSlide.classList.remove("active");

    //incremento active slide di uno 

    //aggiungo un if se l'img è già indice 0
    if (activeSlideCounter === 0){

        activeSlideCounter = slidesAll.length -1;
    } else{
        activeSlideCounter -= 1;
    }
    

    //selezionono l' immagine dopo 
    const nextSlide = slidesAll[activeSlideCounter];

    //e gli applico la classe
    nextSlide.classList.add("active");


})

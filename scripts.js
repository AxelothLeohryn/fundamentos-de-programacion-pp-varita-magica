//Inhabilitar links <a>
let links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
    links[i].style.cssText = 'pointer-events: none';
}


//Imagenes: cambiar por gif random al clickear
let images = document.getElementsByTagName('img');
let gifs = ['./assets/magic-1.gif', './assets/magic-2.gif', './assets/magic-3.gif', './assets/magic-4.gif', './assets/magic-5.gif', './assets/magic-6.gif', ];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < images.length; i++) {
    let imgCurrentSrc = images[i].src;
    images[i].addEventListener('click', function() {
        images[i].src = gifs[getRandomIntInclusive(0, 5)];
    });
    images[i].addEventListener('mouseenter', function() {     //On mouse enter cambiar por abracadabra.gif
        images[i].src = './assets/abracadabra.gif';
    });
    images[i].addEventListener('mouseleave', function() {     //On mouse leave volver a link original
        images[i].src = imgCurrentSrc;
    });
}


//Parrafos: cambiar background color y color al clickear
let parrafos = document.getElementsByTagName('p');
for (let i = 0; i < parrafos.length; i++) {
    let pCurrentBColor = parrafos[i].style.backgroundColor;
    let pCurrentColor = parrafos[i].style.color;
    parrafos[i].addEventListener('click', function() {
        parrafos[i].style.backgroundColor = 'black';
        parrafos[i].style.color = 'red';
    });
    parrafos[i].addEventListener('mouseenter', function() {      //On mouse enter cambiar backgroundcolor y color
        parrafos[i].style.backgroundColor = 'grey';
        parrafos[i].style.color = 'pink';
    });
    parrafos[i].addEventListener('mouseleave', function() {     //On mouse leave volver al backgroundcolor y color originales
        parrafos[i].style.backgroundColor = pCurrentBColor;
        parrafos[i].style.color = pCurrentColor;
    })
}


//articles y sections: cambiar background color
let articlesAndSections = document.querySelectorAll('article, section');
for (let i = 0; i < articlesAndSections.length; i++) {
    let articleAndSectionsCurrentBColor = articlesAndSections[i].style.backgroundColor;
    articlesAndSections[i].addEventListener('click', function() {
        articlesAndSections[i].style.backgroundColor = 'blue';
    });
    articlesAndSections[i].addEventListener('mouseenter', function() {
        articlesAndSections[i].style.backgroundColor = 'lightblue';
    });
    articlesAndSections[i].addEventListener('mouseleave', function() {
        articlesAndSections[i].style.backgroundColor = articleAndSectionsCurrentBColor;
    });
}

//imagenes: cambiar imagen al hacer hover, devolver imagen al salir del hover


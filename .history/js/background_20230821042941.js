const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// const body = document.querySelector("body");


const IMG_NUMBER=images.length;


function genRandom(){
    return Math.ceil(Math.random()* IMG_NUMBER);
}


function paintImage(imgNumber) {
    const img = new Image();
    img.src = `images/${imgNumber}.jpg`;
    img.classList.add("bgImg");
    body.prepend(img);
}


function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
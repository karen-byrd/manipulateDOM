document.body.style.backgroundColor = "#d9d9d9"

var title = document.getElementById('title');

title.innerHTML = "Manipulating the DOM with JavaScript!";
title.style.fontFamily = 'Garamond';
title.style.color = '#1790d0'

document.addEventListener("click", changeImg);

var myImage = document.querySelector(".image");

myImage.style.borderRadius = '20px';
myImage.style.border = '3px solid blue';
myImage.style.boxShadow = '2px 3px 3px grey';
myImage.style.marginLeft = '100px'


var imgArray = [
    "crazyPuppy.png",
    "begalPuppy.png",
    "germanShepard.png",
    "happyPuppy.png",
    "labPuppy.png",
    "playPuppy.png",
    "spotsPuppy.png"
];

var index = 0;

function changeImg() {
    if(index > imgArray.length - 1) {
        index=0;
        return;
    }
    myImage.src = `./images/${imgArray[index]}`;
    index++;
};

var button = document.querySelector('.btn');

button.style.color = '#1790d0';
button.style.backgroundColor = '#d3e8e8'
button.style.borderRadius = '5px';
button.style.border = '2px solid blue';
button.style.width = '265px'
button.style.height = '30px'
button.style.marginTop = '20px'
button.style.marginLeft = '100px'
button.style.fontSize = '1.25rem'
button.style.fontFamily = 'Garamond';
button.style.fontWeight = 'bold';




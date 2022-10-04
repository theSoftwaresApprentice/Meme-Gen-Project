const myForm = document.getElementById('myForm');
const generationSide = document.getElementById('generation-side');
const memeSide = document.getElementById('meme-side');
const previousMemes = document.getElementById('previous-memes');
const linkedImg = document.querySelector("#linkedImg"); //changed this to call for the ID instead of the name
const upperT = document.querySelector('#upper-text');
const lowerT = document.querySelector('#lower-text');
const inputColor = document.querySelector('#text-color');
const blocko = document.querySelector("#blocko");
 
function styleImage(link, upperT, lowerT, tColor){
    const container = document.createElement('div');
    const meme = document.createElement('img');
    const hoverDelete = document.createElement('div');
    const upperText = document.createElement('div');
    const lowerText = document.createElement('div'); 

    container.append(meme, upperText, lowerText, hoverDelete);

    container.classList.add('container');
    meme.src = `${link}`;
    meme.classList.add('memeImage');
    hoverDelete.classList.add('hoverDelete');
    upperText.innerText = upperT;
    lowerText.innerText = lowerT;
    hoverDelete.innerHTML = "<b>CLICK<br>TO<br>DELETE<b>";
    lowerText.style.color = tColor;
    upperText.style.color = tColor;


    previousMemes.prepend(container);
    upperText.classList.add('upperTextStyle');
    lowerText.classList.add('lowerTextStyle');
};
//problem faced for about 10 hours ^^ needed another function - images wont load and dont know why

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    const newMeme = styleImage(
        linkedImg.value,
        upperT.value,
        lowerT.value,
        inputColor.value);
    myForm.reset();
    });

previousMemes.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    });


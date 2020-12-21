let totalSlides = document.querySelectorAll('.slider-content').length;
let slideAtual = 0;

document.querySelector('.slider-width').style.width = 
    `calc(100vw * ${totalSlides})`;

document.querySelector('.slider-controls').style.height = 
    `${document.querySelector('.slider').height}`;
    console.log(totalSlides);

function goPrev(){
    slideAtual--;
    if(slideAtual < 0){
        slideAtual = totalSlides - 1;
    }
    trocarImg();
}

function goNext(){
    slideAtual++;
    if(slideAtual > totalSlides - 1){
        slideAtual = 0;
    }
    trocarImg();
}

function trocarImg(){
    let sliderContentWidth = document.querySelector('.slider-content').clientWidth;
    let newImg = (slideAtual * sliderContentWidth);
    document.querySelector('.slider-width').style.marginLeft = 
        `-${newImg}px`
}
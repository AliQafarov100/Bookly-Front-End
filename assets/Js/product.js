let bookItem = document.querySelectorAll(".slider");
let sliders = document.querySelector(".sliders");
let count = 0;
let width;

function init(){
    width = document.querySelector(".sliderItem").offsetWidth;
    sliders.style.width = width * bookItem.length + 'px';
    bookItem.forEach(item => {
        item.style.width = width + 'px';
    });

    rollSlider();
}

init();

window.addEventListener('resize',init);

document.querySelector(".rightBtn").addEventListener("click",function(){
    count++;

    if(count >= bookItem.length){
        count = 0;
    }

    rollSlider();
});

document.querySelector(".leftBtn").addEventListener("click",function(){
    count--;

    if(count < 0){
        count = bookItem.length - 1;
    }

    rollSlider();
})

function rollSlider(){
    sliders.style.transform = 'translate(-'+ count * width + 'px)';
}
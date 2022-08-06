// UI
const imgcarousel = document.getElementById('imgcarousel');
const imgs = document.querySelectorAll('#imgcarousel img');
// console.log(imgs);
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

let idx = 0;

rightbtn.addEventListener('click',()=>{
   idx++;

   changeimage();
   resetinterval();

});

leftbtn.addEventListener('click',()=>{
    idx--;

    changeimage();
    resetinterval();

});

function changeimage(){
    if(idx > imgs.length-1){
        idx = 0
    }else if(idx < 0){
        idx = imgs.length-1;
    }

    imgcarousel.style.transform = `translate(${-idx * 500}px)`;
}

let interval = setInterval(imgrun,2000);

function imgrun(){
    idx++;
    changeimage();
}

function resetinterval(){
    clearInterval(interval);
    interval = setInterval(imgrun,2000);
}
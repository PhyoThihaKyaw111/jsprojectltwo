// UI
const body= document.body;
const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');


let activeslide = 0;


// Set backgroundImage of document body
function setbody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}
setbody();


// Remove all actives class name form all slides
function setactiveslide(){
    slides.forEach((slide)=>slide.classList.remove('active'));

    slides[activeslide].classList.add('active');
}
setactiveslide();

rightbtn.addEventListener('click',()=>{
    activeslide++;

    if(activeslide > slides.length -1){
        activeslide = 0;
    }

    setbody();
    setactiveslide();
});

leftbtn.addEventListener('click',()=>{
   activeslide--;

   if(activeslide < 0){
       activeslide = slides.length-1;
   }

   setbody();
   setactiveslide();
});
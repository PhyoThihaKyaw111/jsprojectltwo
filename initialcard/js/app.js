const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach((panel)=>{
   // console.log(panel);

    panel.addEventListener('click',()=>{
        // console.log('hey');

        removeactiveprevious();

        panel.classList.add('active');
    })
});

function removeactiveprevious(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}

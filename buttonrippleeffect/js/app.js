const buttons = document.querySelectorAll('.btnripple');

buttons.forEach((button)=>{

    button.addEventListener('click',function (e){

        const cx = e.clientX;
        const cy = e.clientY;

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;

        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        // console.log(xinside,yinside);

        // Create Circle
        const circle = document.createElement('span');
        circle.className = 'circle';

        circle.style.top = yinside + 'px';
        circle.style.left = xinside + 'px';

        // e.target.appendChild(circle);
        // console.log(this);
        this.appendChild(circle); /*regular function*/

        setTimeout(()=>{
            circle.remove();
        },600);
    });

});
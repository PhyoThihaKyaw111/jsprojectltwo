const counters = document.querySelectorAll('.counter');
// console.log(counters); 

counters.forEach(counter => {
    // console.log(counter);

    counter.innerHTML = '0';

    const updatecounter = () => {
        // console.log('Hello');

        // two methods to change string to number 
        // const target = Number(counter.getAttribute('data-target'));
        const target = +counter.getAttribute('data-target');
        // console.log(typeof target,target);

        const ctr = +counter.innerHTML;
        // console.log(typeof ctr,ctr);
        

        // (100 is as you like , we can decide what we want)
        const increment = target / 100;
        // console.log(increment);


        if(ctr < target){
            counter.innerText = `${Math.ceil(ctr+increment)}`;

            setTimeout(updatecounter,50);
        }
    };

    updatecounter();

});
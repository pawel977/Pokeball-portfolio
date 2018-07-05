let click = document.querySelector('#click'),
 upper = document.querySelector('#upper'),
 pokeball = document.querySelector('#Main-start-cont');

 const timeRotate = `2s`;

click.addEventListener("click",() => {
        upper.style.background = 'Gold';
        upper.style.transition = timeRotate;
        pokeball.style.transform = `rotate(450deg)`;
        pokeball.style.transition = timeRotate;
        (()=>console.log(2))
    }

);


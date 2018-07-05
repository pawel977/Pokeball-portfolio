let click = document.querySelector('#click'),
    upper = document.querySelector('#upper'),
    pokeball = document.querySelector('#pokeball');


const timeRotate = `2s`,
TimeRotateMs = 2000,

click.addEventListener("click", () => {
        upper.style.background = 'Gold';
        upper.style.transition = timeRotate;
        pokeball.style.transform = `rotate(450deg)`;
        pokeball.style.transition = timeRotate;



        AfterClikOnPokeball();
    }

);

let AfterClikOnPokeball = function () {
    
    setTimeout(
        () => {
            click.style.opacity = 0.0;
            click.style.transition = timeRotate;
        }, TimeRotateMs/3
    )
    
    
};


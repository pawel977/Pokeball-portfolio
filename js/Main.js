const
    timeRotate = `2s`,
    TimeRotateMs = 2000,
    upper = document.querySelector('#upper'),
    click = document.querySelector('#click'),
    lower = document.querySelector('#lower'),
    pokeball = document.querySelector('#pokeball'),
    startButtons = document.querySelectorAll('.buttonsStart'),



    divMe = document.createElement("div"),
    divAbout = document.createElement("div"),
    divPortfolio = document.createElement("div"),
    divCv = document.createElement("div");


divMe.setAttribute('id', 'zdj');

divAbout.setAttribute('id', 'about');
divPortfolio.setAttribute('id', 'portfolio');
divCv.setAttribute('id', 'Cv');

divAbout.setAttribute("class", "buttonsStart");
divPortfolio.setAttribute("class", "buttonsStart");
divCv.setAttribute("class", "buttonsStart");

getDivAbout = document.createElement("div");
getDivPortfolio = document.createElement("div");
getDivCv = document.createElement("div");
getDivMe = document.querySelector("#zdj");


upper.appendChild(divMe);

lower.appendChild(divAbout);
lower.appendChild(divPortfolio);
lower.appendChild(divCv);

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
            pokeball.style.transform = `scale(1.5)`;
            click.style.opacity = 0.0;
            click.style.transition = timeRotate;
            startButtons.style.display = 'flex';
            startButtons.style.opacity = '1';


        }, TimeRotateMs / 3
    );
    click.style.display = "hidden";



};
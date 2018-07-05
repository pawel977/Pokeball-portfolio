const
    timeRotate = `2s`,
    TimeRotateMs = 2000,
    upper = document.querySelector('#upper'),
    click = document.querySelector('#click'),
    lower = document.querySelector('#lower'),
    pokeball = document.querySelector('#pokeball'),


    divMe = document.createElement("div"),

    butAbout = document.createElement("button"),
    butPortfolio = document.createElement("button"),
    butCv = document.createElement("button");


divMe.setAttribute('id', 'divMe');

butAbout.setAttribute('id', 'about');
butPortfolio.setAttribute('id', 'portfolio');
butCv.setAttribute('id', 'cv');

butAbout.setAttribute("class", "buttonsStart");
butPortfolio.setAttribute("class", "buttonsStart");
butCv.setAttribute("class", "buttonsStart");




upper.appendChild(divMe);

lower.appendChild(butAbout);
lower.appendChild(butPortfolio);
lower.appendChild(butCv);

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


        }, TimeRotateMs / 3

    );
    setTimeout(() => {
        divMe.style.display = `flex`;
        divMe.style.opacity = `0.1`;
        divMe.style.backgroundcolor = "red";

        setTimeout(()=>{
            divMe.style.transition = ` 2s`;
            divMe.style.opacity = `1`;
            
            setTimeout(()=>{
              //  divMe.style.backgroundcolor = "blank";
            },1000);
        },500);
    }, 1000);

    setTimeout(() => {


        butAbout.style.display = 'inline-block';
        butAbout.style.opacity = `0.9`;
        butAbout.style.transition = `2s`;
    }, 2500);

    setTimeout(() => {
        butPortfolio.style.display = 'inline-block';
        butPortfolio.style.opacity = `0.9`;
        butPortfolio.style.transition = `2s`;
    }, 3000);

    setTimeout(() => {
        butCv.style.display = 'inline-block';
        butCv.style.opacity = `0.9`;
        butCv.style.transition = `2s`;
        click.style.display = "none";
    }, 3500);


    click.style.opacity = "0.0";
    click.style.transition = "2s";


    ////////////button about///////////////////
    setTimeout(() => {
        butAbout.addEventListener('click', () => {
            const
                pageAbout = document.createElement("div"),
                headPageAbout = document.createElement('div');

            pageAbout.setAttribute('id', 'pageAbout');
            headPageAbout.setAttribute('id', 'headPageAbout');

            document.body.appendChild(headPageAbout);
            document.body.appendChild(pageAbout);

            pokeball.style.opacity = '0';
            pokeball.style.transition = timeRotate;

            setTimeout(() => {
                headPageAbout.style.display = `block`;
                pageAbout.style.display = `block`;

                headPageAbout.style.opacity = "0.9";
                headPageAbout.style.transition = timeRotate;




            }, 1000);

        }, 5000);

    });

};
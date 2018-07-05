const
    timeRotate = `2s`,
    TimeRotateMs = 2000,
    upper = document.querySelector('#upper'),
    click = document.querySelector('#click'),
    lower = document.querySelector('#lower'),
    pokeball = document.querySelector('#pokeball'),
    
    refresh = function(){
        butRefresh.addEventListener('click', () => {
            location.reload();
        });
    }

    divMe = document.createElement("div"),

    butAbout = document.createElement("button"),
    butPortfolio = document.createElement("button"),
    butCv = document.createElement("button");

butRefresh = document.createElement('button');


divMe.setAttribute('id', 'divMe');

butAbout.setAttribute('id', 'about');
butPortfolio.setAttribute('id', 'portfolio');
butCv.setAttribute('id', 'cv');

butAbout.setAttribute("class", "buttonsStart");
butPortfolio.setAttribute("class", "buttonsStart");
butCv.setAttribute("class", "buttonsStart");

butRefresh.setAttribute('id', 'back');




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

        setTimeout(() => {
            divMe.style.transition = `2s`;
            divMe.style.opacity = `1`;

            setTimeout(() => {
                //  divMe.style.backgroundcolor = "blank";
            }, 1000);
        }, 500);
    }, 1000);

    setTimeout(() => {


        butAbout.style.display = 'inline-block';
        butAbout.style.opacity = `0.9`;
        butAbout.style.transition = `2s`;
    }, 1700);

    setTimeout(() => {
        butPortfolio.style.display = 'inline-block';
        butPortfolio.style.opacity = `0.9`;
        butPortfolio.style.transition = `2s`;
    }, 1800);

    setTimeout(() => {
        butCv.style.display = 'inline-block';
        butCv.style.opacity = `0.9`;
        butCv.style.transition = `2s`;
        click.style.display = "none";
    }, 1900);


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

                setTimeout(() => {
                    pokeball.style.display = 'none';
                }, 1000);

                headPageAbout.style.display = `block`;
                pageAbout.style.display = `block`;

                headPageAbout.style.opacity = "0.9";
                headPageAbout.style.transition = timeRotate;

                pageAbout.style.opacity = "0.95";
                pageAbout.style.transition = timeRotate;
                pageAbout.innerHTML = `
                
                
                Witam.</br>
                <tab>Jestem młodym, studiującym <b>Junior Front-End Developerem</b>.</br>Aktualnie studiuję Informatykę na <b>Polsko-Japańskiej Akademii Technik komputerowych w Warszawie.</b></br>
                Moja przygoda z progromwaniem zaczeła się parę lat temu kiedy zapisałem się do <b>Liceum PJATK w klasie o profilu informatycznym</b> gdzie zaczynałem swoją przygodę z językami backendowi.
                Jednak swoja prawdziwą miłośc poznałem 2 lata temu, jest to <b>Front-End.</b></br></br>
                
                Rozwijam się w każdej chwili w tym kierunku, Moje umiejetności to:</br>
                -js(5/6)</br>
                -HTML 5</br>
                -css 3</br>
                -sass</br>
                -Angular</br>
                -oraz wiele innnych.</br>
                </br>
                Gorąco zapraszam do kontaktu na mail: psawicki97@gmail.com</br>
                Pozdrawiam</br>Paweł Sawicki.`;

                headPageAbout.appendChild(butRefresh);
                
                refresh()
            }, 1000);

        }, 5000);
        ///////////////////////game////////////////
        butPortfolio.addEventListener('click', () => {



            pokeball.style.opacity = '0';
            pokeball.style.transition = timeRotate;



            setTimeout(() => {
                const pageGame = document.createElement(`div`);
                pageGame.setAttribute('id', 'pageGame');
                document.body.appendChild(pageGame);
                const allCanv = document.createElement('canvas');
                allCanv.setAttribute('id', 'allCanv');
                pageGame.appendChild(allCanv);


                pageGame.appendChild(butRefresh);
                const ctx = allCanv.getContext(`2d`);

                allCanv.width = 1000;
                allCanv.height = 500;

                const cw = allCanv.width;
                const ch = allCanv.height;

                const ballSize = 10;

                let ballX = (cw / 2) - ballSize / 2;
                let ballY = (ch / 2) - ballSize / 2;

                const paletH = 75;
                const paletW = 15;

                const playerX = 15;
                const aiX = cw - (playerX + paletW / 2);

                const lineW = 4;
                const lineH = 5;

                let ballSpeedX = 0.5;
                let ballSpeedY = 0.5;

                let playerY = ch / 2 - (paletH / 2);
                let aiY = ch / 2 - (paletH / 2);



                let player = function () {
                    ctx.fillStyle = `black`;
                    ctx.fillRect(playerX, playerY, paletW, paletH);
                }
                let ai = function () {
                    ctx.fillStyle = `black`;
                    ctx.fillRect(aiX, aiY, paletW, paletH);
                }

                const ball = function () {
                    ctx.fillStyle = `white`;
                    ctx.fillRect(ballX, ballY, ballSize, ballSize);

                    ballX += ballSpeedX;
                    ballY += ballSpeedY;
                    if (ballY <= 0 || ballY + ballSize / 2 >= ch) {
                        ballSpeedY = -ballSpeedY;
                        speedUp();
                    }
                    if (ballX <= 0 || ballX + ballSize / 2 >= cw) {
                        ballSpeedX = -ballSpeedX;
                        speedUp();
                    }
                }



                function table() {
                    ctx.fillStyle = `green`;
                    ctx.fillRect(0, 0, cw, ch);
                    //linie srodka
                    for (let i = 0; i < ch; i += 10) {
                        ctx.fillStyle = `grey`;
                        ctx.fillRect(cw / 2 - lineW / 2, i, lineW, lineH)

                    }
                }
                topCanvas = allCanv.offsetTop;

                function playerPosition(e) {
                    playerY = e.clientY - topCanvas - paletH / 2;

                    if (playerY >= ch - paletH) {
                        playerY = ch - paletH;
                    }
                    if (playerY <= 0) {
                        playerY = 0;
                    }
                };

                /*---------------przyśpieszeniePiłki---------*/
                function speedUp() {
                    if (ballSpeedX > 0 && ballSpeedX < 15) {
                        ballSpeedX += 0.2;
                    } else if (ballSpeedX < 0 && ballSpeedX > -15) {
                        ballSpeedX -= 0.2
                    }

                    if (ballSpeedY > 0 && ballSpeedY < 15) {
                        ballSpeedY += 0.1;
                    } else if (ballSpeedY < 0 && ballSpeedY > -15) {
                        ballSpeedY -= 0.1;
                    } else {
                        ballSpeedY = 10;
                    }
                    console.log(ballSpeedX + ", " + ballSpeedY);
                }

                //sterowanie bota
                function botPos() {
                    let middlePalet = aiY + paletH / 2;
                    let middleBall = ballY + ballSize / 2;

                    if (ballX > cw / 2) {
                        if (middlePalet - middleBall > paletH / 2) {
                            aiY -= 20;

                        } else if (middlePalet - middleBall > paletH / 4) {
                            aiY -= 10;
                        } else if (middlePalet - middleBall < -paletH / 2) {
                            aiY += 20;
                        } else if (middlePalet - middleBall < -paletH / 4) {
                            aiY += 10;
                        }
                    }

                    if (ballX <= cw / 2 && ballX > playerX) {
                        if (middlePalet - middleBall > playerX) {
                            aiY -= 6;
                        }
                        if (middlePalet - middleBall < -playerX) {
                            aiY += 6;
                        }
                    }
                    if (aiY <= 0) {
                        aiY = 0;
                    } else if (aiY + paletH >= ch) {
                        aiY = ch - paletH;
                    }
                }

                allCanv.addEventListener("mousemove", playerPosition)

                // odbicie pilki



                function odbicie() {
                    const paletPozSzer = playerX + paletW;
                    const paletPozWysDol = playerY + paletH;
                    const trzeciak = (playerY + paletH) / 3;

                    if (((paletPozSzer) >= ballX) &&
                        (playerY <= (ballY + ballSize / 2)) &&
                        ((paletPozWysDol) >= ballY)) {
                        ballSpeedX = -ballSpeedX;



                        if (playerY <= (ballY - ballSize / 2)) {
                            ballSpeedY = Math.abs(ballSpeedY) + 1 * Math.random(.5, 2.1);
                        } else if (ballY > trzeciak && ballY < trzeciak * 2) {
                            ballSpeedY = 0;
                        } else if (ballY >= trzeciak * 2 && ballY <= trzeciak * 3) {
                            if (Math.abs(ballSpeedY) != -1) {
                                ballSpeedY = -Math.abs(ballSpeedY) + 1;
                            }
                        }
                        speedUp();
                    }

                    OdbicieAi();
                }

                function OdbicieAi() {
                    if (ballX + ballSize >= aiX &&
                        ballY >= aiY &&
                        ballY <= aiY + paletH) {
                        ballSpeedX = -ballSpeedX;
                        speedUp();

                    }
                }

                function game() {
                    table();
                    player();
                    botPos();
                    ai();
                    ball();
                    odbicie();

                }
                setInterval(game, 1000 / 60);




                refresh()


            }, 2300);


        });
        ///////////kontakt/////////

        butCv.addEventListener('click', () => {
            pokeball.style.opacity = '0';
            pokeball.style.transition = timeRotate;

            setTimeout(() => {
                pokeball.style.display = 'none';
                const pageKon = document.createElement(`div`);
                pageKon.setAttribute('id', 'pageKon');
                document.body.appendChild(pageKon);
                setTimeout(()=>{
                    const pageInnerKon = document.createElement('div');
                    pageInnerKon.setAttribute('id','pageInnerKon');
                    pageKon.appendChild(pageInnerKon);
                    pageKon.appendChild(butRefresh);
                    pageInnerKon.innerHTML = `<b>Paweł Sawicki</b></br>linki:</br>
                    Github</br><a>https://github.com/pawel977</a></br>
                    Linkedin</br><a>https://www.linkedin.com/in/pawe%C5%82-sawicki-737a15160/</a></br>
                    E-mail</br>
                    psawicki97@gmial.com`;
                    refresh();
                }, 1000);
            },2000);
        });

    }, 1000);




};
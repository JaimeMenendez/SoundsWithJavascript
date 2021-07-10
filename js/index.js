let buttons = this.document.getElementsByClassName('Boton');
console.log(buttons)

window.addEventListener('keypress', function (e) {
    const audio = document.getElementById(`${e.code}`);
    const button = document.getElementById(`${e.code}B`);
    
    button.classList.add('playing');
    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    Array.from(buttons).forEach(boton => {
        boton.addEventListener('transitionend',e => {
            boton.classList.remove('playing');
        })
    });
})


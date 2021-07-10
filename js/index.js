const buttons = document.getElementsByClassName('Boton');
Array.prototype.forEach.call(buttons, b => {
    b.addEventListener('click', function (event) {
    const audio = document.getElementById(`${b.id.slice(0,4)}`);
    b.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
    b.addEventListener('transitionend', e => {
        b.classList.remove('playing');})

    })});


window.addEventListener('keypress', function (e) {
    const audio = document.getElementById(`${e.code}`);
    const button = document.getElementById(`${e.code}B`);

    button.classList.add('playing');
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    Array.from(buttons).forEach(boton => {
        boton.addEventListener('transitionend', e => {
            boton.classList.remove('playing');
        })
    });
})


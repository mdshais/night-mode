console.log('It Works!');

const nightModeBtn = document.querySelector('.nightModeBtn');

nightModeBtn.addEventListener('click', e => {
    document.body.classList.toggle('night');
    e.currentTarget.src = (document.body.classList.contains('night'))? "./img/on.png" : "./img/off.png";
    e.currentTarget.title = (document.body.classList.contains('night'))? "Night Mode On" : "Night Mode Off";
})
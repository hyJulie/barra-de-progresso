const progressBar = document.querySelector('.progress');
const previousBtn = document.querySelector('#previous-btn');
const nextBtn = document.querySelector('#next-btn');

//inicia do 0
let progress = 0;

function updateProgressBar(){
    progressBar.style.width = progress + '%';
}

function nextStep(){
    progress +=10
    if(progress > 100) progress = 100;
    updateProgressBar();
}

function previousStep(){
    progress -=10
    if(progress < 100) progress = 0;
    updateProgressBar();
}

nextBtn.addEventListener('click', nextStep);
previousBtn.addEventListener('click', previousStep);
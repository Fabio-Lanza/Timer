

const watch = document.querySelector('.watch');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');
let seconds = 0;
let timer;


function createSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
};

function startWatch(){
    timer = setInterval(function(){
    seconds++;
    watch.innerHTML = createSeconds(seconds);
    }, 1000);
};

start.addEventListener('click', function(event){
    watch.classList.remove('paused');
    clearInterval(timer);
    startWatch();
});

pause.addEventListener('click', function(event){
    watch.classList.add('paused');
    clearInterval(timer);
});

restart.addEventListener('click', function(event){
    watch.classList.remove('paused');
    clearInterval(timer);
    watch.innerHTML = '00:00:00';
    seconds = 0;

});
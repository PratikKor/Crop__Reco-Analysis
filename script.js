let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let hedaer = document.querySelector('.header-2');


menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.onscroll > 150){
        hedaer.classList.add('active');
    }else{
        hedaer.classList.remove('active');
    }
}

// change date to set till deadline

let countDate = new Date('Feburary 15, 2024 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();

    gap = countDate - now;

    let second = 1000 ;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day))
    let h = Math.floor((gap % day) / (hour));
    let m = Math.floor((gap)%(day) / (hour));
    let s = Math.floor((gap)%(minute) / (second));
    
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    CountDown();
},1000)

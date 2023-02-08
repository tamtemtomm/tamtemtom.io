const fadeIn = document.querySelectorAll('.fade-in');
const navbar = document.querySelector('.navbar')
const navbarsubmenu = document.querySelectorAll('.navbar-submenu') 
const subtitle = document.querySelector('.text')
const qna = document.querySelector('.qna_box')
const qnaClick = document.querySelector('.qna-box-click')
const scrollbar = document.querySelector(".scrollbar")

//fade in animation
const Observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
fadeIn.forEach((el) => Observer.observe(el))
Observer.observe(subtitle)
//-----------------------------------------------

//navbar control
document.addEventListener('scroll', ()=>{
    navbar.style.opacity = 1-(window.scrollY/154)
    if(window.scrollY > 120){
        navbar.style.WebkitUserSelect = "none";
        navbar.style.MozUserSelect = "none";
        navbar.style.msUserSelect = "none";
        navbar.style.userSelect = "none";
        navbarsubmenu.forEach((el) => {
            el.style.cursor = "default";
        })
    } else{
        navbar.style.WebkitUserSelect = "auto";
        navbar.style.MozUserSelect = "auto";
        navbar.style.msUserSelect = "auto";
        navbar.style.userSelect = "auto";
        navbarsubmenu.forEach((el) => {
            el.style.cursor = "pointer";
        })

    }
})
//-----------------------------------------------
//Qna Functions

//-----------------------------------------------
//navbarbuttos
function homeButton(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function aboutButton(){
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
    });
}

function projectButton(){
    window.scrollTo({
        top: 1650,
        behavior: 'smooth'
    });
}

function interestButton(){
    window.scrollTo({
        top: 3440,
        behavior: 'smooth'
    });
}

function contactButton(){
    window.scrollTo({
        top: 4200,
        behavior: 'smooth'
    });
}

const logo = document.querySelector('#main-logo');
const circle1 = document.querySelector('#main-logo-circle');
const circle2 = document.querySelector('#main-logo-circle2');
const circle3 = document.querySelector('#main-logo-circle3');

function rotatecircle(){
    circle1.style.animation = "spin 3s linear infinite";
    circle2.style.animation = "spin 6s linear infinite";
    circle3.style.animation = "spin 9s linear infinite";
}

function unrotatecircle() {
    circle1.style.animationPlayState = 'paused'
    circle2.style.animationPlayState = 'paused'
    circle3.style.animationPlayState = 'paused'
}
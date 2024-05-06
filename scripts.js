const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector('header');

const toggleNavbar = () =>{
    header.classList.toggle('active');
};


mobileNav.addEventListener('click', ()=> toggleNavbar());

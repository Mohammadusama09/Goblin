let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    dealy: 450,
    reset: true
})

sr.reveal('.hero-txt',{dealy:200,origin:'top'});
sr.reveal('.hero-img',{dealy:450,origin:'top'});
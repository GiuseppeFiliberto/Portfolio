const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');


openMenu.addEventListener('click' ,show);
closeMenu.addEventListener('click' ,close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    
}

function close() {
    mainMenu.style.top = '-130%';
    closeMenu.style.top = '-130%';

    
}

// const toggleClose = document.getElementById('toggle');
// toggle.onclick = function(){
//     toggle.classlist.toggle('active');
// }
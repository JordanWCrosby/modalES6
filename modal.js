let modalBtn = document.querySelector('.modal-btn');
let modalOverlay = document.querySelector('.modal-overlay');
let modalClose = document.querySelector('.modal-close');

popUp = () => {
modalBtn.addEventListener('click', () =>{
modalOverlay.classList.add('active');
});
}

closepopUp = () => {
modalClose.addEventListener('click', () => {
modalOverlay.classList.remove('active');
});

}

popUp();
closepopUp();

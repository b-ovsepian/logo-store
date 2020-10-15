import '../modalmodule/modal.css';

const refs = {
    buttonModal: document.querySelector('.modalbtn'),
    lightbox: document.querySelector('.lightbox'),
}

// open modal lightbox

refs.buttonModal.addEventListener('click', (e) => {
    openBackdrop();
});


function openBackdrop() {
    refs.lightbox.classList.add('is-open');
};


// close modal lightbox

refs.lightbox.addEventListener('click', e => {
    console.log(e.target);
    if ((e.target.classList.contains('backdrop')) ||
        (e.target.classList.contains('close-icon')) ||
        (e.target.dataset.action="close-modal") ||
        (e.target.classList.contains('icon-wrapper'))) {
        closeBackdrop();
    }

});


function closeBackdrop() {
   refs.lightbox.classList.remove('is-open'); 
};

window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeBackdrop();
    }
});


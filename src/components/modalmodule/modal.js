import '../modalmodule/modal.css';
import {modalrefs } from '../../refs/index';


// open modal lightbox

modalrefs.buttonModal.addEventListener('click', (e) => {
    openBackdrop();
});


function openBackdrop() {
    modalrefs.lightbox.classList.add('is-open');
};


// close modal lightbox

modalrefs.lightbox.addEventListener('click', e => {
    console.log(e.target);
    if ((e.target.classList.contains('backdrop')) ||
        (e.target.classList.contains('close-icon')) ||
        (e.target.dataset.action="close-modal") ||
        (e.target.classList.contains('icon-wrapper'))) {
        closeBackdrop();
    }

});


function closeBackdrop() {
   modalrefs.lightbox.classList.remove('is-open'); 
};

window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeBackdrop();
    }
});


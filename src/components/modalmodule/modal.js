import '../modalmodule/modal.css';
import {modalrefs } from './modalrefs';

const modalModule = (markup, listeners) => {
       function openBackdrop() {
        modalrefs.lightbox.classList.add('is-open');
    };
    modalrefs.lightbox.addEventListener('click', e => {
        console.log(e.target);
        if ((e.target.classList.contains('backdrop')) ||
            (e.target.classList.contains('close-icon')) ||
            (e.target.dataset.action = "close-modal") ||
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
    openBackdrop();
    const modalContent = document.querySelector('.modal-wrapper');
    modalContent.innerHTML = markup();
    listeners(closeBackdrop);
}


// to create your modal copy this fn and insert your markup & elements to open/close it

const modalBTN = document.querySelector('.modalbtn');
modalBTN.addEventListener('click', product);

    function product(){
    function buyGoods() {
        // example for markup
        return `<div>hey<button class="hello">GET</button></div>`
    }
    function createListeners(closebackdrop) {
        const myButton = document.querySelector('.hello');
        myButton.addEventListener("click", closebackdrop);
    }  
    modalModule(buyGoods, createListeners);
}



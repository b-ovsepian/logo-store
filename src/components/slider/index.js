// // heroSection: document.querySelector(`.hero`)
// // wriper: document.querySelector(`.wripper`)
// // sliderContainer: document.querySelector(`.slider-container`)
// // sliderTrack: document.querySelector(`.slider-track`)
// // sliderItem: document.querySelector(`.slider-item`)
// // sliderItems: document.querySelectorAll(`.slider-item`),
// // sliderArrows: document.querySelector(`.slider-arrows`)
// // prevButton: document.querySelectorAll(`.prev`)
// // nextButton: document.querySelectorAll(`.next`)
// // dotsContainer: document.querySelectorAll(`.dots`)
// // dots: document.querySelectorAll(`.dot`)

// // refs.sliderContainer
// // refs.sliderTrack
// // refs.sliderItem
// // refs.sliderItems
// // refs.prevButton
// // refs.nextButton
// // refs.dotsContainer
// // refs.dots

import { cardItem } from "../carditem";

const getSlider = (arr, section, slideShow, interval, drawOption) => {


    section.insertAdjacentHTML('afterbegin', `
    <div class="wripper">
    <div class="slider-container">
      <ul class="slider-track"></ul>
    </div>
    <div class="dots"></div>
    <div class="slider-arrows">
      <button type="button" class="prev">&lt</button>
      <button type="button" class="next">&gt</button>
    </div>
    </div>
    `);
    
    const sliderTrack = section.querySelector(`.slider-track`);
    const dotsContainer = section.querySelector(`.dots`);
    
    const slidesToShow = slideShow;  // сколько слайдеров будет в поле зрения
    const slidesToScroll = slideShow; // сколько слайдов нужно листать

    const dotsNumber = arr.length/slidesToShow;
    
    // ф-я отрисовки слайдов!

    const drawCardItem = (option) => {
        if(option){
            cardItem(arr, sliderTrack);
        }
    };

    drawCardItem(drawOption);

    // ф-я отрисовки dots!

    const drawSlider = (array) => {
        
        array.forEach((elem, index) => { 
            if(section.className === `hero`){
                sliderTrack.insertAdjacentHTML(`beforeend`,`<li class="slider-item">${elem}</li>`);
            };
            
            if(index === 0){
                dotsContainer.insertAdjacentHTML(`beforeend`,`<span class="dot is-active" data-src="${index}"></span>`);
            }else{
                if(index%slidesToShow === 0){
                    dotsContainer.insertAdjacentHTML(`beforeend`,`<span class="dot" data-src="${index}"></span>`);
                }
            }
        });
        
    };
    
    drawSlider(arr);

    const dots = document.querySelectorAll(`.dot`);


    
    const wriper = document.querySelector(`.wripper`);
    const sliderContainer = document.querySelector(`.slider-container`);
    const sliderItem = document.querySelector(`.slider-item`);
    const sliderItems = document.querySelectorAll(`.slider-item`);
    const sliderArrows = document.querySelector(`.slider-arrows`);
    const prevButton = document.querySelector(`.prev`);
    const nextButton = document.querySelector(`.next`);
    
    
    
        let currentSlide = 0;
        let position = 0;
        const itemCount = sliderItems.length; // количество слайдов
        const itemWidth = sliderContainer.clientWidth / slidesToShow; // динамическая ширина слайдов
        const movePosition = slidesToScroll * itemWidth; // смещения поля зрения по ленте слайдов
    
        // {функция задаёт размер слайда в зависимости
        //  от количества слайдов в поле зрения слайдера}

            sliderItems.forEach((item) => {
                item.style.minWidth = `${itemWidth}px`;
            });
    
    // слушатель кнопки вправо!
        nextButton.addEventListener(`click`, () => {
            const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    
            position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
            clearActiveDot()
            setPosition();
            checkBtn();
            currentSlide += 1;
            dots[(position/itemWidth) * -1].classList.add(`is-active`);
    
        });
    
    // слушатель кнопки влево!
        prevButton.addEventListener(`click`, () => {
            const itemsLeft = itemCount - Math.abs(position) / itemWidth;
    
            position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
            clearActiveDot()
            setPosition();
            checkBtn();
            currentSlide -= 1;
            dots[(position/itemWidth) * -1].classList.add(`is-active`);

        });
    
        // интервал прокрутки слайдов
        const intervalFn = (interval) => {

            if(interval){
                setInterval(() => {
                    position -= itemWidth;
                    
                    if(position > -itemCount*itemWidth){
                        setPosition();
                        clearActiveDot();
                        checkBtn();
                        dots[(position/itemWidth) * -1].classList.add(`is-active`);  
        
                    }else{
                        clearActiveDot();
                        position = 0;
                        setPosition()
                        checkBtn();
                        dots[position].classList.add(`is-active`);

                    }                   
                }, 7000);
        }
    };

        intervalFn(interval);
        
        //  функция задаёт позицию!
        const setPosition = () => {
            sliderTrack.style.transform = `translateX(${position}px)`;
        };
    
        //  {функция проверяет текущую позицию (актуальный слайд)
        //   и отключает кнопку в зависимости от наличия следюющего или предыдущего слайда}
        const checkBtn = () => {
            prevButton.disabled = position === 0;
            nextButton.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
        };
    
        // функция активации слайдера!
        checkBtn();
    
        const activeDot = () => {
            dotsContainer.addEventListener(`click`, (e) => {
                clearActiveDot();
                e.target.classList.add(`is-active`);
                currentPage(e.target.dataset.src);
                currentSlide = +e.target.dataset.src;
    
            })
        };
    
        const clearActiveDot = () => {
            dots.forEach(elem => elem.classList.remove(`is-active`));
        }
    
        activeDot();
    
    // функция задания слайда в вьюпорт!
        const currentPage = (n) => {
            position = 0;
            position -= n*itemWidth;
            setPosition();
            checkBtn();
        }

}
export default getSlider;



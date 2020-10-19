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

const getSlider = (arr, section, slideShow, slideScroll) => {

    section.insertAdjacentHTML('afterbegin', `
    <div class="wripper">
    <div class="slider-container">
    <div class="slider-track">
    </div>
    </div>
    <div class="dots">
    </div>
    <div class="slider-arrows">
    <button type="button" class="prev">	&lt;</button>
    <button type="button" class="next">	&gt;</button>
    </div>
    </div>
    `);
    
    const sliderTrack = document.querySelector(`.slider-track`);
    const dotsContainer = document.querySelector(`.dots`);
    
    arr.forEach((num, index) => {
    
    sliderTrack.insertAdjacentHTML(`beforeend`,`<div class="slider-item">${index + 1}</div>`);
    if(index === 0){
        dotsContainer.insertAdjacentHTML(`beforeend`,`<span class="dot is-active" data-src="${index}"></span>`);
    }else{
        dotsContainer.insertAdjacentHTML(`beforeend`,`<span class="dot" data-src="${index}"></span>`);
    }
    });
    
    const wriper = document.querySelector(`.wripper`);
    const sliderContainer = document.querySelector(`.slider-container`);
    const sliderItem = document.querySelector(`.slider-item`);
    const sliderItems = document.querySelectorAll(`.slider-item`);
    const sliderArrows = document.querySelector(`.slider-arrows`);
    const prevButton = document.querySelector(`.prev`);
    const nextButton = document.querySelector(`.next`);
    const dots = document.querySelectorAll(`.dot`);
    
    
    
        let currentSlide = 0;
        let position = 0;
        const slidesToShow = slideShow;  // сколько слайдеров будет в поле зрения
        const slidesToScroll = slideScroll; // сколько слайдов нужно листать
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
            dots[currentSlide].classList.add(`is-active`);
    
        });
    
    // слушатель кнопки влево!
        prevButton.addEventListener(`click`, () => {
            const itemsLeft = itemCount - Math.abs(position) / itemWidth;
    
            position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
            clearActiveDot()
            setPosition();
            checkBtn();
            currentSlide -= 1;
            dots[currentSlide].classList.add(`is-active`);
    
        });
    
        // интервал прокрутки слайдов
        setInterval(() => {
            position -= itemWidth;
            
            if(position > -itemCount*itemWidth){
                setPosition();
                clearActiveDot();
                dots[(position/itemWidth) * -1].classList.add(`is-active`);                

            }else{
                clearActiveDot();
                position = 0;
                setPosition()
                dots[position].classList.add(`is-active`);
            }
            
        }, 5000);
        
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



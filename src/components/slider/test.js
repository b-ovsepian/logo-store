class Slider {
    constructor({currentSlide = 0, position = 0, slidesToShow = 1,
        slidesToScroll = 1, itemCount = refs.sliderItems.length,
        itemWidth = refs.sliderContainer.clientWidth / slidesToShow,
        movePosition = slidesToScroll * itemWidth}) {
            this.position = position;
            this.currentSlide = currentSlide;
            this.slidesToScroll = slidesToScroll; // сколько слайдов нужно листать
            this.slidesToShow = slidesToShow;  // сколько слайдеров будет в поле зрения
            this.itemWidth = itemWidth; // динамическая ширина слайдов
            this.itemCount = itemCount; // количество слайдов
            this.movePosition = movePosition; // смещения поля зрения по ленте слайдов
    }

    // {функция задаёт размер слайда в зависимости
    //  от количества слайдов в поле зрения слайдера}
    widthMethod(){
        refs.sliderItems.forEach((item) => {
            item.style.minWidth = `${itemWidth}px`;
        });
    }
    widthMethod()


// слушатель кнопки вправо!
   listnerRightButtonMethod(){
    refs.nextButton.addEventListener(`click`, () => {
        const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        clearActiveDot()
        setPosition();
        checkBtn();
        currentSlide += 1;
        checkCurrentSlide();
        refs.dots[currentSlide].classList.add(`is-active`);

        
    });
   }
   listnerRightButtonMethod()


// слушатель кнопки влево!
    listnerRightButtonMethod(){
        refs.prevButton.addEventListener(`click`, () => {
            const itemsLeft = itemCount - Math.abs(position) / itemWidth;
        
            position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
            clearActiveDot()
            setPosition();
            checkBtn();
            currentSlide -= 1;
            checkCurrentSlide();
            refs.dots[currentSlide].classList.add(`is-active`);
    
            
        });
    }
    listnerRightButtonMethod()
//  функция задаёт позицию!
    setPosition(){
    refs.sliderTrack.style.transform = `translateX(${position}px)`;

    };

//  {функция проверяет текущую позицию (актуальный слайд)
//   и отключает кнопку в зависимости от наличия следюющего или предыдущего слайда}
     checkBtn(){
    refs.prevButton.disabled = position === 0;
    refs.nextButton.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
     };

// функция активации слайдера!
    checkBtn();

    checkCurrentSlide(){
    console.log(currentSlide);
    };


     activeDot(){
    refs.dotsContainer.addEventListener(`click`, (e) => {
        clearActiveDot();
        e.target.classList.add(`is-active`);
        currentPage(e.target.dataset.src);
        currentSlide = +e.target.dataset.src;
        checkCurrentSlide();

    })
    };

    clearActiveDot(){
    refs.dots.forEach(elem => elem.classList.remove(`is-active`));
    }

    activeDot();

// функция задания слайда в вьюпорт!
    currentPage(n){
    position = 0;
    position -= n*itemWidth;
    setPosition();
    checkBtn();
     }
}

const slider = new Slider()
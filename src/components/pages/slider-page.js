import React, { Component } from "react";
 
export default class SliderPage extends Component {
    
    componentDidMount(){
        const slides = document.querySelectorAll('.slide'),
        next = document.querySelector('#r'),
        prev = document.querySelector('#l'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrap = document.querySelector('.slides_wrap'),
        slidesField = document.querySelector('.slides_inner'),
        width = window.getComputedStyle(slidesWrap).width,
        descr = document.querySelector('.slides_descr');
        
        let slideIndex = 1;
        let offset = 0;
        
        if(slides.length < 10){                        // добавление 0 в нумерации слайда , если общее к-во больше 10 , 0  не нужен
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
            }else{
            total.textContent = slides.length;
            current.textContent = slideIndex;
        }
        
         slidesField.style.width = 100 * slides.length + '%';  // задаем ширину окошку с слайдами = ширине всех слайдов
        slidesField.style.transition = '0.5s all';            // делаем плавность операции
        
        slides.forEach(slide => {
            slide.style.width = width;     // перебором задаем ширину всем слайдам = ширине окна для показа слайдов 
        });
        
        const dots = document.createElement('ol');
        
        dots.classList.add('carousel-indicators');

        const dotss = [];             // создаем массив в который будем пушить созданные точки слайдов
        const descrs= [];

        slidesWrap.append(dots);

        for(let i = 0; i < slides.length; i++){
            const dot = document.createElement('li');
            const descr1 = document.createElement('div');
            descr1.textContent = `Этап производства №${i + 1} `;
            descr1.classList.add('descr');
            dot.setAttribute('data-slide-to', i + 1);                // назначить атрибут каждой точке 
            dot.classList.add('dot');
            descr1.setAttribute('data-slide-to', i + 1);
            if(i === 0){
            dot.style.opacity = 1;
            descr1.classList.add('descr_activ');
            }
            dots.append(dot);
            dotss.push(dot);
            descrs.push(descr1);
            descr.append(descr1);
        }

        next.addEventListener('click', () => {    // назначаем обработчик событий на кнопку (следующий слайд)
            if(offset === +width.slice(0, width.length - 2) * (slides.length -1)){      // если долистали до конца слайдов 
                offset = 0;                       // то слайд вернутся вначало 
            }else{
                offset += +width.slice(0, width.length - 2); // если єлемент не последний , смещаем на размер таба влево 
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        
            if(slideIndex === slides.length){           // если на последнем слайде , при клике индекс становится на 1 
                slideIndex = 1;
            }else{
                slideIndex++;                          // при клике увеличиваем на 1 
            }
        
            if(slides.length < 10){                        // добавляем 0 при условии , что номер слайда меньше 10 
                current.textContent =  `0${slideIndex}`;
            }else{
                current.textContent =  slideIndex; 
            }
            dotss.forEach(dot => dot.style.opacity = 0.5);
            dotss[slideIndex - 1].style.opacity = 1;
            
            descrs.forEach( des => des.classList.remove('descr_activ'));
            descrs[slideIndex - 1].classList.add('descr_activ');
          });
        
        
          prev.addEventListener('click', () => {    // назначаем обработчик событий на кнопку (следующий слайд)
            if(offset === 0){      // если долистали до начала слайдов  
                offset = +width.slice(0, width.length - 2) * (slides.length -1);  // то показать начальный стайд
            }else{
                offset -= +width.slice(0, width.length - 2); // если єлемент не последний , то смещаем на размер слайда вправо
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        
            if(slideIndex === 1){            // если находимся на первом , при нажании будет индекс последнего 
                slideIndex = slides.length;
            }else{
                slideIndex--;              // если нет при клике уменьшаем значение на 1 
            }
        
            if(slides.length < 10){
                current.textContent =  `0${slideIndex}`;             // добавляем 0 при условии , что номер слайда меньше 10 
            }else{
                current.textContent =  slideIndex;
            } 
            dotss.forEach(dot => dot.style.opacity = 0.5);
            dotss[slideIndex - 1].style.opacity = 1; 
            
            descrs.forEach( des => des.classList.remove('descr_activ'));
            descrs[slideIndex - 1].classList.add('descr_activ');
        });

        dotss.forEach(dot => {                                        //   
            dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');

            slideIndex = slideTo;                                        // номер таба равняется номеру атрибута точки 

            offset = +width.slice(0, width.length - 2) * (slideTo -1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slides.length < 10){
                current.textContent =  `0${slideIndex}`;             
            }else{
                current.textContent =  slideIndex;
            }

            dotss.forEach(dot => dot.style.opacity = 0.5);         
            dotss[slideTo - 1].style.opacity = 1;    
            
            descrs.forEach( des => des.classList.remove('descr_activ'));           
            descrs[slideIndex - 1].classList.add('descr_activ');
            });
        });
    }
    
    render(){
        return(
            <>
            <section class="slides"><span>Производство усилителей</span> 
                <div class="slides_descr"></div>
                <div class="slides_wrap">
                    <div className="slide-nav">
                        <i id="l"  class="fa-solid fa-angles-left"></i>
                        <div className="slide-counter">
                        <span id="current">01 </span>
                        <span id="razd">/</span>
                        <span id="total"> 04</span>
                        </div>
                        <i id="r"  class="fa-solid fa-angles-right"></i>
                    </div>
                    <div class="slides_inner">
                        <div class="slide">
                            <div className="slide-img"></div>
                        </div>
                        <div class="slide">
                            <div className="slide-img img22"></div>
                        </div>
                        <div class="slide">
                            <div className="slide-img img33"></div>
                        </div>
                        <div class="slide">
                            <div className="slide-img img44"></div>
                        </div>   
                    </div>
                </div>
            </section>
            </>
        )
    }
}

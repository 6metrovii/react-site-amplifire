import React, { Component } from "react";
import './pages.sass';

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
        
        if(slides.length < 10){                       
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
            }else{
            total.textContent = slides.length;
            current.textContent = slideIndex;
        }
        
         slidesField.style.width = 100 * slides.length + '%';  
        slidesField.style.transition = '0.5s all';            
        
        slides.forEach(slide => {
            slide.style.width = width;     
        });
        
        const dots = document.createElement('ol');
        
        dots.classList.add('carousel-indicators');

        const dotss = [];             
        const descrs= [];

        slidesWrap.append(dots);

        for(let i = 0; i < slides.length; i++){
            const dot = document.createElement('li');
            const descr1 = document.createElement('div');
            descr1.textContent = `Этап производства №${i + 1} `;
            descr1.classList.add('descr');
            dot.setAttribute('data-slide-to', i + 1);                
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

        next.addEventListener('click', () => {    
            if(offset === +width.slice(0, width.length - 2) * (slides.length -1)){      
                offset = 0;                       
            }else{
                offset += +width.slice(0, width.length - 2); 
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        
            if(slideIndex === slides.length){            
                slideIndex = 1;
            }else{
                slideIndex++;                          
            }
        
            if(slides.length < 10){                        
                current.textContent =  `0${slideIndex}`;
            }else{
                current.textContent =  slideIndex; 
            }
            dotss.forEach(dot => dot.style.opacity = 0.5);
            dotss[slideIndex - 1].style.opacity = 1;
            
            descrs.forEach( des => des.classList.remove('descr_activ'));
            descrs[slideIndex - 1].classList.add('descr_activ');
        });
        
        
        prev.addEventListener('click', () => {    
            if(offset === 0){        
                offset = +width.slice(0, width.length - 2) * (slides.length -1);  
            }else{
                offset -= +width.slice(0, width.length - 2); 
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        
            if(slideIndex === 1){            
                slideIndex = slides.length;
            }else{
                slideIndex--;              
            }
        
            if(slides.length < 10){
                current.textContent =  `0${slideIndex}`;              
            }else{
                current.textContent =  slideIndex;
            } 
            dotss.forEach(dot => dot.style.opacity = 0.5);
            dotss[slideIndex - 1].style.opacity = 1; 
            
            descrs.forEach( des => des.classList.remove('descr_activ'));
            descrs[slideIndex - 1].classList.add('descr_activ');
        });
        
        dotss.forEach(dot => {                                         
            dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');
            
            slideIndex = slideTo;                                         
            
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
            <section class="slides"><span>Производство усилителей</span> 
                <div class="slides_descr">
                    <div className="descr-column"></div>
                    <div className="descr-bottom"></div>
                </div>
                <div className="slider">
                    <div className="slide-column"></div>
                    <div className="slide-bottom"></div>
                    <div class="slides_wrap">
                        <div className="slide-nav">
                            <i id="l"  class="fa-solid fa-angles-left"></i>
                            <div className="slide-counter">
                                <div id="current">01 </div>
                                <div id="razd">/</div>
                                <div id="total"> 05</div>
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
                            <div class="slide">
                                <div className="slide-img img55"></div>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

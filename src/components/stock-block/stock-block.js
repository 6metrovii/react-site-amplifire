import React, {Component} from "react";
import './stock-block.css'

export default class StockBlock extends Component {

    componentDidMount(){
        const deadTime = '2022-09-28T06:55:28.214Z';

        function getTime(endtimes){
          const  t = Date.parse(endtimes) - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24) ),
                hours = Math.floor((t / (100 * 60 * 60 )) % 24),
                minutes = Math.floor((t / (1000 * 60)) % 60),
                seconds = Math.floor((t / 1000) % 60);
    
          return{
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
          };   
        }
        function zero (num){
          if( num <= 9 && num > 0){
            return`0${num}`;
          }else{
            return num;
          }
        }
        function setClocks (select, endtimes){
    
          const timer = document.querySelector(select),
                day = timer.querySelector('#days'),
                hour = timer.querySelector('#hours'),
                minut = timer.querySelector('#minutes'),
                second = timer.querySelector('#seconds'),
                interval = setInterval(updateClocks, 1000);
    
          updateClocks();
    
          function updateClocks(){
            const t = getTime(endtimes);
    
            day.innerHTML = zero(t.days);
            hour.innerHTML = zero(t.hours);
            minut.innerHTML = zero(t.minutes);
            second.innerHTML = zero(t.seconds);
          
          if(t.total <= 0 ){
              clearInterval(interval);
              day.innerHTML = "0";
              hour.innerHTML = "0";
              minut.innerHTML = "0";
              second.innerHTML = "0";
            }  
          }     
        }
        setClocks(".timer", deadTime);
    }
    render(){
        return(
            <>
                <div class="header__bottom"></div>
                <div class="promotion">
                    <div class="promotion__block">
                        <div class="promotion__text">
                        <div class="title">Акция для новых клиентов!</div>
                        <div class="promotion__descr">
                        Мы ценим каждого клиента и предлагаем вам стать одним из них на очень выгодных условиях. 
                        Каждому, кто закажет усилитель в комплекте с акустическими кабелями, будет предоставлена скидка в размере <span>20%!</span>
                        Акция закончится 20 ноября в 00:00
                        </div>
                        </div>
                    </div>
                    <div class="promotion__timer">
                        <div class="title">Осталось до конца акции:</div>
                        <div class="timer">
                            <div class="timer__item">
                                <span id="days">12</span>
                                дней
                            </div>
                            <div class="timer__item">
                                <span id="hours">20</span>
                                часов
                            </div>
                            <div class="timer__item">
                                <span id="minutes">56</span>
                                минут
                            </div>
                            <div class="timer__item">
                                <span id="seconds">20</span>
                                секунд
                            </div>
                        </div>
                    </div>       
                </div>
            </>
        )
    }
    
}
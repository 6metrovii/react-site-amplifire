import React, { Component } from "react";
import './pages.css'



export default class TabsPages extends Component {

    componentDidMount(){
        const tabs2 =document.querySelectorAll('.tabsitem'),
        tabscontent2 = document.querySelectorAll('.tabscontent'),  
        tabsparent2 = document.querySelector('.tabsconteiner');
        
        const tabshide = () =>{
            tabscontent2.forEach((item)=>{
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            tabs2.forEach((item)=>{
                item.classList.remove('tabsitem_activ');
            });
        }
        
        function tabsshow (i = 0){
            tabscontent2[i].classList.add('show', 'fade');
            tabscontent2[i].classList.remove('hide',);
            tabs2[i].classList.add('tabsitem_activ');
        } 
        tabshide();
        tabsshow();
        
        tabsparent2.addEventListener('click', (event) =>{
            const target = event.target;
            
            if(target && target.classList.contains('tabsitem')){
                tabs2.forEach((item, i)=>{
                    if(target === item){
                        tabshide();
                        tabsshow(i);
                    }
                });
            }      
        }); 
    }

    render(){
        return (
            <>
                <section class="promo">
                            <div class="tabsconteiner">
                                <div class="tabscontent">
                                    <div className="tab-img"></div>
                                    <div class="tabsdescr">Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе 
                                        Характеристики :
                                        Тип усилителя 
                                        - class D (КПД 90÷)
                                        Мощность 
                                        - стерео 2 канала по 100 ватт(4 ом 10÷ thd)
                                        Корпус:
                                        Корпус выполнен из стали 1.0 мм
                                        В корпусе предусмотрены вентиляционные отверстия, для лучшего охлаждения внутренних элементов. Корпус разборной , на дне имеются прорезиненные ножки для хорошей устойчивости на поверхности 
                                        Размеры ШГВ:
                                        150/150/100 мм</div>
                                </div>
                                <div class="tabscontent">
                                <div className="tab-img img2"></div>
                                <div class="tabsdescr">Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе 
                                    Характеристики :
                                    Тип усилителя 
                                    - class D (КПД 90÷)
                                    Мощность 
                                    - стерео 2 канала по 100 ватт(4 ом 10÷ thd)
                                    Корпус:
                                    Корпус выполнен из стали 1.0 мм
                                    В корпусе предусмотрены вентиляционные отверстия, для лучшего охлаждения внутренних элементов. Корпус разборной , на дне имеются прорезиненные ножки для хорошей устойчивости на поверхности 
                                    Размеры ШГВ:
                                    150/150/100 мм</div>
                            </div>
                            <div class="tabscontent">
                                <div className="tab-img img3"></div>
                                <div class="tabsdescr">Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе 
                                    Характеристики :
                                    Тип усилителя 
                                    - class D (КПД 90÷)
                                    Мощность 
                                    - стерео 2 канала по 100 ватт(4 ом 10÷ thd)
                                    Корпус:
                                    Корпус выполнен из стали 1.0 мм
                                    В корпусе предусмотрены вентиляционные отверстия, для лучшего охлаждения внутренних элементов. Корпус разборной , на дне имеются прорезиненные ножки для хорошей устойчивости на поверхности 
                                    Размеры ШГВ:
                                    150/150/100 мм</div>
                            </div> 
                            <div class="tabscontent">
                                <div className="tab-img img4"></div>
                                <div class="tabsdescr">Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе 
                                    Характеристики :
                                    Тип усилителя 
                                    - class D (КПД 90÷)
                                    Мощность 
                                    - стерео 2 канала по 100 ватт(4 ом 10÷ thd)
                                    Корпус:
                                    Корпус выполнен из стали 1.0 мм
                                    В корпусе предусмотрены вентиляционные отверстия, для лучшего охлаждения внутренних элементов. Корпус разборной , на дне имеются прорезиненные ножки для хорошей устойчивости на поверхности 
                                    Размеры ШГВ:
                                    150/150/100 мм</div>
                            </div> 
                            <div class="tabscontent">
                                <div className="tab-img img5"></div>
                                <div class="tabsdescr">Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе 
                                    Характеристики :
                                    Тип усилителя 
                                    - class D (КПД 90÷)
                                    Мощность 
                                    - стерео 2 канала по 100 ватт(4 ом 10÷ thd)
                                    Корпус:
                                    Корпус выполнен из стали 1.0 мм
                                    В корпусе предусмотрены вентиляционные отверстия, для лучшего охлаждения внутренних элементов. Корпус разборной , на дне имеются прорезиненные ножки для хорошей устойчивости на поверхности 
                                    Размеры ШГВ:
                                    150/150/100 мм</div>
                            </div> 
                            <div class="tabsheader">
                                <div class="tabs__column"></div>
                                Выберите свой усилитель 
                                <div class="tabsheader__bottom"></div>
                                <div class="tabsitem tabsitem_activ">Amplifire A1</div>
                                <div class="tabsitem" >Amplifire A2</div>
                                <div class="tabsitem">Amplifire A3</div>
                                <div class="tabsitem">Amplifire A4</div>
                                <div class="tabsitem">Amplifire A5</div>
                            </div>
                        </div>
                </section>
            </>
        )
    }
}
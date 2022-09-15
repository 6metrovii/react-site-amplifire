import React, { Component } from "react";
import TabItem from '../tab-item/'
import './pages.sass'

export default class TabsPages extends Component {
    
    componentDidMount(){
        const tabs =document.querySelectorAll('.tabsitem'),
        tabscontent = document.querySelectorAll('.tabscontent'),  
        tabsparent = document.querySelector('.tabsconteiner');
        
        const tabshide = () =>{
            tabscontent.forEach((item)=>{
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            tabs.forEach((item)=>{
                item.classList.remove('tabsitem-activ');
            });
        }
        
        function tabsshow (i = 0){
            tabscontent[i].classList.add('show', 'fade');
            tabscontent[i].classList.remove('hide',);
            tabs[i].classList.add('tabsitem-activ');
        } 
        tabshide();
        tabsshow();
        
        tabsparent.addEventListener('click', (event) =>{
            const target = event.target;
            
            if(target && target.classList.contains('tabsitem')){
                tabs.forEach((item, i)=>{
                    if(target === item){
                        tabshide();
                        tabsshow(i);
                    }
                });
            }      
        }); 
    }
    
    render(){
        
        const tab1 = TabItem('tab-img')
        const tab2 = TabItem('tab-img img2')
        const tab3 = TabItem('tab-img img3')
        const tab4 = TabItem('tab-img img4')
        const tab5 = TabItem('tab-img img5')
        
        return (
            <section class="promo">
                <div class="tabsconteiner">
                    {tab1}
                    {tab2}
                    {tab3}
                    {tab4}
                    {tab5}
                    <div class="tabsheader">
                        Выберите свой усилитель 
                        <div class="tabs-column"></div>
                        <div class="tabsheader-bottom"></div>
                        <div class="tabsitem tabsitem-activ">Amplifire A1</div>
                        <div class="tabsitem" >Amplifire A2</div>
                        <div class="tabsitem">Amplifire A3</div>
                        <div class="tabsitem">Amplifire A4</div>
                        <div class="tabsitem">Amplifire A5</div>
                    </div>
                </div>
            </section>
        )
    }
}
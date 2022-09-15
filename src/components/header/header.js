import React, {Component} from "react";
import { Link} from 'react-router-dom';
import './header.sass';


export default class Header extends Component {
    
    componentDidMount(){
        const headItem = document.querySelectorAll('.nav-item ');
        const navigate = document.querySelector('.navigation');
        const catalog = document.querySelector('#catalog');
        const otherLinks = document.querySelectorAll('#other');
        const allLinks = document.querySelectorAll('.category-item');
        const catalogCategory = document.querySelector('.cards-category');
        const logo = document.querySelector('.logo');
        
        function activeCategory(i = 0){
            headItem.forEach(item => item.classList.remove('active-item')); 
            headItem[i].classList.add('active-item');
        }
        function activeCatalog(i = 0){
            allLinks.forEach(item => item.classList.remove('active-catalog')); 
            allLinks[i].classList.add('active-catalog');
        }
        
        logo.addEventListener('click', () =>{
            headItem.forEach(item => item.classList.remove('active-item'));
            headItem[0].classList.add('active-item');
        });
        
        navigate.addEventListener('click', (event) => {
            const target = event.target;
            if(target && target.classList.contains('nav-item')){
                headItem.forEach((item, i)=>{
                    if(target === item){
                        activeCategory(i)
                    }
                });
            }   
        });
        
        catalog.addEventListener('click', (event) => {
            catalogCategory.classList.remove('hide')  
        });
        
        otherLinks.forEach(item => {
            item.addEventListener('click', () => {
                catalogCategory.classList.add('hide');
            })
        })
        catalogCategory.addEventListener('click', (event) => {
            const target = event.target;
            if(target && target.classList.contains('category-item')){
                allLinks.forEach((item, i)=>{
                    if(target === item){
                        activeCatalog(i)
                    }
                });
            } 
        })
        
        headItem.forEach(item => item.addEventListener('click', () => {
            allLinks.forEach(item => item.classList.remove('active-catalog'))
        }))
    }
    render(){
        return(
            <>
                <div class="header">
                    <div className="navigation-column"></div>
                    <div className="navigation-bottom"></div>
                    <Link to='/' className="logo"></Link>
                    <div class="navigation">
                        <Link id="other" className="nav-item" to='/'><i class="fa-solid fa-house"></i> Home</Link>
                        <Link id="other" className="nav-item" to='/amplifire'><i class="fa-solid fa-list"></i> Выбрать усилитель</Link>  
                        <Link id="other" className="nav-item" to='/slider'><i class="fa-sharp fa-solid fa-screwdriver-wrench"></i> Производство усилителей</Link> 
                        <Link id="catalog" className="nav-item" to='/cards'><i class="fa-solid fa-circle-plus"></i> Каталог товаров</Link>   
                        <div className="cards-category hide">
                        <Link to='/amplifires'  className="category-item"><i class="fa-solid fa-volume-high"></i> Усилители</Link>
                        <Link to='/cable'  className="category-item"><i class="fa-solid fa-plug"></i> Кабели</Link>
                        </div>
                    </div>
                    <button onClick={this.openModal} class="btn-contact">Связаться с нами </button>
                </div >
                <div class="header-bottom"></div>
            </>
        )
    }
}
import React, { Component } from "react";
import './modal.css'

export default class Modal extends Component {
    
    componentDidMount(){

        const openModal = document.querySelector('.btn_contact'),
        closeModal =document.querySelector('[data-close]'),
        modal = document.querySelector('.modal'),
        modaltimeout = setTimeout(openModals, 20000);

        function openModals (){
            modal.classList.add('modal_activ');
            modal.classList.remove('modal_hover');
            document.body.style.overflow = "hidden";
            clearTimeout(modaltimeout);
        }

        function closeModals (){
        modal.classList.add('modal_hover');
            modal.classList.remove('modal_activ');
            document.body.style.overflow = "";
        }

        openModal.addEventListener('click', openModals);

        closeModal.addEventListener('click', closeModals);

        modal.addEventListener('click', (event)=>{
            if(event.target === modal){
            closeModals();
            }
        });
    
    }
    
    render(){
        return(
            <>
                <div className="modal">
                    <div classname="modal__dialog">
                        <div className="modal__content">
                            <form action ="#">
                                <div data-close  className="modal__close ">&times;</div>
                                <div className="modal__title">Перезвоним вам в кратчайшие сроки ! </div> 
                                <input placeholder="Ваше имя" name="name" type="text" className="modal__input"required></input>
                                <input placeholder="Номер телефона" name="tel" type="tel" className="modal__input"required></input>
                                <button className="modal__button">Перезвонить мне</button> 
                            </form>
                        </div>
                    </div> 
                </div>
            </>
        )
    }
}
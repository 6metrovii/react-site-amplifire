import React, { Component } from "react";
import './modal.sass'

export default class Modal extends Component {
    
    componentDidMount(){
        
        const openModal = document.querySelector('.btn-contact'),
        closeModal =document.querySelector('.modal-close'),
        modal = document.querySelector('.modal'),
        modalWindow = document.querySelector('.modal-content'),
        modaltimeout = setTimeout(openModals, 20000);
        
        function openModals (){
            modal.classList.add('modal-activ');
            modal.classList.remove('modal-hover');
            document.body.style.overflow = "hidden";
            clearTimeout(modaltimeout);
        }
        
        function closeModals (){
        modal.classList.add('modal-hover');
            modal.classList.remove('modal-activ');
            document.body.style.overflow = "";
        }
        
        openModal.addEventListener('click', openModals);
        
        closeModal.addEventListener('click', closeModals);
        
        modal.addEventListener('click', (event)=>{
            if(event.target === modal){
            closeModals();
            }
        });

        document.querySelector('form').addEventListener('submit', (e)=>{
            e.preventDefault();
            const message = document.createElement('div');
            message.classList.add('thanks-message')
            message.innerHTML = "Cпасибо, мы вам перезвоним!"
            modalWindow.append(message);
            setTimeout( () => { 
                closeModals();
                message.remove();
                e.target.reset();
            },2000)
        })
    }
    
    render(){
        return(
            <>
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-column"></div>
                        <div className="modal-bottom"></div>
                        <form action ="#">
                            <div  className="modal-close">&times;</div>
                            <div className="modal-title">Перезвоним вам в кратчайшие сроки ! </div> 
                            <input placeholder="Ваше имя" name="name" type="text" className="modal-input"required></input>
                            <input placeholder="Номер телефона" name="tel" type="tel" className="modal-input"required></input>
                            <button className="modal-button">Перезвонить мне</button> 
                        </form>
                    </div>
                </div> 
            </>
        )
    }
}
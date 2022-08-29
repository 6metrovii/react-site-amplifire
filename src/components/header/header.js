import React from "react";
import { Link} from 'react-router-dom';
import './header.css';


const Header = ({openModal}) => {
    return(
        <>
            <div class="header">
                <div className="logo"></div>
                <div class="navigation">
                <div class="nav__item">
                        <Link to='/'>Home</Link>
                    </div>
                    <div class="nav__item">
                        <Link to='/amplifire'>Выбрать усилитель</Link>
                    </div>
                    <div class="nav__item">
                        <Link to='/slider'>Производство усилителей</Link>
                    </div>
                    <div class="nav__item">
                        <Link to='/cards'>Каталог товаров</Link>
                    </div>
                </div>
                <button onClick={openModal} class="btn_contact">Связаться с нами </button>
            </div >
    <div class="header__bottom"></div>
        </>
    )
}
export default Header;
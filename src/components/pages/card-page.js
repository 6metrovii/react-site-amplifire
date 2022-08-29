import React from "react";
import './pages.css'

const CardPage = () => {

    return(
        <>
            <div class="cards" >
                <div class="oup">Каталог товаров</div>
                <div class="cards_wrap">
                    <div className="card">
                        <div className="card-img"></div>
                        <div className="card-title">Amplifire A1</div>
                        <div className="card-descr">Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе</div>
                        <div className="card-price"><span className="span">1999</span>Грн.</div>
                    </div>
                    <div className="card">
                        <div className="card-img img2"></div>
                        <div className="card-title">Amplifire A2</div>
                        <div className="card-descr">Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе</div>
                        <div className="card-price"><span className="span">2999</span>Грн.</div>
                    </div>
                    <div className="card">
                        <div className="card-img img3" ></div>
                        <div className="card-title">Amplifire A3</div>
                        <div className="card-descr">Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе</div>
                        <div className="card-price"><span className="span">2999</span>  Грн.</div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default CardPage;
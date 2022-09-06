import React from "react";
import CardItem from "../cardItem";
import './pages.sass';


const ampl1 = CardItem('card-img', 'Amplifire A1', 'Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе', '1999');
const ampl2 = CardItem('card-img img2', 'Amplifire A2', 'Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе', '2999')
const ampl3 = CardItem('card-img img3', 'Amplifire A3', 'Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе', '2999')
const ampl4 = CardItem('card-img img4', 'Amplifire A4', 'Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе', '2999')
const ampl5 = CardItem('card-img img5', 'Amplifire A5', 'Аудио усилитель D- класса со встроенным блоком питания и блютуз модулем 5.0 aptx hd в одном корпусе', '2999')

const AmplifirePage = () => {
    return(
        <>
            <div class="cards" >
                <div class="oup">Усилители</div>
                <div class="cards_wrap">
                    {ampl1}
                    {ampl2}
                    {ampl3}
                    {ampl4}
                    {ampl5}
                </div>
            </div>
        </>
    )
}
export { ampl1, ampl2, ampl3, ampl4, ampl5};
export default AmplifirePage;
import React from "react";
import CardItem from "../cardItem";
import './pages.sass';

    const cable1 = CardItem('cable-img', 'Кабель акустический', 'Кабель акустический для подключения акустики к окончательному усилителю', '999');
    const cable2 = CardItem('cable-img img12', 'Кабель акустический', 'Кабель акустический для подключения акустики к окончательному усилителю', '999');
    const cable3 = CardItem('cable-img img13', 'Кабель акустический', 'Кабель акустический для подключения акустики к окончательному усилителю', '999');
    const cable4 = CardItem('cable-img img14', 'Кабель акустический', 'Кабель акустический для подключения акустики к окончательному усилителю', '999');
    const cable5 = CardItem('cable-img img15', 'Кабель акустический', 'Кабель акустический для подключения акустики к окончательному усилителю', '999');
    
const CablePage = () =>{
    
    return(
        <>
            <div class="cards" >
                <div class="oup">Кабели акустические</div>
                <div class="cards_wrap">
                    {cable1}
                    {cable2}
                    {cable3}
                    {cable4}
                    {cable5}
                </div>
            </div>
        </>
    )
}
export {cable1, cable2, cable3, cable4, cable5}
export default CablePage ;
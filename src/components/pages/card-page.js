import React from "react";
import { ampl1 , ampl2, ampl3, ampl4, ampl5}  from "./amplifire-page";
import {cable1, cable2, cable3, cable4, cable5} from "./cable-page"
import './pages.sass'

const CardPage = () => {
    return(
        <>
            <div class="cards" >
                <div class="oup">Каталог товаров</div>
                <div class="cards-wrap">
                    {ampl1}
                    {cable1}
                    {ampl2}
                    {cable2}
                    {ampl3}
                    {cable3}
                    {ampl4}
                    {cable4}
                    {ampl5} 
                    {cable5}
                </div>
            </div>
        </>
    )
}
export default CardPage;
import React from "react";

const TabItem = (tabImg) => {
    return(
        <div class="tabscontent">
            <div className={tabImg}></div>
            <div class="tabsdescr">
                <table>
                    <tr>Аудио усилитель D класса со встроенным блоком питания и блютуз 5.0 aptx hd</tr>
                    <tr> <th>Характеристики:</th></tr>
                    <tr>-class-D</tr>
                    <tr>-стерео 2 канала по 100 ватт(4 ом 10÷ thd)</tr>
                    <tr>-Bluetooth 5.0 aptx hd</tr>
                    <tr><th>Корпус:</th></tr>
                    <tr>-Корпус выполнен из стали 1.0 мм</tr>
                    <tr>-Предусмотрены вентиляционные отверстия для охлаждения</tr>
                    <tr>-Размеры ШГВ: 150/150/100 мм </tr>
                </table>
            </div>
        </div>
    )
}
export default TabItem;
import React from "react";

const  CardItem = (cardImg, cardTitle, cardDescr, cardPrice) =>  {
    return(
        <div className="card">
            <div className={cardImg}></div>
            <div className="card-title">{cardTitle}</div>
            <div className="card-descr">{cardDescr}</div>
            <div className="card-price"><span className="span">{cardPrice}</span>Грн.</div>
        </div>
    )
}
export default  CardItem;
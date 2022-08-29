import React from "react"; 
import styled from "styled-components";
import './pages.css'


const Equalizer = styled.div`
    display: flex;
    margin: 0 auto;
    height: 560px;
    background-color:rgb(230, 230, 222);
    transform: rotate(180deg);
    position: relative;

`

const Homepage = () => {
    return(
        <Equalizer>
            <div className="eq"></div>
            <div className="eq eq2"></div>
            <div className="eq eq3"></div>
            <div className="eq eq4"></div>
            <div className="eq eq5"></div>
            <div className="eq eq6"></div>
            <div className="eq eq7"></div>
            <div className="eq eq8 "></div>
            <div className="eq eq9"></div>
            <div className="eq eq10"></div>
            <div className="eq eq11"></div>
            <div className="eq eq12"></div>
            <div className="eq eq13"></div>
            <div className="eq eq14"></div>
            <div className="eq eq15"></div>
            <div className="eq eq16"></div>
            <div className="eq eq17"></div>
            <div className="eq eq18"></div>
            <div className="eq eq19"></div>
            <div className="eq eq20"></div>
            <div className="eq eq21"></div>
            <div className="eq eq22"></div>
            <div className="eq eq23"></div>
            <div className="eq eq24"></div>
            <div className="title-homepage">Welcome to site amplifire. Pleace click main links</div>
        </Equalizer>
    )
}
export default Homepage;
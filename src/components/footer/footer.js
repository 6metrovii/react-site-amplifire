import React from "react";
import './footer.sass'

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer-links">Мы в социальных сетях :
                    <i id="insta" class="fa-brands fa-instagram"><span>instagram</span></i>
                    <i id="facebook" class="fa-brands fa-facebook"> <span>facebook</span></i>
                    <i id="telega" class="fa-brands fa-telegram">  <span>telegram</span> </i>
                </div>
                <div class="footer-contacts"> 
                    <div class="footer-contact">Контактные телефоны</div>
                    <div class="footer-contact">+380682472243</div>
                    <div class="footer-contact">+380731173903</div>
                </div>
            </footer>
        </>
    )
}
export default Footer;

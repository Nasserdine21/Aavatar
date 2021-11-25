import React from "react";
import footerLogo from '../footerlogo.png';
import './footer.css';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import {navData} from './data/data';
import {Link} from 'react-router-dom';
function Footer(){
    return(
        <footer>
            <div className="info">
            <div className="white-logo">
              <img src={footerLogo} />
              <p>Create You Gaming Avatar</p>  
            </div>

            <div className="news-letter">
              <p>upcoming company events and webinars, or even a behind-the-scenes look at your company.</p>
              <input type="email" placeholder="YOUR E-MAIL" />  
              <button type="button">subscribe</button>
            </div>

            <div className="sociel">
                <p>Follow us</p>
                <div className="icons">
                    <BsFacebook className="comunict"/>
                    <BsInstagram className="comunict"/>
                    <BsTwitter className="comunict"/>
                </div>
            </div>

            <div className="navigation">
                <p>navigation</p>
                <ul>
                {
                    navData.map((item) => {
                    
                        
                        return(
                            <li key={item.id}>
                                <Link to={item.url}>{item.text}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            </div>
            </div>
                
            <div className="terms">
                <div className="bar"></div>
                <h3>realized by nasserdine el aattari</h3>
            </div>
                
        </footer>
    );
}
export default Footer;
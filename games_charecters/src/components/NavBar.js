import React from "react";
import {navData} from './data/data';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import Font from "./UI/Font";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useAppContext} from '../context/app_context';
import './nav.css';

function NavBar(){

    const {openSidebar} = useAppContext();

    return(
        <nav>
            <div className="logo">
                <img src={logo} />
            </div>

            <div className="links">

            <ul>
                {
                    navData.map((item) => {
                    
                        const test = item.text === 'avatar';
                        return(
                            <li key={item.id}>
                                <Link to={item.url} className={test ? 'glitch' : null}>{item.text}</Link>
                            </li>
                        );
                    })
                }
            </ul>
                <div className="burger" onClick={openSidebar}>
                    <Font icon={faBars} />
                </div>
            </div>

        </nav>
    );
}
export default NavBar;
import React from "react";
import './sidebar.css';
import {navData} from './data/data';
import {Link} from 'react-router-dom';
import { useAppContext} from '../context/app_context'
function SideBar(){

    const {isSidebarOpen, closeSidebar} = useAppContext();

    return(
        <div className={`side ${isSidebarOpen ? 'show' : 'hide'}`}>
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
            <button  type ="button" onClick={closeSidebar}>close</button>
        </div>
    );
}
export default SideBar;
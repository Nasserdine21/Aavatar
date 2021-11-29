import React,{useEffect, useRef, useState} from "react";
import {collapsile} from '../utils/const';
import classes from './styling/faq.module.css';
function Faq(){

    const myClass = `${classes.container}`
    const pClass = `${classes.para}`
    const titleClass = `${classes.title}`

    return(
        <div className={myClass}>
            
            <p className={pClass}>Laboris est anim proident do proident cillum ut ipsum. Ea dolore consequat nisi nulla quis id voluptate fugiat in elit et. Quis fugiat magna cupidatat ex labore duis. Excepteur eiusmod Lorem fugiat sint non aute esse dolore fugiat cupidatat nostrud commodo incididunt. Labore velit aliquip deserunt voluptate dolor excepteur amet excepteur dolor excepteur deserunt ullamco laborum. Aute enim sint voluptate magna.</p>
            <h1 className={titleClass}>character's weapons</h1>
        </div>
    );
}
export default Faq;
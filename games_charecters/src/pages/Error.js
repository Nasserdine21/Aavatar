import React from "react";
import './styling/error.css';
import { Link } from "react-router-dom";
import astro from '../../src/assets/persos/astro_man.png';
function Error(){
    return(
        <section className="error">
            <h1>look like you're lost in space!</h1>
            <img src={astro} className="astro-man"/>
            <button><Link to="/">go back</Link></button>
        </section>
    );
}
export default Error;
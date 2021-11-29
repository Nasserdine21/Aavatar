import React from "react";
import './styling/about.css';
import about from '../assets/persos/about.png';
function About(){
    return(
        <section className="about">

            <div className="about-us">
                <h1>about us</h1>
                <p>Id eu Lorem anim do culpa aliqua velit ex proident fugiat nostrud. Ea minim est aliqua enim incididunt voluptate ea. Ea mollit ut est qui dolore culpa commodo.

Ex pariatur mollit aliquip cupidatat nulla reprehenderit Lorem enim. Consectetur eiusmod sunt dolor aliquip. Esse sit aliqua sint velit cillum.</p>

                <button type="button">read more</button>
            </div>

            <div className="about-image">
                <img src={about} />
            </div>

        </section>
    );
}
export default About;
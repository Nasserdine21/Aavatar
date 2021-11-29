import React from "react";
import './styling/home.css';
import weapon from '../assets/armes/axe.png';
import {persos} from '../components/data/persos';
import {weapons} from '../components/data/weapons';
function Home(){
    return(
        <main className="main">
            <section className="hero">
               
            
                <div className="gltch">
                <h1>Create your gaming avatar now !</h1>
                <h1>Create your gaming avatar now !</h1>
                <h1>Create your gaming avatar now !</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button type="button">create your gaming character</button>
                
            </section>
            
            <section className="avatars">

                <h1>OUr characters</h1>
                <p>Voluptate ipsum voluptate non duis ipsum.</p>
                <div className="weapon-bar"></div>
            
                <div className="display-avatars">
                {
                    persos.map((item) => {
                        const {images, name, descrp} = item;
                        return(
                            <div className="avatar-desc">
                                <img src={images} />
                                <h3>{name}</h3>
                                <div className="avatar-bar"></div>
                                <p className="about-avatar">{descrp}</p>
                                <p className="read-more">read more</p>
                            </div>  
                        );
                    })
                }
                </div>
                
            </section>

            <section className="weapons">

                <h1>character's weapons</h1>
                <p>Voluptate ipsum voluptate non duis ipsum.</p>
                <div className="weapon-bar"></div>

                <div className="display-data">

                {
                    weapons.map((item) => {
                        const{images, name, descrp} = item;
                        return(
                        <div className="weapon-desc">
                            <div className="weapon-img">
                                <img src={images} />
                            </div>
                            <h3>{name}</h3>
                            <p>{descrp}</p>
                        </div>
                        );
                    })
                }   
                </div>

            </section>
        </main>
    );
}
export default Home;
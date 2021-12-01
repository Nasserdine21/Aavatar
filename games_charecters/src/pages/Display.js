import React,{useState, useEffect} from "react";
import axios from "axios";
import './styling/Display.css';
function Display(){

    const [items, setItems] = useState([]);    
    useEffect(() => {

        const fetchItems = async () => {
            
            const result = await axios('https://avatar-f430b-default-rtdb.firebaseio.com/persons.json');

            setItems(Object.values(result.data));
            
        }

        fetchItems();

    }, []);

    return(
        <section className="getData">
            <h1 className="we-show">characters you have craete</h1>
                <p className="justDesc">Voluptate ipsum voluptate non duis ipsum.</p>
                <div className="weapon-bar"></div>
            <div className="display-avatars">
                {
                    items.map((item) => {
                        const {hero_agility, hero_image, hero_intelligence, hero_name, hero_strength, hero_weapon} = item;
                        return(
                            <div className="avatar-desc">
                                <img src={hero_image} />
                                <h3>{hero_name}</h3>
                                <h3 className="color-wp">weapon : {hero_weapon}</h3>
                                <div className="avatar-bar"></div>
                                <p className="about-avatar">agility : {hero_agility}</p>
                                <p className="about-avatar">intelligence : {hero_intelligence}</p>
                                <p className="about-avatar">strength : {hero_strength}</p>
                                
                            </div>  
                        );
                    })
                }
                </div>
        </section>
    );
}
export default Display;
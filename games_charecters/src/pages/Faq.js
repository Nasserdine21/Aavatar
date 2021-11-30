import React,{useEffect, useRef, useState} from "react";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import './styling/faq.css';
import faq from '../../src/assets/persos/faq.jpg';
function Faq(){

    const[work, setWork] = useState(false);
    const[support, setSupport] = useState(false);
    const[iget, setIget] = useState(false);

    const openWork = () => {
        setWork(!work);
    }

    const openSupport = () => {
        setSupport(!support);
    }
    const openGet = () => {
        setIget(!iget);
    }
    return(
        <section className="container">
            <p>Accordion</p>
            <h2>frequently asked questions</h2>
            
            <div className="faq">
                <div className="image">
                    <img src={faq} />
                </div>


                <div className="buttons">
                    <button onClick={openWork}>how it work <AiOutlinePlus /></button>
                   {
                       work ? <p className="work"> Fugiat voluptate mollit deserunt ut non incididunt fugiat voluptate qui ipsum. Laborum adipisicing dolore cupidatat Lorem. Velit ea non aute minim. Consequat qui tempor aliquip Lorem laborum. Laboris enim ad esse velit dolor sint elit qui sunt aliquip. Exercitation irure proident anim consequat in laborum exercitation.

Amet ipsum occaecat Lorem nostrud voluptate esse sit nulla velit nostrud anim nulla. Occaecat eiusmod elit consectetur cupidatat tempor aliqua labore id. Occaecat tempor laborum consectetur velit pariatur minim ullamco ullamco sit aliqua consectetur consequat. Dolor consequat tempor adipisicing excepteur dolor cupidatat occaecat. Pariatur labore ex veniam cupidatat amet ut magna aliquip ad. Incididunt elit cupidatat nostrud voluptate. Nulla esse ullamco est dolore ea et occaecat sunt cupidatat quis do nostrud esse sit. </p> : null
                   } 
                    <button onClick={openSupport}>how to contact support <AiOutlinePlus /></button>
                    {
                       support ? <p className="work"> Fugiat voluptate mollit deserunt ut non incididunt fugiat voluptate qui ipsum. Laborum adipisicing dolore cupidatat Lorem. Velit ea non aute minim. Consequat qui tempor aliquip Lorem laborum. Laboris enim ad esse velit dolor sint elit qui sunt aliquip. Exercitation irure proident anim consequat in laborum exercitation.

Amet ipsum occaecat Lorem nostrud voluptate esse sit nulla velit nostrud anim nulla. Occaecat eiusmod elit consectetur cupidatat tempor aliqua labore id. Occaecat tempor laborum consectetur velit pariatur minim ullamco ullamco sit aliqua consectetur consequat. Dolor consequat tempor adipisicing excepteur dolor cupidatat occaecat. Pariatur labore ex veniam cupidatat amet ut magna aliquip ad. Incididunt elit cupidatat nostrud voluptate. Nulla esse ullamco est dolore ea et occaecat sunt cupidatat quis do nostrud esse sit. </p> : null
                   } 
                    <button onClick={openGet}>where do i get <AiOutlinePlus /></button>
                    {
                       iget ? <p className="work"> Fugiat voluptate mollit deserunt ut non incididunt fugiat voluptate qui ipsum. Laborum adipisicing dolore cupidatat Lorem. Velit ea non aute minim. Consequat qui tempor aliquip Lorem laborum. Laboris enim ad esse velit dolor sint elit qui sunt aliquip. Exercitation irure proident anim consequat in laborum exercitation.

Amet ipsum occaecat Lorem nostrud voluptate esse sit nulla velit nostrud anim nulla. Occaecat eiusmod elit consectetur cupidatat tempor aliqua labore id. Occaecat tempor laborum consectetur velit pariatur minim ullamco ullamco sit aliqua consectetur consequat. Dolor consequat tempor adipisicing excepteur dolor cupidatat occaecat. Pariatur labore ex veniam cupidatat amet ut magna aliquip ad. Incididunt elit cupidatat nostrud voluptate. Nulla esse ullamco est dolore ea et occaecat sunt cupidatat quis do nostrud esse sit. </p> : null
                   } 
                </div>


            </div>
        </section>
    );
}
export default Faq;
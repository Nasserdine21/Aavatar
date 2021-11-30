import React from "react";
import player1 from '../assets/persos/player1.png';
import player2 from '../assets/persos/player2.png';
import player3 from '../assets/persos/player3.png';
import {ImArrowLeft, ImArrowRight} from 'react-icons/im';

const ImagePerso = ({image, clickLeft, clickRight}) => {


    let imagePrint = "";

    if(image === 1){
        imagePrint = player1;
    }
    else if(image === 2){
        imagePrint = player2;
    }

    else{
        imagePrint = player3;
    }

    return(
    <div className="warior">
    <ImArrowLeft onClick={clickLeft} className="arrows"/>
    <img src={imagePrint} className="person"/>
    <ImArrowRight className="arrows" onClick={clickRight}/>
    </div>
);

}
export default ImagePerso;
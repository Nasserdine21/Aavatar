import React from "react";
import './styling/perssone.css';
import ImagePerso from './ImagePerso';
import {GiMoebiusTrefoil, GiMagicAxe ,GiArtificialIntelligence} from 'react-icons/gi';
import {AiFillPlusCircle ,AiFillMinusCircle} from 'react-icons/ai';
import {MdSaveAlt} from 'react-icons/md';
import {weapons} from '../components/data/weapons';
import axios from "axios";
import Swal from "sweetalert2";
class Personne extends React.Component{
    state = {
        perssone : {
        image : 1,
        strength : 0,
        agility : 0,
        intelligence : 0,
        weaponName : ""
        },

        ability : 14,
        

        
    }
    sendData = ()  => {
        let Pname = "";
        let heroHoldWeapon = "";
        if(this.state.perssone.image === 1){
            Pname = "kitana";
        }
        else if(this.state.perssone.image === 2){
            Pname = "hermes";
        }
        else{
            Pname = "martin";
        }


        if(Pname === "kitana" && this.state.perssone.weaponName === "axe"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar7.png";
        }
        else if(Pname === "kitana" && this.state.perssone.weaponName === "sword"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar6.png";
        }
        else if(Pname === "kitana" && this.state.perssone.weaponName === "fleau"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar5.png";
        }
        else if(Pname === "kitana" && this.state.perssone.weaponName === "arche"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar8.png";
        }

        if(Pname === "hermes" && this.state.perssone.weaponName === "arche"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar1.png";
        }
        else if(Pname === "hermes" && this.state.perssone.weaponName === "sword"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar2.png";
        }
        else if(Pname === "hermes" && this.state.perssone.weaponName === "fleau"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar4.png";
        }
        else if(Pname === "hermes" && this.state.perssone.weaponName === "axe"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar3.png";
        }

        if(Pname === "martin" && this.state.perssone.weaponName === "arche"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar9.png";
        }
        else if(Pname === "martin" && this.state.perssone.weaponName === "axe"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar10.png";
        }
        else if(Pname === "martin" && this.state.perssone.weaponName === "fleau"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar11.png";
        }
        else if(Pname === "martin" && this.state.perssone.weaponName === "sword"){
            heroHoldWeapon = "https://nasserdine21.github.io/heros/avatar12.png";
        }
        const hero = {
            hero_image: heroHoldWeapon,
            hero_name: Pname,
             hero_weapon: this.state.perssone.weaponName,
              hero_strength: this.state.perssone.strength,
             hero_agility: this.state.perssone.agility,
              hero_intelligence: this.state.perssone.intelligence}

             axios.post('https://avatar-f430b-default-rtdb.firebaseio.com/persons.json', hero)
             .then(response=>{

                Swal.fire({
                    title: 'name : ' + Pname,
                    text:'weapon : ' + this.state.perssone.weaponName,
                    imageUrl: heroHoldWeapon,
                    imageWidth: 200,
                    imageHeight: 300,
                    imageAlt: 'Custom image',
                    backdrop: `
                                rgba(0,0,123,0.4)
                                url("https://sweetalert2.github.io/images/nyan-cat.gif")
                                left top
                                no-repeat
                            `
                  })
            
             }).catch((error)=>{Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })})
    }
     
    choseWeapon = (name) => {

        console.log(name)

          this.setState(old => {

               const newPerson = {...old.perssone}
               newPerson.weaponName = name
               const newWeapon = newPerson.weaponName

               return {

                perssone:newPerson,
                weaponName:newWeapon

               }
          })

          document.querySelector('.weapon-desc').classList.remove('opa');
    
          
        }

    nextImage = () => {

        this.setState((old) => {
            const newPerson = {...old.perssone}

            if(old.perssone.image >= 3){
                newPerson.image = 1;
            }

            else{
                newPerson.image++
            }
            return {perssone : newPerson}
        })
    }


    prevImage = () => {

        this.setState((old) => {
            const newPerson = {...old.perssone}

            if(old.perssone.image <= 1){
                newPerson.image = 3;
            }

            else{
                newPerson.image--
            }
            return {perssone : newPerson}
        })
    }

    incremStrength = () => {
        this.setState(old => {
            const newPersonne = {...old.perssone}
            if(this.state.ability > 0){
            newPersonne.strength++ ;
            this.state.ability--;
            }

            return{perssone : newPersonne}
        })
    }

    desencremStrength = () => {
        this.setState(old => {
            const newPersonne = {...old.perssone}
            if(this.state.ability <= 14){
            if(this.state.perssone.strength > 0){
            newPersonne.strength-- ;
            this.state.ability++;
            }
            }

            return{perssone : newPersonne}
        })
    }

    incremIntelligence = () => {
        this.setState(old => {
            const newPersonne = {...old.perssone}
            if(this.state.ability > 0){
            newPersonne.intelligence++ ;
            this.state.ability--;
            }

            return{perssone : newPersonne}
        })
    }

    desencremIntelligence = () => {
        this.setState(old => {
            const newPersonne = {...old.perssone}
            if(this.state.ability <= 14){
            if(this.state.perssone.intelligence > 0){
            newPersonne.intelligence-- ;
            this.state.ability++;
            }
            }

            return{perssone : newPersonne}
        })
    }

    incremAgility = () => {
        this.setState(old => {
            const newPersonne = {...old.perssone}
            if(this.state.ability > 0){
            newPersonne.agility++ ;
            this.state.ability--;
            }

            return{perssone : newPersonne}
        })
    }

    desencremAgility = () => {
        this.setState(old => {
            const newPersonne = {...old.perssone}
            if(this.state.ability <= 14){
            if(this.state.perssone.agility > 0){
            newPersonne.agility-- ;
            this.state.ability++;
            }
            }

            return{perssone : newPersonne}
        })
    }

    
    render(){
        
        return(
            <section className="create-perssone">

                <h1>chose wisely your gaming avatar</h1>
                <div className="bar"></div>

                

                <ImagePerso image={this.state.perssone.image} clickRight={this.nextImage} clickLeft={this.prevImage}/>

                <div className="ability">


                    
                    <div className="strength">
                        <AiFillPlusCircle className="plus" onClick={this.incremStrength}/>
                        <div><GiMoebiusTrefoil className="power" /> <span>{this.state.perssone.strength}</span></div>
                        <AiFillMinusCircle  className="mince" onClick={this.desencremStrength}/>
                        </div>

                        <div className="agility">
                        <AiFillPlusCircle className="plus" onClick={this.incremAgility}/>
                        <div><GiMagicAxe className="power" /> <span>{this.state.perssone.agility}</span></div>
                        <AiFillMinusCircle className="mince" onClick={this.desencremAgility}/>
                        </div>

                        <div className="intelligence">
                        <AiFillPlusCircle className="plus" onClick={this.incremIntelligence} />
                        <div><GiArtificialIntelligence className="power" /> <span>{this.state.perssone.intelligence}</span></div>
                        <AiFillMinusCircle className="mince" onClick={this.desencremIntelligence}/>
                        </div>


                </div>

                <h2 className="points">points left : {this.state.ability}</h2>

                <div className="chose-weapon">
                {
                    weapons.map((item) => {
                        const{images, name} = item;
                        return(
                        <div className="weapon-desc opa" key={item.id} id="divChosen" onClick={() => this.choseWeapon(name)}>
                            <div className="weapon-img">
                                <img src={images} />
                            </div>
                            <h3 id="getName">{name}</h3>
                            
                        </div>
                        );
                    })
                }   
                </div>

                <button type="button" className="send-data" onClick={this.sendData}><MdSaveAlt className="save"/> create</button>

            </section>
        );
    }
}
export default Personne;
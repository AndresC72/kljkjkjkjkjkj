import React, { useState } from "react";

import Styles from './../../assets/styles/landing.module.css';
import Texts from './../../assets/styles/texts.module.css';
import UserTypesCard from './UserTypesCard';
import or from './../../assets/img/or.png';


export const UserTypes = () => {
   


    let users = [
        { 
         key: "1user",
        type: "ESPECTADOR",
        description: "Donec at sem. Vestibulum cursus. Integer dolor. Vestibulum sit amet sem nec augue fermentum consectetuer. Integer justo. Vivamus vel sapien. Praesent nisl tortor, laoreet eu, dapibus quis, egestas non, mauris. Cum sociis natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. Nullam eleifend pharetra   felis",
        img: {or},
    },
    {  key: "2user",
        type: "ORGANIZADOR",
        description: "Donec at sem. Vestibulum cursus. Integer dolor. Vestibulum sit amet sem nec augue fermentum consectetuer. Integer justo. Vivamus vel sapien. Praesent nisl tortor, laoreet eu, dapibus quis, egestas non, mauris. Cum sociis natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. Nullam eleifend pharetra   felis",
        img: {or},
    },
    { 
        key: "3user",
        type: "PANELISTA",
        description: "Donec at sem. Vestibulum cursus. Integer dolor. Vestibulum sit amet sem nec augue fermentum consectetuer. Integer justo. Vivamus vel sapien. Praesent nisl tortor, laoreet eu, dapibus quis, egestas non, mauris. Cum sociis natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. Nullam eleifend pharetra   felis",
        img: {or},
    },
]


    return (
        <div>

           
<div className={`${Styles.locateTittleUT} ${Styles.rightSidePartCar}`}>
        <h1 className={`${Texts.rightAlign} ${Texts.tittle}`}> ¿CUAL ES TU PERFIL?</h1>
        <h1 className={`${Texts.rightAlign} ${Texts.tittle}`}> ¡¡ Regístrate gratis !! y empieza disfrutar</h1>
    </div>
         <div  className={Styles.boxPartOne3}>

         {console.log(users)} 
                { users.map(user =>(
                      <UserTypesCard key={user.key} type={user.type} description={user.description} img={user.img}/>

))}
        
         </div>
        </div>
    )
}

export default UserTypes
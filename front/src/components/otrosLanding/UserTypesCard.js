import React, { useState } from "react";

import Styles from './../../assets/styles/landing.module.css';
import Texts from './../../assets/styles/texts.module.css';


export const UserTypeCard = (props) => {


   const [isActive, setActive] = useState(false);
   
 



    return (
        <>           
  <div id={props.key} className={`${Styles.item2} ${isActive && Styles.upSize}`} onClick={() => setActive(!isActive) }>

<div className={Styles.border}>

    < img className={Styles.img2} src={props.img} />

    <div className={`${!isActive && Styles.hide} ${isActive && Styles.tittleUsers}`}><p>{props.type}</p></div>


</div>

<p className={`${!isActive && Styles.hide} ${isActive && Texts.contents}`}>{props.description}</p>

<hr className={!isActive && Styles.hide} />

</div >
    {console.log('imprimio card '+ props.img + 'texto img:' + JSON.stringify(props.img))}
        </>
    )
}

export default UserTypeCard
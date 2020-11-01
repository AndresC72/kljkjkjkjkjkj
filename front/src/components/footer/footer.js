import React from 'react'

import Style from  './../../assets/styles/footer.module.css';


// Logos redes sociales

import Facebook from './../../assets/img/Facebook.png'
import Instagram from './../../assets/img/Instagram.png'
import Pinterest from './../../assets/img/Pinterest.png'
import Twitter from './../../assets/img/Twitter.png'

export const footer = () => {
    return (
        

 
        <div className= {`${Style.site}`} >
         
         <div className="container">
                <div className="row ">

                  <div className="col-sm ">


                  <ul  className= {`${Style.footer1}`} >
                      <li><a >CONTACTO </a></li> <hr/>
                      <li><a >TEL</a></li> <hr/>
                      <li><a >EMAIL</a></li>            
                    </ul>
                              
                    </div>
                    <div className="col-sm ">
                  

                  <ul className= {`${Style.footer1}`} >
                    <a >< img src={Facebook} /> </a>
                    <a >< img src={Instagram} /></a>
                    <a >< img src={Pinterest} /></a>
                  <a >< img src={Twitter} /></a> 
                  
                  
                  </ul>                
                  
                </div>


                <div className="col-sm">
                  
                  <ul className= {`${Style.footer2}`}>
                    <li><a >PREGUNTAS FRECUENTES</a></li><hr/>
                    <li><a >TÉRMINOS Y CONDICIONES</a></li><hr/>
                    <li><a >POLÍTICAS DE PRIVACIDAD</a></li><hr/>
                    <li><a >COMUNÍCATE CON UN ASESOR</a></li>
                    
                  </ul>
                </div>

                  </div>
           </div>
        </div>
    )
}

export default footer
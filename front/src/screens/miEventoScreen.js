import React from 'react'
import styleEvento from './../../src/assets/styles/miEvento.module.css'
import screen from './../assets/img/screen.png'


import Buttons from './../assets/styles/buttons.module.css';


//-------------------- iconos 

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';



export const miEventoScreen = () => {
    return (
        <div>

{/* -------------------------- Menu lateral------------------- */}

<div className={styleEvento.container2}>

 <div className={styleEvento.menu}>            
                
    
    <ul  className={styleEvento.sanmenu}>
        <li>
            <a>
                <div className={styleEvento.sancontent}>
                    <h2 className={styleEvento.sanmain}>Buscar eventos</h2>                                
                </div>
            </a>
        </li>
        <li>
            <a>
                <div className={styleEvento.sancontent}>
                    <h2 className={styleEvento.sanmain}>Eventos pasados</h2>                              
                </div>
            </a>
        </li>
        <li>
            <a>
                <div className={styleEvento.sancontent}>
                    <h2 className={styleEvento.sanmain}>Tu calendario</h2>                               
                </div>
            </a>
        </li>
        <li>
            <a>
                <div className={styleEvento.sancontent}>
                    <h2 className={styleEvento.sanmain}>Tu tienda</h2>                                
                </div>
            </a>
        </li>
        <li>
            <a>
                <div className={styleEvento.sancontent}>
                    <h2 className={styleEvento.sanmain}>Configuración</h2>                                
                </div>
            </a>
        </li>
    </ul>
                
</div>

<b>  </b>

            <div className={styleEvento.saludo}><FontAwesomeIcon icon={faBell} size="lg" color="#fe4914"   />&nbsp;
            
            
            <input  className= {`${styleEvento.aweform}`} type="text" placeholder="Bienvenido xxxx xxxxx xxxxx"  /> 
            
            
            </div>


            <div className={styleEvento.titulo}><b>JEDiONDO-XXXXXXXX</b>  </div>


            <div className={styleEvento.foto}>

               

            <p>< img  src={screen} />  </p>


            <p><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Anexar al calendario      </p>

            </div>


            <div className={styleEvento.info}>
            

            <p>Fecha: Del 30 de noviembre a diciembre 5</p>

            <p>Hora: 8.00 p.m hora colombiana</p>

            <p>Valor: $20.000 COP</p>

            <p>Panelista: Pedro Gonzalez-humorista</p>

            <p>Nº DE SILLAS: 200</p>

            <p>
                
            <b>Descripción:</b><br/>
            at sem. Vestibulum cursus. Integer dolor. Vestibulum sit amet sem nec augue fermentum
            consectetuer. Integer justo.<br/>
            Vivamus vel sapien. Praesent nisl tortor, laoreet eu, dapibus quis, egestas non, mauris. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam eleifend pharetra
            felis. Mauris nibh velit, tristique ac, lacinia in, scelerisque et, ante. Donec viverra tortor sed nulla.</p>


            <div className={styleEvento.lowerSidePartOne}>
                    <span className={Buttons.redButton2}>INGRESAR A LA SALA</span>
            </div>  
          
            
            </div>



</div>

</div>
    )
}

export default miEventoScreen
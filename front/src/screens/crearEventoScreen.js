import React, { Component } from 'react'
import Style from  './../assets/styles/crearEvento.module.css';
import Buttons from './../assets/styles/buttons.module.css';
import Mas from './../assets/img/Mas.png';
import Calendario from './../assets/img/Calendario.png';

// iconos redes sociales

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons';


export const crearEventoScreen = () => {



    return (

      <div>
      
      
      <div className= {`${Style.formulario}`}>

      <div className= {`${Style.titulo} ${Style.centrado}`}>CREAR EVENTO </div>
      
      

      <form>
						
						<div   className= {`${Style.field}`}>           
							<label htmlFor="subject">Tipo de evento: </label>
							<div className= {`${Style.inputs}`} >

								<select className= {`${Style.aweform}`}   id="subject" name="subject">
									<option value="teatro">Teatro</option>
									<option value="comedia">comedia</option>
									<option value="cocina"> cocina</option>
								</select>
							</div> 
                            
						</div>

                        <div className= {`${Style.field}`}>
							<label htmlFor="email">Nombre del evento:</label>
							<div className= {`${Style.inputs}`}>
                                
								 <input className= {`${Style.aweform}`} type="text" id="email" name="email" /> 
                          
							</div>  
						</div>
						
						<div className= {`${Style.field}`}>
							<label htmlFor="phone">Nº de Panelistas: </label>
							<div className= {`${Style.inputs}`}>
                            <input className= {`${Style.aweform}`} type="text" id="email" name="email" /> 
							</div>  
						</div>						

						<div className= {`${Style.field}`}>
							<label htmlFor="phone">Numero de tickets: </label>
							<div className= {`${Style.inputs}`}>
                            <input className= {`${Style.aweform}`} type="text" id="email" name="email" /> 
							</div>  
						</div>

						<div className= {`${Style.field}`}>
							<label htmlFor="phone">Fechas del evento: </label>
                        
							<div className= {`${Style.inputs}`}>

                            < img className= {`${Style.Calendario}`} src={Calendario} /> 

                            <input  className= {`${Style.aweform}`}  placeholder="Desde / hasta"  type="text" id="email" name="email" /> 
							</div>  
						</div>
						
                        <b> <p> Monetización: </p></b>
                      <p >¿Su proyecto es gratuito? </p>

                      <b><p> Pagina web: </p></b>

                      <div className= {`${Style.field}`}>
							
							<div className= {`${Style.inputs}`}>
								<input className= {`${Style.aweform2}`} type="text" id="phone" name="phone" />
							</div>  
						</div>

                        <b><p>Cuentas integradas:	 </p></b><br/>
                          
                            <div className="container">
                            <div className="row">
                                <div className="col p-0 m-0 ">

                                <div className= {`${Style.field}`}>
                                
                                <div className= {`${Style.inputs}`}> 
                                    <input placeholder="&#xf368; "    className= {`${Style.aweform2}`} type="text" id="phone" name="phone" />
                                    
                                </div>                          

                            </div>                               
                                </div>
                                <div className="col p-0 m-0">
                                <div className= {`${Style.field}`}>
                                <div className= {`${Style.inputs}`}>
                                    <input className= {`${Style.aweform2}`} type="text" id="phone" name="phone" />
                                </div>                                 

                            </div>                                
                                </div>
                            </div>
                            </div>
                            <div className="container">
                            <div className="row">
                                <div className="col p-0 m-0">

                                <div className= {`${Style.field}`}>
                                
                                <div className= {`${Style.inputs}`}>
                                    <input className= {`${Style.aweform2}`} type="text" id="phone" name="phone" />
                                </div>                                 

                            </div>
                               
                                </div>
                                <div className="col p-0 m-0">

                                <div className= {`${Style.field}`}>
                                
                                <div className= {`${Style.inputs}`}>
                                    <input className= {`${Style.aweform2}`} type="text" id="phone" name="phone" />
                                </div>                                

                            </div>
                                
                                </div>
                            </div>
                            </div>

                            <b><p> Descripción del evento:	 </p></b>

                            <div className= {`${Style.field}`}>
							
							<div className= {`${Style.inputs}`}>
								<textarea className= {`${Style.aweform3}`}  id="message" name="message" rows="30" cols="5"></textarea>
							</div>  
						</div>
                      <b> <p> Portada de proyecto: </p></b>          
                      <div className="container">
                        <div className="row">
                            <div className="col p-0 m-0">
                            <p>Puedes subir imágenes de 800 x 300 px.</p>
                            </div>
                            <div className="col p-0 m-0">
                            <div className={Style.lowerSidePartOne}>
                                <span className={Buttons.grayButton}>Agregar foto</span>
                                </div> 
                            </div>
                        </div>
                        </div>

                        <b> <p> Imágenes del proyecto: </p></b>  
                        <div className="container">
                        <div className="row">
                            <div className="col p-0 m-0">
                            <p>Puedes subir imágenes de 800 x 300 px.</p>
                            </div>
                            <div className="col p-0 m-0">
                            <div className={Style.lowerSidePartOne}>
                                <span className={Buttons.grayButton}>Agregar foto</span>
                                </div> 
                            </div>
                        </div>
                        </div>

						<b><p> Tienda para el evento:</p></b>
						
                        <div className= {`${Style.Mas}`}>   < img src={Mas} />  </div>

						<b><p> Sala de chat:</p></b>

                        <div className="container">
                        <div className="row">
                            <div className="col p-0 m-0">
                            <p>¿su proyecto requiere una sala de chat?</p>
                            </div>
                            <div className="col p-0 m-0">                            
                                <p>Si&nbsp;<input type="radio"></input></p>
                            </div>
                        </div>
                        </div>

                        <b><p> Envío de correo de recordación del evento:	</p></b>

                        <div className="container">
                        <div className="row">
                            <div className="col p-0 m-0">
                            <p>¿Su evento requiere enviar recordación a subscriptores?	</p>
                            </div>
                            <div className="col p-0 m-0">                                                       
                            <p>Si&nbsp;<input type="radio"></input></p>                          
                            </div>


                            
                        </div>
                        </div>
                       
                        <div className="container">
                        <div className="row">
                            <div className="col p-0 m-0">
                            <b><p> Soporte por correo electrónico:</p></b> 
                            </div>
                            <div className="col p-0 m-0">
                            
                             <p>SI&nbsp;<input type="radio"></input></p>
                            </div>
                        </div>
                        </div>		

        <div className={Style.lowerSidePartOne}>
                    <span className={Buttons.redButton2}>PUBLICAR</span>
        </div>  

      </form>
      
     </div>

        </div>
    )
}

export default crearEventoScreen
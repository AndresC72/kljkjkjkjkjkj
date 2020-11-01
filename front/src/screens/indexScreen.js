import React from 'react';
import Styles from './../assets/styles/landing.module.css';
import Texts from './../assets/styles/texts.module.css';
import Buttons from './../assets/styles/buttons.module.css';

import boleta1 from './../assets/img/boleta1.png'
import compu from './../assets/img/compu.png'
import compra from './../assets/img/compra.png'
import barras from './../assets/img/barras.png'
import Ipad from './../assets/img/Ipad.png'
import Celular from './../assets/img/Celular.png'

import planes from './../assets/img/planes.png'

import imagen1 from './../assets/img/PNG/imagen1.jpeg'

import computador1 from './../assets/img/computador1.png'
import computador2 from './../assets/img/computador2.png'
import computador3 from './../assets/img/computador3.png'
import computador4 from './../assets/img/computador4.png'

//------------tipos de usuarios-------------------------
import UserTypes from './../components/otrosLanding/UserTypes';


//-------------- carrusel tres imagenes para ultimos eventos----------------------
import styleCarrusel2 from './../assets/styles/lastEventsCarousel.module.css'
import CarruselEventos from '../components/carousels/LastEventsCarousel'

//-------------videos---------------------------------------
import VideoOnePC from '../components/otrosLanding/VideoOneIndex'




export const indexScreen = () => {
    return (
<div>

<section className={Styles.landingFirstImg}>   
    
    <div className={Styles.boxPartOne}>
        <div className={Styles.leftSidePartOne}>

<VideoOnePC />
        </div>


        <div className={Styles.rightSidePartOne}>
            <div className={Styles.upperSidePartOne}>
                <h1 className={`${Texts.leftAlign} ${Texts.tittle}`}> LA MEJOR <br/> PLATAFORMA<br/> DE EVENTOS</h1>
            </div>

            <div className={Styles.middleSidePartOne}>
                <p className={`${Texts.leftAlign} ${Texts.contents}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nisi semper justo accumsan faucibus tempor vitae erat. Duis commodo sodales ex at consequat. Duis et accumsan turpis. Pellentesque eu sagittis nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris orci ante,</p>
            </div>


            <div className={Styles.lowerSidePartOne3}>
                <span className={Buttons.redButton}>PLANES</span>
            </div>

        </div>
    </div>
</section>

  {/* Parte dos, beneficios de usar la plataforma----------------------------------- */}

    
<section>   
            <div className= {`${Styles.text}`} >


            <b><p>BENEFICIOS DE USAR </p></b>

            <b><p>NUESTRA PLATAFORMA</p></b>


            </div>
</section>  

{/* imagenes centrales son 4 ---------------------------------------- */}
           
<section>  

          <div className={Styles.boxPartImg}>

            <div className={Styles.item}>
              
            < img  className= {`${Styles.img}`}   src={compu} />
            
                    <b><p>Es fácil de usar </p></b>


            </div >



            <div className={Styles.item} >
                
            < img className= {`${Styles.img}`} src={boleta1} />  
                    <b><p>Acceso exclusivo a<br/> tus eventos online </p></b>

             </div>


             <div  className={Styles.item}>


            < img className= {`${Styles.img}`} src={compra} />  
            <b><p>Cada evento tendrá una<br/> tienda integrada para<br/> ofrecerte mas ingresos </p></b>
            </div>

            <div className={Styles.item}>


            < img className= {`${Styles.img}`} src={barras} />  
            <b><p>Obtendrás<br/> estadísticas de tus<br/> eventos al instante</p></b>
            </div>

        </div>

</section>  



{/* Parte tres, gran foro, comundiad en crecimiento --------------------------------*/}
           
<section className={Styles.landingSecondImg }>  

    <div className={`${Styles.boxPartOne} ${Styles.larger}`}>

       <div className={Styles.leftSidePartOne}>

          <p>< img className= {`${Styles.Celular1}`}   src={Celular} />  </p> 

       </div>

       <div className={`${Styles.rightSidePart2}`}>
           <div className={Styles.upperSidePartOne}>
               <h1 className={`${Texts.leftAlign} ${Texts.tittle2}`}> GRAN FORO, UNA  <br/>COMUNIDAD<br/> EN CONSTANTE<br/> CRECIMIENTO </h1>
           </div>
           <div className={Styles.middleSidePartOne}>
               <p className={`${Texts.leftAlign} ${Texts.contents2}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nisi semper justo accumsan faucibus tempor vitae erat. Duis commodo sodales ex at consequat. Duis et accumsan turpis. Pellentesque eu sagittis nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris orci ante,</p>
           </div>        

       </div>
    </div>

</section>  





             
{/* Parte cuatro, crear un evento paso 1--------------------------------- */}
          

<section className={Styles.landingThirdImg }>  

          
        <div className={`${Styles.boxPartOne2} ${Styles.larger}`}  >

            <div className={Styles.leftSidePartOne}>
                <div className={Styles.upperSidePartOne}>
                        <h1 className={`${Texts.rightAlign} ${Texts.tittle2}`}> ¿DESEAS CREAR <br/> UN EVENTO?    </h1>
                </div>



                    <div className={Styles.middleSidePartOne}>
                        <p className={`${Texts.rightAlign2}  ${Texts.contents2}`}>
                            
                            
                        <b> Crea un perfil de organizador </b> <br/> 
                            
                            Regístrate como usurario organizador,<br/> 
                            selecciona un plan y accede a todas sus<br/> 
                            funciones. </p>
                    </div>

                    <div className={Styles.lowerSidePartOne}>
                        <span className={Buttons.redButton}>PERFILES</span>
                    </div>           

            </div>


            <div  className={Styles.rightSidePartComp}>

            <p>< img className= {`${Styles.Computador1}`}   src={computador1} />  </p>   
             
            </div>
                    
        </div>

</section>  


 {/* Parte cinco ,  paso 2------------------------------------------------------- */}

<section className={Styles.landingFourthImg } >  

    <div className={`${Styles.boxPartOne} ${Styles.larger}`}>

       <div className={Styles.leftSidePartComp}>

       <p>< img className= {`${Styles.Computador2}`}   src={computador2} />  </p>

       </div>

       <div className={Styles.rightSidePartOne} >
           <div className={Styles.upperSidePartOne}>
               <h1 className={`${Texts.leftAlign} ${Texts.tittle}`}> PLAYLIST TU <br/>MEJOR ALIADA </h1>
           </div>
           <div className={Styles.middleSidePartOne}>
               <p className={`${Texts.leftAlign} ${Texts.contents}`}> Dirígete a la sección PLAYLIST, dale<br/>
                click a botón crear evento y llena el<br/> siguiente formulario.</p>
           </div>          

       </div>
    </div>
</section>  



 {/* Parte seis ,  paso 3---------------------------------------------------- */}

 <section className={Styles.landingFifthImg }>  
            
    <div className={`${Styles.boxPartOne2} ${Styles.larger}`}  >

        <div className={Styles.leftSidePartOne}>
            <div className={Styles.upperSidePartOne}>
                    <h1 className={`${Texts.rightAlign4} ${Texts.tittle2}`}> CONFIGURA A TU <br/> MEDIDA   </h1>
            </div>

            <div className={Styles.middleSidePartOne}>
                    <p className={`${Texts.rightAlign2}  ${Texts.contents2}`}>
                    
                        Podrás configurar tu tipo de evento,<br/> 
                        personalizando la cantidad de tickets, el valor<br/> 
                        del evento tendrás la opción de crear una<br/> 
                        galería fotográfica del evento, incluyendo tu<br/> 
                        propio e-commerce. 
                
                    </p>
            </div>            

        </div>

        <div  className={Styles.rightSidePartOne}>

        <p>< img className= {`${Styles.Computador1}`}   src={computador3} />  </p>   
        
        </div>
            
    </div>

{/* Parte siete ,  paso 4----------------------------------------------*/}



        <div className={`${Styles.boxPartOne} ${Styles.larger}`}>

            <div className={Styles.leftSidePartComp2}>

            <p>< img className= {`${Styles.Computador2}`}   src={computador4} />  </p>

            </div>

            <div className={Styles.rightSidePartOne}>
                <div className={Styles.upperSidePartOne}>
                    <h1 className={`${Texts.leftAlign} ${Texts.tittle2}`}> ES ASÍ DE FÁCIL</h1>
                </div>
                <div className={Styles.middleSidePartOne}>
                         <p className={`${Texts.leftAlign} ${Texts.contents2}`}> 
                        Al llenar el formulario dale click en<br/>
                        publicar. y empieza a disfrutar de todos<br/>
                        los beneficios que tiene un organizador.
                        </p>
                </div> 
            </div>
        </div>
</section>  



{/* Parte ocho ,  ¿CUAL ES TU PERFIL? ------------------------------------------------------ */}

<section className={Styles.landingSixthImg}>  

    <UserTypes />



</section> 

{/* Parte nueve ,  EVENTOS DESTACADOS ------------------------------------------------------ */}

<section className={Styles.landingSeventhImg} > 

    {/* carrusel tres imagenes */}
    <div className={styleCarrusel2.landingFirstImg} >

    <div className={Styles.rightSidePartCar2} >
    <h1 className={`${Texts.rightAlign} ${Texts.tittle3}`}>EVENTOS DESTACADOS </h1>
    <h1 className={`${Texts.rightAlign} ${Texts.tittle2}`}>La gente ha visitado estos eventos</h1>
    </div>
    <CarruselEventos />
        
    </div>

    {/* mostar carousel de 3 imagenes-------------------------- */}


    <div className={Styles.rightSidePartCar} >
            <h1 className={`${Texts.rightAlign} ${Texts.tittle6}`}>NUESTROS<br/>PLANES</h1><br/>

            <h1 className={`${Texts.rightAlign} ${Texts.tittle5}`}>podrás seleccionar<br/>entre estos 3 paquetes</h1>
    </div>


    {/* mostar 3 imagenes tickets------------------------------- */}
    
        <div className={Styles.boxPartOne4}>

            <div className={Styles.item}>
            < img  className= {`${Styles.img3}`} src={planes} />  
            </div >

            <div className={Styles.item} >                
            < img className= {`${Styles.img3}`} src={planes} />
            </div>

            <div  className={Styles.item}>
            < img className= {`${Styles.img3}`} src={planes} />             
            </div>            

        </div>

    <div className={Styles.lowerSidePartOne}>
    <span className={Buttons.redButton}>REGISTRATE</span>
    </div>           

</section>  


{/* ---fin---- */}


</div>

  
    )
}


export default indexScreen
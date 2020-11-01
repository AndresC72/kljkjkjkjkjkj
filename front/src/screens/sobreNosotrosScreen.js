
import React from 'react'
import {Tabs, Tab} from 'react-bootstrap-tabs';

import Styles from './../assets/styles/sobreNosotros.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Style from  './../assets/styles/login.module.css';
// import Buttons from './../assets/styles/buttons.module.css';

import Style from  './../assets/styles/crearEvento.module.css';
import Buttons from './../assets/styles/buttons.module.css';





export const sobreNosotrosScreen = () => {
    return (

<div>          



    <section className={Styles.landingFirstImg}>   


    </section>




    <Tabs  headerStyle={{fontSize: '180%', borderTopLeftRadius: '6.25rem', borderTopRightRadius:'6.25rem',
    
    borderBottomColor: 'transparent', cursor: 'pointer', 


} }  
    
      
    // headerStyle={{borderTopLeftRadius:  '6.25rem'} }

    // headerStyle={{ borderWidth: 1, borderColor: "red" }} 
    
    onSelect={(index, label) => console.log(label + ' selected')}>



    <Tab activeHeaderStyle={{color: 'white'}}   headerStyle={{backgroundColor:'#273991'}} className={Styles.tab1} label="QUIENES SOMOS">
    
    <h2>MISIÓN</h2>
    
    
    <hr/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>

    <h2>VISIÓN</h2>
    
    

    <hr/>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>
    
    </Tab>



    <Tab headerStyle={{backgroundColor:'#e2e2e2'}} className={Styles.tab2} label="PREGUNTAS FRECUENTES">
    
      
    <h2>¿Donde están mis tickets?</h2>
    
    
    <hr/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>

    <h2>¿Cuales medios de pago tengo disponibles?</h2>
    
    

    <hr/>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>
    
    
    
    <h2>¿Que es xxxxxxxxxxxxxx</h2>
    
    

    <hr/>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>
    
    

    <h2>¿Puedo compartir mi ticket online?</h2>
    
    

    <hr/>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>
    
    


    </Tab>



    <Tab activeHeaderStyle={{color: 'white'}}   headerStyle={{backgroundColor:'#fe4914'}}   className={Styles.tab3} label="TÉRMINOS Y CONDICIONES">
        
         
    <h2>TÉRMINOS Y CONDICIONES</h2>
    
    
    

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>

  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>
    
     
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>

  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>
    
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>

  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Quam quia aut laudantium iusto. Libero 
    nostrum aperiam quaerat distinctio enim quo commodi. Quia pariatur nesciunt vero at totam quidem cum? Soluta.</p>
    
           
    </Tab>

    </Tabs>

{/*------------------------- Formulario ----------------------------*/}

<div className= {`${Styles.texto}`}><h3>¿Tienes alguna pregunta o sugerencia?</h3></div>

      
<div className= {`${Styles.formulario}`}>



    <form>    
                <div className= {`${Styles.field}`}>
                      <label >Nombre completo*:</label>
                      <div className= {`${Styles.inputs}`}>                          
                           <input className= {`${Styles.aweform}`} type="text" id="email" name="email" />                     
                      </div>  
                </div>
                  
                <div className= {`${Styles.field}`}>
                      <label>Correo*: </label>
                      <div className= {`${Styles.inputs}`}>
                      <input className= {`${Styles.aweform}`} type="text" id="email" name="email" /> 
                      </div>  
                </div>                  

              <b><p>Tu mensaje*:</p></b>

                      <div className= {`${Styles.field}`}>
                      
                      <div className= {`${Styles.inputs}`}>
                          <textarea className= {`${Styles.aweform3}`}  id="message" name="message" rows="30" cols="5"></textarea>
                      </div>  
                      
                  </div>  

                  <small><input type="checkbox"></input> &nbsp; Acepto que los datos enviados se recopilen y almacenen.</small>



    </form>


    <div className={Styles.lowerSidePartOne}>

            <span className={Buttons.redButton2}>ENVIAR</span>
    </div>  


</div>


















{/* fffffffffffffff */}

</div>

    )
}


export default sobreNosotrosScreen 
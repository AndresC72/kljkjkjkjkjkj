import React  from  'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginPassword, startFacebookLogin} from '../../actions/auth';



// ----- Estilos para la pagina de login---------
import Style from  './../../assets/styles/login.module.css';
import Buttons from './../../assets/styles/buttons.module.css';

// iconos redes sociales

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons';


export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        /* email: 'desarrolloceartisolutions@gmail.com',
        password: '123456' */ 
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginPassword( email, password ) );
         history.push("/"); 
        console.log(JSON.stringify(history));
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
        history.push("/"); 
    }

    const handleFacebookLogin = () => {
        dispatch( startFacebookLogin() );
       history.push("/"); 
    }


   
return(  
<>

<div className= {`${Style.formulario}`}>


{/*--------------- Inicia formulario -----------------*/}

<div className= {`${Style.titulo} ${Style.centrado}`}>LOGIN</div>

             

                <form onSubmit={ handleLogin }>


                <div className= {`${Style.field}`}>

							<label>Correo:</label>

							<div className= {`${Style.inputs}`}>                                
								 
                                    <input 
                                    className= {`${Style.aweform}`}
                                    placeholder="Correo"
                                    type="text"                                 
                                    name="email"                                  
                                    autoComplete="off"
                                    value={ email }
                                    onChange={ handleInputChange } />
							</div>  
				</div>

     {/* ---------------Contraseña -----------------*/}

                <div className= {`${Style.field}`}>

                            <label>Contraseña:</label>

                            <div className= {`${Style.inputs}`}>                                
                                
                            <input 
                            
                                className= {`${Style.aweform}`}
                                placeholder="Contraseña"
                                type="password"
                                name="password"                              
                                value={ password }
                                onChange={ handleInputChange } />

                            </div>  
                </div>


                <div className={Style.lowerSidePartOne}>
                <button className={Buttons.redButton2}
                    type="submit"                  
                           
                    disabled={ loading }
                >
                    Ingresar
                </button>
                </div> 


                    
<section>  

<div className={Style.boxPartOne2}>

  <div className={Style.item}>  
  
          <p>¿Quieres conectarte con alguna<br/>  plataforma? </p>
  </div >



<div   onClick={ handleGoogleLogin  } className={Style.item}>


    <div className={Style.lowerSidePartOne}>
            <span className={Buttons.grayButton2}><FontAwesomeIcon icon={faGooglePlus} />&nbsp; GOOGLE</span>
            </div>                       
</div>


<div onClick={ handleFacebookLogin } className={Style.item}>


<div className={Style.lowerSidePartOne}>
    <span className={Buttons.grayButton2}> <FontAwesomeIcon icon={faFacebook} />&nbsp; FACEBOOK</span> 
    </div>  

</div>

  

</div>

</section>              


<p>Si usted todavía no tiene una cuenta, puede registrarse gratuitamente:</p>


                    <Link  to="/registro"  className="link" >



                    <div className={Style.lowerSidePartOne}>
                    <button className={Buttons.redButton2}
                                  
                           
                    disabled={ loading }
                >
                    Registrarse
                </button>
                </div> 

    

                    </Link>
                    
                </form>
          </div>
        </>
    ); 
}

export default LoginScreen;



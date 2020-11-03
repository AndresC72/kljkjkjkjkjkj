import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

// ----- Estilos para la pagina de login/registro---------
import Style from  './../../assets/styles/login.module.css';
import Buttons from './../../assets/styles/buttons.module.css';



export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

 



const [ formValues, handleInputChange ] = useForm({

   /*  name: 'Andy',
    email: 'desarrolloceartisolutions@gmail.com',
    password: '123456',
    password2: '123456',
 */
})

const { name, email, password ,password2 } = formValues;


const handleRegister = (e) => {
    e.preventDefault();

    if( isFormValid() ) {
        dispatch( startRegisterWithEmailPasswordName( email, password, name ) );
        history.push("/"); 
    }
}

const isFormValid = () => {

    if( name.trim().length === 0 ) {
        dispatch( setError(Swal.fire('Error', "EL nombre es requerido", 'error')) );
        return false;
    } else if ( !validator.isEmail( email ) ) {
        dispatch( setError(Swal.fire('Error', "EL correo ya esta registrado", 'error')) );
        return false;
    } else if ( password !== password2 ||  password.length < 5 ) {
        dispatch( setError('La contraseña debe ser de 6 caracteres y ser identica a la validacion') );
        return false;
    }


    dispatch( removeError() )
    return true;
}


    return (
        <>



 {/*--------------- Inicia formulario -----------------*/}

 <div className= {`${Style.formulario}`}>


 <div className= {`${Style.titulo} ${Style.centrado}`}>REGISTRO</div>


           

            <form onSubmit={ handleRegister }>


            {
                msgError &&
                (
                    <div className="auth__alert-error">
                { msgError }
            </div>
                )
            }




<div className= {`${Style.field}`}>
<label>Nombre:</label>
<div className= {`${Style.inputs}`}>   
                <input 
                    className= {`${Style.aweform}`}
                    type="text"
                    name="name"                    
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange } />
</div>
</div>

<div className= {`${Style.field}`}>
<label>E-mail:</label>
<div className= {`${Style.inputs}`}>


                <input 
                    className= {`${Style.aweform}`}
                    type="text"
                    name="email"                    
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange } />
</div>
</div>

<div className= {`${Style.field}`}>
<label>Contraseña:</label>
<div className= {`${Style.inputs}`}>


                <input 
                    className= {`${Style.aweform}`}
                    type="password"
                    id="myInput"
                    name="password"
                    value={ password }  
                    onChange={ handleInputChange } />
</div>
</div>

<div className= {`${Style.field}`}>
<label>Confirma contraseña:</label>
<div className= {`${Style.inputs}`}>


                <input 
                    className= {`${Style.aweform}`}
                    type="password"
                    name="password2"
                    value={ password2 }  
                    onChange={ handleInputChange } />
</div>
</div>
                
<p>Términos y condiciones, política de privacidad.  </p>


  

<div className={Style.lowerSidePartOne}>               
                <button className={Buttons.redButton2}
                    type="submit" >
                    REGISTRAR
                </button>
 </div>              



                <Link 
                    to="/login"
                    className="link"
                >
                    ¿Ya esta registrado?
                </Link>



            </form>
            </div>
        </>
    )
}

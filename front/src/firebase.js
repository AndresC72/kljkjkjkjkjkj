
import firebase from 'firebase/app';
import 'firebase/auth'


//aca te mando el codigo   
//de la integración con firebase y registro ,
// al registro le faltan campos pues según lo establecido en las tablas que hicimos ,
// al igual que la parte del login social, 
// parte antes del sprint con el cliente,  
 //en la parte de firebase debes agregar las credenciales  de otra cuenta para que guardes los datos 
 // si no se siguiran guardando los datos  en mi cuenta. no borres ningún archivo 
 // ya el proyecto esta configurado con webpack y babel para que no ocurra ningún problema de navegación, 
 //webpack optimiza el codigo y te lo empaqueta y transpila a código máquina lo cual lo hace mas rapido y 
 //entendible. 

 // el unico archivo que si se puede borrar es el de nombre login redes que es donde estaba intentando hacerlo
 // cualquier cosa que no entiendas de ese código avisame


 //  *******************************Importante******************************************
 // Esta es la seccion de codigo que se va a cambiar para configurarla con la cuenta de la empresa de cearti
//  

var firebaseConfig = {
    apiKey: "AIzaSyC3pi7J_GH2XjE41vDtuCDXqeMblbcc0bY",
    authDomain: "novoclick-teatro.firebaseapp.com",
databaseURL: "https://novoclick-teatro.firebaseio.com",
projectId: "novoclick-teatro",
   storageBucket: "novoclick-teatro.appspot.com",
    messagingSenderId: "173460791280",
    appId: "1:173460791280:web:748b504296c2b25c14c735",
   measurementId: "G-WS2VVEGJLE"

 };


 // #Fixed# vr 1.1
 // aca termina la seccion de codigo que hay que cambiar 
 

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig)


 if (!firebase.apps.length) {
   firebase.initializeApp({});
 }

  const auth = fire.auth()

  export {auth}

 

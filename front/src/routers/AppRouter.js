import React, { useContext } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';
import ColorPicker from '../components/auth/ColorPicker';

import TextEditor from '../components/auth/TextEditor';

/* ---Rutas del menu principal */
/* publicas */
import IndexScreen from '../screens/indexScreen';
import PatrocinadoresScreen from '../screens/infoPatrocinadoresScreen';
import SobreNosotrosScreen from '../screens/sobreNosotrosScreen';
import AyudaScreen from '../screens/ayudaScreen';
import NavBar from '../components/navBar/navBar';
import LoginScreen  from '../components/auth/LoginScreen';
import { AuthContext }  from '../components/auth/AuthContext';
import { RegisterScreen } from '../components/auth/RegisterScreen';
/* privadas */
import MiPerfilScreen from '../screens/miPerfilScreen';
import CrearEvento from '../screens/crearEventoScreen';
import BuscarEventosScreen from '../screens/buscarEventosScreen';
/*--- Rutas del menu azul por evento y usuario */
import MiEventoScreen from "../screens/miEventoScreen";
import MisEstadisticasScreen from "../screens/misEstadisticasScreen";
import MiCalendarioScreen from "../screens/miCalendarioScreen";
import MiConfiguracionScreen from "../screens/miConfiguracionScreen";
import MisEventosPasadosScreen from "../screens/misEventosPasadosScreen";


export const AppRouter = () => {

  const { user } = useContext( AuthContext )

  return (
    
    //Rutas del navegador principal
    <BrowserRouter>
    <NavBar />
      <div>
        <Switch>
        <Route exact path="/">
            < IndexScreen />
            </Route>
            <PublicRoute
            exact 
            path="/eventos"
            component={ BuscarEventosScreen }
            isAuthenticated={user.logged}
          />
            <PublicRoute
            exact 
            path="/patrocinadores"
            component={ PatrocinadoresScreen }
            isAuthenticated={user.logged}
          />
          <PublicRoute
            exact 
            path="/miPerfil"
            component={ MiPerfilScreen }
            isAuthenticated={user.logged}
          />
          <PublicRoute
            exact 
            path="/crearEvento"
            component={ CrearEvento }
            isAuthenticated={user.logged}
          />
          <PublicRoute
            exact 
            path="/sobreNosotros"
            component={ SobreNosotrosScreen }
            isAuthenticated={user.logged}
          />
          <PublicRoute
            exact 
            path="/ayuda"
            component={ AyudaScreen }
            isAuthenticated={user.logged}
          />
          <PublicRoute
            exact 
            path="/login"
            component={ LoginScreen }
            isAuthenticated={user.logged}
          />
          <PublicRoute
          path="/registro"
          component={ RegisterScreen }
          isAuthenticated= {user.logged}          
          />

          <PublicRoute
          path="/colorpicker"
          component={ ColorPicker }
          isAuthenticated= {user.logged}
          />


          <PublicRoute
          path="/editor"
          component={ TextEditor }
          isAuthenticated= {user.logged}
          />

{/* rutas solo de un evento y un usuario. Meno no es principal */}
          <PublicRoute
            exact 
            path="/miEvento"
            component={ MiEventoScreen }
            isAuthenticated={user.logged}
          />
                    <PublicRoute
            exact 
            path="/tusEventosPasados"
            component={ MisEventosPasadosScreen }
            isAuthenticated={user.logged}
          />
                              <PublicRoute
            exact 
            path="/tuCalendario"
            component={ MiCalendarioScreen }
            isAuthenticated={user.logged}
          />
                              <PublicRoute
            exact 
            path="/tuConfiguracion"
            component={ MiConfiguracionScreen }
            isAuthenticated={user.logged}
          />

<PublicRoute
            exact 
            path="/tusEstadisticasEvento"
            component={ MisEstadisticasScreen }
            isAuthenticated={user.logged}
          />


          
        </Switch>
      </div>
    </BrowserRouter>



  );
};

export default AppRouter
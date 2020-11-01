import React from  'react'

import { Provider } from 'react-redux';
import ReactDOM  from  'react-dom'
import { store } from '../src/store/store';
import {App} from  './App'



ReactDOM.render( 
    
<Provider store={store}>
<App/>
</Provider>,


 document.getElementById('app'))


 



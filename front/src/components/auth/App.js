import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import MainPanel from './MainPanel'


const App = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
            <Sidebar />
            <MainPanel />
            </BrowserRouter>
        </div>
    )
}

export default App;

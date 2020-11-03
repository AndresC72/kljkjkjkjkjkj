import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import User from './User';
import Table from './Table';

const Content = () => {
    return (
       <Switch>
         <Route exact path="/" component={Dashboard}/>
         <Route exact path="/dashboard" component={Dashboard}/>
         <Route exact path="/user" component={User}/>
         <Route exact path="/tables" component={ Table }/>
       </Switch>
    )
}

export default Content;
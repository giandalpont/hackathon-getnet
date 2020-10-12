import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Trilha from './Pages/Trilha';


export const App = () => (
  <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/trilha-de-conhecimento" component={Trilha} />
  </Switch>
 )

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Trilha from './Pages/Trilha';
import TrilhaEducacaoFinanceira from './Pages/Trilha/EducacaoFinanceira';
import TrilhaCapitalGiro from './Pages/Trilha/CapitalGiro';
import TrilhaFluxoCaixa from './Pages/Trilha/FluxoCaixa';
import TrilhaProLabore from './Pages/Trilha/ProLabore';
import TrilhaDefinaObjetivo from './Pages/Trilha/DefinaObjetivo';
import TrilhaOrganizeEntradas from './Pages/Trilha/OrganizeEntradas';
import TrilhaPlanejeSaidas from './Pages/Trilha/PlanejeSaidas';
import TrilhaOrganizeFuturo from './Pages/Trilha/OrganizeFuturo';


export const App = () => (
  <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/trilha-de-conhecimento" exact component={Trilha} />

      <Route path="/trilha-de-conhecimento/nocao-de-educacao-financeira" exact component={TrilhaEducacaoFinanceira} />
      <Route path="/trilha-de-conhecimento/capital-de-giro" exact component={TrilhaCapitalGiro} />
      <Route path="/trilha-de-conhecimento/fluxo-de-caixa" exact component={TrilhaFluxoCaixa} />
      <Route path="/trilha-de-conhecimento/pro-labore" exact component={TrilhaProLabore} />

      <Route path="/trilha-de-conhecimento/defina-o-objetivo" exact component={TrilhaDefinaObjetivo} />
      <Route path="/trilha-de-conhecimento/organize-as-entradas" exact component={TrilhaOrganizeEntradas} />
      <Route path="/trilha-de-conhecimento/planeje-as-saidas" exact component={TrilhaPlanejeSaidas} />
      <Route path="/trilha-de-conhecimento/organize-o-futuro" exact component={TrilhaOrganizeFuturo} />
  </Switch>
 )

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Bar from './components/header';
import Main from './pages/main';
import About from './pages/about';
import Team from './pages/team';
import Projects from './pages/projects';
import Help from './pages/help';
import Contact from './pages/contact';

const Routes = () => (
    <BrowserRouter>
        <Bar />
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/quem-somos" component={ About } />
            <Route path="/participantes" component={ Team } />
            <Route path="/projetos" component={ Projects } />
            <Route path="/como-ajudar" component={ Help } />
            <Route path="/contato" component={ Contact } />
        </Switch>
    </BrowserRouter>
);

export default Routes;
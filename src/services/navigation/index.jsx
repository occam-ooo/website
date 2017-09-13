import React from 'react';
import { Route } from 'react-router-dom';
import Root from '../../containers/Root';
import Projects from '../../containers/Projects';
import About from '../../containers/About';

import { ROUTE_ROOT, ROUTE_ABOUT, ROUTE_PROJECTS } from './routes';

const Routes = () => (
  <div>
    <Route exact path={ROUTE_ROOT} component={Root} />
    <Route path={ROUTE_PROJECTS} component={Projects} />
    <Route path={ROUTE_ABOUT} component={About} />
  </div>
);

export default Routes;

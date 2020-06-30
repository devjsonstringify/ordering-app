import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import local files
import Modules from '../Modules';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {Modules.map((module) => (
          <Route {...module.routeProps} key={module.name} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

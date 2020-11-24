/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// import local files
import Modules from '../Modules';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {Modules.map((module) => (
          <Route {...module.routeProps} key={uuidv4()} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

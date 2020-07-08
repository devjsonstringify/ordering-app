// import react library
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

//import local files
import Routes from './Routes/Routes';
import './Assets/SASS/global.scss';

function App() {
  //fontawesome
  library.add(fab, faCheckSquare, faCoffee);
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' //npm i react-router-dom

import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'

import { Provider } from './context';

import Colorback from './Colorback/Colorback'


import './App.css';

function App() {  
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Colorback>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
              </Switch>
            </div>
          </Colorback>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;

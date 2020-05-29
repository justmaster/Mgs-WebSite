import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import styled from 'styled-components';


import Contact from "./components/contact";
import Characters from "./components/Characters.js";
import Home from "./components/home";
import Error from "./components/Error";
import Nav from "./components/Navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={Contact} />
              <Route path="/characters" component={Characters} />
              <Route component= {Error} />
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

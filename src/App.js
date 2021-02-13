import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Soutien from './Pages/Soutenir';

import NotFound404 from "./Pages/NotFound404";


function App() {
  return (
    <div>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path='/soutenir/' component={Soutien}/>
        <Route path="/" component={NotFound404} />
        {/* <Route path="/Activity/:slug" component={Activity} /> */}
      </Switch>

    </div>
  );
}

export default App;

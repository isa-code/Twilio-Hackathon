
import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound404 from "./Pages/NotFound404"
import Soutien from "./Components/Soutien/Soutenir";

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" component={NotFound404} />
          <Route path="/soutien/" component={Soutien}/>
        </Switch>
    </div>
  );

}

export default App;
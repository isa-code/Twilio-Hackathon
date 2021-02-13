import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Activity from "./Pages/Activity";
import Soutien from "./Pages/Soutien/Soutenir";
import NotFound404 from "./Pages/NotFound404";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/soutien" component={Soutien} />
        <Route path="/activity" component={Activity} />
        <Route component={NotFound404} />
        {/* <Route path="/Activity/:slug" component={Activity} /> */}
      </Switch>
    </div>
  );
}

export default App;

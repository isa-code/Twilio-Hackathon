import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Activity from "./Pages/Activity";
import Soutien from "./Pages/Soutenir";
import Login from "./Components/Login";
import NotFound404 from "./Pages/NotFound404";
import CreateActivity from "./Pages/CreateActivity";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/soutien" component={Soutien} />
        <Route path="/login/" component={Login} />
        <Route path="/activity" component={Activity} />
        <Route path="/createactivity" component={CreateActivity} />
        <Route component={NotFound404} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import New from "./pages/New";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Update from "./pages/Update.js";
// import Search from "./pages/Drawing";


const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/drawings" component={Main} />
        <Route exact path="/new" component={New} />
        <Route exact path="/drawings/:id" component={Update}/>

        {/*
          <Route exact path="/drawings" component={Main} />
          <Route exact path="/new" component={New} />
          <Route exact path="/drawing" component={Drawing} />
        */}
      </Switch>
  </Router>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import New from "./pages/New";
// import Search from "./pages/Drawing";


const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/new" component={New} />

        {/*
          <Route exact path="/drawings" component={Main} />
          <Route exact path="/new" component={New} />
          <Route exact path="/drawing" component={Drawing} />
        */}
      </Switch>
  </Router>
);

export default App;

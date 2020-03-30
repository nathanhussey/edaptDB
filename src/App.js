import React from "react";
import "tachyons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./containers/errorBoundary/ErrorBoundary";
import Homepage from "./containers/homepage/Homepage";
import Survey from "./containers/survey/Survey";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <ErrorBoundary>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/survey" component={Survey} />
          </ErrorBoundary>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/search/:id" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

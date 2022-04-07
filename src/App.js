import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import arraySum from './components/arraySum';
import helloWorld from './components/helloWorld';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AppComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand">Softify Assessments</span>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/helloworld">
                  Hello World
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/arraysum">
                  Sum of Array
                </Link>
              </li>
            </ul>
          </nav>
          {/* code the required routes here */}
          <Switch>
            <Route exact path="/" component={helloWorld}/>
            <Route  path="/helloworld" component={helloWorld}/>
            <Route  path="/arraysum" component={arraySum}/>
            <Route  path="*" render = {()=><Redirect to="helloworld"/>}/>
          </Switch>
        </div>
        
      </Router>
    );
  }
}

export default AppComp;
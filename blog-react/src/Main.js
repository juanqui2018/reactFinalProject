import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Proyecto Final React</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact  path="/" component={Home}/>
                <Route path="/contact/:id" component={Contact}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;
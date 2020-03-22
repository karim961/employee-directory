import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import HerokudbState from "./context/herokudb/herokudbState";
import Employee from "./components/employees/Employee";
import UpdateEmployee from "./components/employees/UpdateEmployee";
import CreateEmployee from "./components/employees/CreateEmployee";

function App() {


    return (
        <HerokudbState>
            <Router>
                <div className="App">
                    <Navbar/>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/employee/:id' component={Employee}/>
                            <Route exact path='/employee/:id/update' component={UpdateEmployee}/>
                            <Route exact path='/employees/create' component={CreateEmployee}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </HerokudbState>
    );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./App";
import Nav from "./Nav";
import Form1 from "./form1";



function Link() {

    return (

        <BrowserRouter>
            <Nav />

            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Form1" component={Form1} />
            </Switch>

        </BrowserRouter>
    );
}

export default Link;

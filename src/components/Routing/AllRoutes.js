import React from 'react';
import {Route} from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import WebDev from "../pages/WebDev";
import AutoConsult from "../pages/AutoConsult";
import Contact from "../pages/Contact";


function AllSiteRoutes(){
    return (
       
            <Route>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/web-development" component={WebDev} />
                <Route path="/automation-consulting" component={AutoConsult} />
                <Route path="/Contact" component={Contact} />
            </Route>
     
    )
}

export default AllSiteRoutes;


import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from '../src/pages/Projects';
import Contact from '../src/pages/Contact';



export default function App() {
    return(
       <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route  path="/about" component={About} />
            <Route  path="/projects" component={Projects} />
            <Route  path="/contact" component={Contact} />
       </BrowserRouter>
    )
}
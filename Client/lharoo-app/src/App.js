import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Product from '../src/components/product';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/not-found';
function App()
{ 
      return (<div className="App">
            <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/product" component={Product}/>
                  <Route path="/about" component={About}/>
                  <Redirect from="/" exact to="/home" />
                  <Redirect to="/not-found" component={<NotFound />}/>
            </Switch>
      </div>
);

}
  
export default App;

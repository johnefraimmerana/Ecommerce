import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Product from "../src/components/product";
import Home from "./components/home";
import About from "./components/about";
import NotFound from "./components/not-found";
import CheckOut from "./components/checkout/checkout";
import Profile from "./components/profile_component/profile";
import Navigation from "./components/navigation";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/isLoading";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/checkout" component={CheckOut} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

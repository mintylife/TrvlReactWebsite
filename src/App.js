import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.component";
import Home from "./components/pages/Home.page.jsx";
import Services from "./components/pages/Services.page";
import SignUp from "./components/pages/SignUp.page";
import Products from "./components/pages/Products.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

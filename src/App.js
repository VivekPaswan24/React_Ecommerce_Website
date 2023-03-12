import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MainNaviGation from "./components/Header/MainNaviGation";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import StorePage from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <header>
        <MainNaviGation />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/store" />
          </Route>
          <Route path="/store" exact>
            <StorePage />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path="/store/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

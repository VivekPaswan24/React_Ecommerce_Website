import React, { useContext } from "react";
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
import AuthContext from "./components/store/auth-context";

function App() {

  const authctx=useContext(AuthContext);
  return (
    <div>
      <header>
        <MainNaviGation />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            {authctx.isLoggedIn && <Redirect to="/store" />}
            {!authctx.isLoggedIn && <Redirect to='/login'/>}
          </Route>
          <Route path="/store" exact>
            {authctx.isLoggedIn && <StorePage />}
            {!authctx.isLoggedIn && <Redirect to='/login'/>}
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

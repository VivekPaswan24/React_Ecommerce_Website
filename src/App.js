import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MainNaviGation from "./components/Header/MainNaviGation";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import StorePage from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";

function App() {
  return <div>
    <header>
      <MainNaviGation/>
    </header>
    <main>
      <Route path='/store' >
        <StorePage/>
      </Route>
      <Route path='/aboutUs' >
        <AboutUs/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/contactUs'>
        <ContactUs/>
      </Route>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
}

export default App;

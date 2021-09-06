import React from 'react'
//import pages
import AboutUs from './pages/AboutUs'
import ContactUs from "./pages/ContactUs"
import OurWork from "./pages/OurWork"
import MovieDetail from './pages/MovieDetail';
//import styles
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
//import routing
import {Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>

        <Route path="/" exact>
          <AboutUs/>
        </Route>

        <Route path="/work" exact>
          <OurWork/>
        </Route>

        <Route path="/work/:id">
          <MovieDetail/>
        </Route>

        <Route path="/contact">
          <ContactUs/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

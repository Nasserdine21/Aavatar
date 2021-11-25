import React from 'react';
import './all.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import{
  Home,
  About,
  Personne,
  Error,
  Faq
} from './pages'

function App() {
  return (
        <Router>
          <NavBar />
          <SideBar />
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/about'>
              <About />
            </Route>
            
            <Route path='/personne'>
              <Personne />
            </Route>

            <Route path='/faq'>
              <Faq />
            </Route>

            <Route exact path='*'>
              <Error />
            </Route>

          </Switch>
          <Footer />
        </Router>
  );
}

export default App;

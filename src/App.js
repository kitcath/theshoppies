import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import Landing from './components/Landing';
import Search from './components/Search';
import {GlobalProvider} from './context/globalState';
import { NomineePage } from './page/NomineePage';


function App() {
  return (
    <GlobalProvider>

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/nominations">
          <NomineePage />
        </Route>

        <Route path="/browse">
          <Search />
        </Route>
      </Switch>
    </Router>

  </GlobalProvider>
  );
}

export default App;

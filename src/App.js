import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/character/:characterId'>
          <CharacterDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

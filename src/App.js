import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { wrapHistory } from 'oaf-react-router'

import './App.css';

import RecipesContextProvider from './contexts/RecipesContext';
import IngredientsContextProvider from './contexts/IngredientsContext';
import Home from './components/pages/Home/Home';
import Ingredients from './components/pages/Ingredients/Ingredients';
import Saved from './components/pages/Saved/Saved';
import Profile from './components/pages/Profile/Profile';
import Login from './components/pages/Login/Login';
import Recipe from './components/pages/Recipe/Recipe';

const history = createBrowserHistory();
wrapHistory(history);

function App() {
  return (
    <Router history={history}>
      <RecipesContextProvider>
        <IngredientsContextProvider>
          <div className="App">
            <Route exact path='/' component={Login}/>
            <Route path='/ingredients' component={Ingredients}/>
            <Route path='/saved' component={Saved}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/home' component={Home}/>
            <Route path='/recipe/:recipeId/' component={Recipe}/>
          </div>
        </IngredientsContextProvider>
      </RecipesContextProvider>
    </Router>
  );
}

export default App;

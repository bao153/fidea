import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Home from './components/pages/Home/Home';
import Ingredients from './components/pages/Ingredients/Ingredients';
import Saved from './components/pages/Saved/Saved';
import Profile from './components/pages/Profile/Profile';
import Login from './components/pages/Login/Login';
import Recipe from './components/pages/Recipe/Recipe';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login}/>
      <Route path='/ingredients' component={Ingredients}/>
      <Route path='/saved' component={Saved}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/home' component={Home}/>
      <Route path='/recipe/:recipeId/' component={Recipe}/>
    </div>
  );
}

export default App;

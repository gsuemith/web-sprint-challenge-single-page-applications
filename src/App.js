import React from "react";
import { BrowserRouter as Router,
  Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import Pizza from './routes/Pizza'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        
        <Route path='/pizza'>
          <Pizza/>
        </Route>

        <Route path='/' component={Home}/>

      </Switch>
    </Router>
  );
};
export default App;

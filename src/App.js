import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import './App.css'

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
    </>
  );
};
export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NewsProvider } from './context/NewsContext';

function App() {
  return (
    <Router>
      <NewsProvider>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/news/:catagory/:title" component={Home} />
      </NewsProvider>
    </Router>
  );
}

export default App;

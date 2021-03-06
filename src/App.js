import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NewsProvider } from './context/NewsContext';
import NewsDetail from './component/NewsDetail';

function App() {
  return (
    <Router>
      <NewsProvider>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/news/:catagory/:title" component={NewsDetail} />
      </NewsProvider>
    </Router>
  );
}

export default App;

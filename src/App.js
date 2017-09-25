import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import Create from './components/post-detail/DetailPage'
import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={()=>(
          <HomePage/>
        )}/>
        <Route path="/detail" component={()=>(
          <Create/>
        )}/>
        <Route path="/category"/>
        <Route path="/edit"/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

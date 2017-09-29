import React, { Component } from 'react';
import {votePost } from '../actions'

import { Route, BrowserRouter } from 'react-router-dom'
import HomePage from './home/HomePage'
import Create from './post-detail/DetailPage'
import '../App.css';

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

export default App

//mapStateToProps: recieve current store, current props and what it return will be avaliable to the component as props
//allow us to specify which data from the store you want paased to your react component
//Takes as arguments:  state and optional ownprops
//returns a object


//mapDispatchToProps: allows you to wrap actions creator inside of dispatch.


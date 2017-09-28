import React, { Component } from 'react';
import { connect } from 'react-redux'
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

//debo saber que hace esto
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

import React, { Component } from 'react';
import {votePost } from '../actions'

import { Route, Switch } from 'react-router-dom'
import HomePage from './home/HomePage'
import DetailPage from './post-detail/DetailPage'
import CategoryPage from './category/CategoryPage'


class App extends Component {
  render() {
    return (
    <Switch>
        <Route exact path="/" component={()=>(
          <HomePage/>
        )}/>
        <Route path="/detail" component={()=>(
          <DetailPage/>
        )}/>
        <Route path="/category" componet={()=>(
          <CategoryPage/>
        )}/>
        <Route path="/edit"/>
    </Switch>
    );
  }
}

export default App

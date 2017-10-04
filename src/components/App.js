import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'
import HomePage from './home/HomePage'
import DetailPage from './post-detail/DetailPage'
import CategoryPage from './category/CategoryPage'


class App extends Component {
  render() {
    return (
      <div className="col-lg-10">
        <Switch>
          <Route exact path="/" render={()=>(
            <HomePage/>
          )}/>
          <Route path="/detail" render={()=>(
            <DetailPage/>
          )}/>
          <Route path="/category" render={()=>(
            <CategoryPage/>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App

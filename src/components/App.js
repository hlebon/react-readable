import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'
import HomePage from './home/HomePage'
import DetailPage from './post-detail/DetailPage'
import CategoryPage from './category/CategoryPage'
import PostList from './common/PostList'


class App extends Component {
  render() {
    return (
      <div className="col-lg-10">
          <Route exact path="/" render={()=>(
            <HomePage />
          )}/>
          <Route exact path="/:category/:post_id" render={()=>(
            <DetailPage/>
          )}/>
          <Route exact path="/category/:category" render={(props)=>(
            <HomePage category={props.match.params.category}/>
          )}/>
      </div>
    );
  }
}

export default App

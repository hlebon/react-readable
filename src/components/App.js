import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'
import HomePage from './home/HomePage'
import DetailPage from './post-detail/DetailPage'
import CategoryPage from './category/CategoryPage'
import PostList from './common/PostList'
import CreatePage from './create-edit/CreatePage'


class App extends Component {
  render() {
    return (
      <div className="container">
          <Route exact path="/" render={()=>(
            <HomePage />
          )}/>
          <Route exact path="/:category/:post_id" render={()=>(
            <DetailPage/>
          )}/>
          <Route exact path="/category/:category" render={(props)=>(
            <HomePage category={props.match.params.category}/>
          )}/>
          <Route exact path="/create" render={()=>(
            <CreatePage />
          )}/>
      </div>
    );
  }
}

export default App

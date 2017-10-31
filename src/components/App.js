import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import DetailPage from './post-detail/DetailPage'
import CreatePage from './create-edit/CreatePage'


class App extends Component {
  render() {
    return (
        <div>
            <Route exact path="/" render={() => (
              <HomePage/>
            )} />
            <Route exact path="/:category/:post_id" render={(props)=>(
              <DetailPage postId={props.match.params.post_id}/>
            )}/>
            <Route exact path="/:category"  render={(props)=>(
              <HomePage category={props.match.params.category}/>
            )}/>
            <Route exact path="/create" render={() => (
              <CreatePage/>
            )}/>
        </div>
    )
  }
}

export default App
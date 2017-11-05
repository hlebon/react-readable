import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeView from './home/HomeView'
import DetailPage from './post-detail/DetailPage'
import CreatePage from './create-edit/CreatePage'
import EditPost from './create-edit/EditPost'


class App extends Component {
  render() {
    return (
        <div>
            <Route exact path="/" render={() => (
              <HomeView/>
            )} />

            <Route exact path="/:category/:post_id" render={(props)=>(
              <DetailPage postId={props.match.params.post_id}/>
            )}/>

            <Route exact path="/:category"  render={(props)=>(
              <HomeView category={props.match.params.category}/>
            )}/>

            <Route exact path="/create" render={() => (
              <CreatePage/>
            )}/>

            <Route exact path="/on/edit/:post_id" render={(props)=>(
              <EditPost postId={props.match.params.post_id}/>
            )}/>
        </div>
    )
  }
}

export default App
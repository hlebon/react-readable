import React from 'react'
import PostList from '../common/PostList'
import NavControl from '../common/NavControl'

class HomePage extends React.Component{
    render(){
        return (
            <div className="d-flex justify-content-between">
                <NavControl/>
                <PostList/>
            </div>)

    }
}


export default HomePage

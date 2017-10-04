import React from 'react'
import * as ContactsAPI from "./components/utils/ReadableAPI";
import { connect } from 'react-redux'
import { requestPost, requestCategories } from './actions'
import Header from './components/common/Header'
import Categories from './components/common/Categories'
import App from './components/App'

class MainApp extends React.Component{

    componentDidMount(){
        ContactsAPI.getPosts().then( (post) => {
            this.props.callGetPost(post)
        });

        ContactsAPI.getCategories().then( (data) => {
            this.props.callGetCategories(data.categories);
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <App/>
                        <Categories/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    console.log(state)
    return { 
        posts: state.postItems,
        categories: state.categories
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        callGetPost: (data) => dispatch((requestPost(data))),
        callGetCategories: (data) => dispatch((requestCategories(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
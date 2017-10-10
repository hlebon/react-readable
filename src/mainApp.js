import React from 'react'
import { connect } from 'react-redux'
import { requestPost, requestCategories } from './actions'
import Header from './components/common/Header'
import Categories from './components/common/Categories'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

class MainApp extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Header/>
                <br/>
                <div>
                    <App/>
                </div>
            </div>
            </BrowserRouter>
        )
    }
}

export default MainApp
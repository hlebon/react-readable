import React from 'react'
import Header from './components/common/Header'
import Categories from './components/common/Categories'
import NavControl from './components/common/NavControl'
//import PostList from './components/home/PostList'
import App from './components/App'

const MainApp = () => (
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

export default MainApp
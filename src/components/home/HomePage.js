import React from 'react'
import Categories from './Categories'
import PostList from './PostList'

class HomePage extends React.Component{
    render(){
        return (
            <div className="container">
                <h1 className="text text-primary">Pagina de Inicio (default)</h1>
                <div className="d-flex justify-content-center">
                    <PostList/>
                    <Categories/>
                </div>
            </div>
        )

    }
}

export default HomePage;
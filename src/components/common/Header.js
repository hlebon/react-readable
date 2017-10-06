import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return (
            <div className="bg-light">
                <nav className="container navbar navbar-light">
                    <Link to="/" className="navbar-brand">React Blog</Link>
                    <div className="my-2 my-lg-0">
                        <Link to="/create" className="btn btn-outline-success my-2 my-sm-0">Create</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
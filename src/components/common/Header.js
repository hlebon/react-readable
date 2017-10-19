import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return (
            <div className="bg-primary">
                <nav className="container navbar navbar-dark">
                    <Link to="/" className="navbar-brand">React Blog</Link>
                </nav>
            </div>
        )
    }
}

export default Header
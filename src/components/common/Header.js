import React, { Component } from 'react';

class Header extends Component{
    render(){
        return (
            <div className="bg-dark">
                <nav className="container navbar navbar-dark">
                    <a className="navbar-brand" href="#">React Blog</a>
                </nav>
            </div>
        )
    }
}

export default Header
import React, { Component } from 'react'

class NavControl extends Component{
    render(){
        return(
            <div className="container">
                <div className="row bg-light">
                    <ul className="p-2 nav justify-content-end">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Active</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Active</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Active</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavControl
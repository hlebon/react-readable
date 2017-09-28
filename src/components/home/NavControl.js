import React, { Component } from 'react'

class NavControl extends Component{
    render(){
        return(
            <div className="col-lg-2">
                <div className="bg-light">
                    <h3>Control</h3>
                    <ul className="p-2 nav flex-column">
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
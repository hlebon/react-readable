import React, { Component } from 'react'

class NavControl extends Component{
    render(){
        return(
            <div className="col-lg-2">
                <div className="bg-light">
                    <h3>Control</h3>
                    <ul className="p-2 nav flex-column">
                        <li className="nav-item">
                            <button type="button" className="btn btn-secondary">Active</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-secondary">Active</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-secondary">Active</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavControl
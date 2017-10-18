import React, { Component } from 'react'

class NavControl extends Component{
    state = {
        filterBy: "voteScore"
    }

    handleChange = (event) => {
        this.setState({
            filterBy: event.target.value
        })
        this.props.onChangeSort(this.state.filterBy)
    }

    render(){
        return(
            <div className="raw bg-light d-flex justify-content-center">
                <div className="col">
                    <h3>Control</h3>
                    <div>
                        <div className="form-group">
                            <label>Order By</label>
                            <select value={this.state.filterBy} className="custom-select" onChange={ ( event ) => this.handleChange(event) } >
                                <option>Order by...</option>
                                <option value="voteScore">More votes</option>
                                <option value="-voteScore">Less votes</option>
                                <option value="timestamp">Newest</option>
                                <option value="-timestamp">Oldest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavControl
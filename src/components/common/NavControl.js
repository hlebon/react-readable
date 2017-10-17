import React, { Component } from 'react'

class NavControl extends Component{
    state = {
        filterBy: "-voteScore"
    }

    handleChange = (event, type) => {
        this.setState({
            filterBy: event.target.value
        })

        if(type === "voteScore"){
            this.setState({vote: event.target.value})
        }
        else if(type === "timestamp"){
            this.handleSort(event.target.value, type);
        }

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
                            <select value={this.state.vote} className="custom-select" onChange={ ( event ) => this.handleChange(event) } >
                                <option value="none">Order by...</option>
                                <option value="-voteScore">More votes</option>
                                <option value="voteScore">Less votes</option>
                                <option value="-timestamp">Newest</option>
                                <option value="timestamp">Oldest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavControl
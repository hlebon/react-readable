import React, { Component } from 'react'

class NavControl extends Component{
    state = {
        date: "",
        vote: "-",
        filterBy: "-voteScore"
    }

    handleSort = (val, type) => {
        if(val=="+"){
            val = ""
        }

        this.setState({
            filterBy: `${val}${type}`
        })
    }

    handleChange = (event, type) => {
        console.log(this.props)
        if(type === "voteScore"){
            this.setState({vote: event.target.value})
            this.handleSort(event.target.value, type);
        }
        else if(type === "timestamp"){
            this.setState({date: event.target.value})
            this.handleSort(event.target.value, type);
        }
    }

    render(){
        return(
            <div className="raw bg-light d-flex justify-content-center">
                <div className="col">
                    <h3>Control</h3>
                    <div>
                        <div className="form-group">
                            <label>By Votes</label>
                            <select value={this.state.vote} className="custom-select" onChange={ ( event ) => this.handleChange(event, 'voteScore') } >
                                <option value="none">Order by...</option>
                                <option value="-">More votes</option>
                                <option value="+">Less votes</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>By Date</label>
                            <select value={this.state.date} className="custom-select" onChange={ ( event ) => this.handleChange(event, 'timestamp') } >
                                <option value="none">Order by...</option>
                                <option value="-">Newest</option>
                                <option value="+">Oldest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavControl
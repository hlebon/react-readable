import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterPostsByValue } from '../../actions'

class NavControl extends Component{
    state = {
        score:{
            id: 0,
            value: ""
        },
        date:{
           id: 1,
            value: ""
        }
    }

    componentDidMount(){
        for(const val of this.props.filter){
            console.log(val);
            if(val.id === 0){
                this.setState( prevState => ({
                    score: { 
                        ...prevState.score,
                        value: val.value
                    }
                }))
            }else if(val.id === 1){
                this.setState( prevState => ({
                    date: { 
                        ...prevState.score,
                        value: val.value
                    }
                }))
            }
        }
    }

    handleChange = (id, event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState(prevState => ({
            [name]: {
                ...prevState.score,
                value: value
            }
        }))
        console.log({
            id: id,
            value: value
        })
        this.props.addFilter({
            id: id,
            value: value
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className="raw bg-light d-flex justify-content-center">
                <div className="col component">
                    <h5 className="pt-2">Order by</h5>
                    <div>
                        <div className="form-group">
                            <label>Score</label>
                            <select name="score" value={this.state.score.value} className="custom-select" onChange={ ( event ) => this.handleChange(0, event) } >
                                <option value="">select...</option>
                                <option value="-voteScore">More votes</option>
                                <option value="voteScore">Less votes</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Date</label>
                            <select name="date" value={this.state.date.value} className="custom-select" onChange={ ( event ) => this.handleChange(1, event) } >
                                <option value="">select...</option>
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

function mapStateToProps(state){
    return {
        filter: state.init.filterBy
    }
}

function mapDispatchToProps(dispatch){
    return {
        addFilter : (filter) => dispatch(filterPostsByValue(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavControl)
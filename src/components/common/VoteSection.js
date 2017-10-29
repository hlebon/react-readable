import React from 'react'

class VoteSection extends React.Component{
    handleVote = (value, score) => {
        console.log(this.props)
        this.props.changeVote(value, score)
    }

    render(){
        const { value, position } = this.props;
        return (
        <div className={`list-inline-item list-inline ${position}`}>
            <div className="mr-2 list-inline-item font-italic">Score: <span className="badge badge-info">{value.voteScore}</span></div>
            <button onClick={() => this.handleVote(value, "upVote")} className="upvote btn btn-outline-secondary btn-lg list-inline-item"></button>
            <button onClick={() => this.handleVote(value, "downVote")} className="downvote btn btn-outline-secondary btn-lg list-inline-item"></button>
        </div>
        )
    }
}

export default VoteSection
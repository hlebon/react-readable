//#region import
import React from 'react'
import { connect } from 'react-redux'
import { requestPosts, requestCategories, changeVote } from '../../actions'
import PostList from '../common/PostList'
import CreatePage from '../create-edit/CreatePage'
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import * as ReadableAPI from '../utils/ReadableAPI'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

//#endregion import

//#region class definition
class HomePage extends React.Component {
    state = {
        filterBy: '-voteScore',
        modalOpen: false
    }

    closeModal = () => this.setState(() => ({ modalOpen: false }))
    openModal = () => this.setState(() => ({ modalOpen: true }))
    
    render(){
        const { category, posts } = this.props
        let postList
        if(typeof(category) !== 'undefined'){
            const match = new RegExp(escapeRegExp(category), 'i');
            postList = posts.filter((p) => match.test(p.category))
        }else{
            postList = posts;
        }

        if(postList) {
            postList.sort(sortBy(`${this.state.filterBy}`));
        }
        
        const { modalOpen } = this.state

        return (
            
            <div className="d-flex flex-column">
                <div className="p-2">
                    <button onClick={this.openModal} className="btn btn-create">
                    </button>
                </div>
                <div className="p-2">
                    <PostList category={category}/>
                </div>
                <Modal 
                    className='rmodal'
                    overlayClassName='overlay'
                    isOpen={modalOpen}
                    contentLabel='Modal'
                >
                    <CreatePage/>
                </Modal>
            </div>
        )
    }
}

//#endregion class definition

//#region redux-to-props
function mapStateToProps ( state ) {
    return { 
        posts: state.init.postItems,
        categories: state.categories
    }
}

//#endregion redux-to-props

export default connect(mapStateToProps)(HomePage)

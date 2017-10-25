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
        filterBy: '-voteScore'
    }
    
    render(){
        console.log(this.props);
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
        
        
        return (
            <div className="d-flex flex-column">
                <div className="p-2">
                    <Link to="/create" className="btn-create">
                    </Link>
                </div>
                <div className="p-2">
                    <PostList category={category}/>
                </div>
                <Modal 
                    className="modal"
                    isOpen={true}
                    contentLabel='Modal'
                >
                    <h1>Hola modal</h1>
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

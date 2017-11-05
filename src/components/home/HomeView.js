import React from 'react'
import { connect } from 'react-redux'
import { filterPostsByCategory } from '../../actions'
import PostList from './PostList'
import CreatePage from '../create-edit/CreatePage'

import Modal from 'react-modal'


class HomeView extends React.Component {
    state = {
        modalOpen: false
    }

    componentDidMount(){
        const category = (this.props.category != undefined) ? this.props : ""
        this.props.setCategory(category)
    }

    closeModal = () => this.setState(() => ({ modalOpen: false }))
    openModal = () => this.setState(() => ({ modalOpen: true }))
    
    render(){
        const { modalOpen } = this.state
        return (
            <div className="d-flex flex-column">
                <div className="p-2">
                    <button onClick={this.openModal} className="btn btn-create">
                    </button>
                </div>
                <div className="p-2">
                    <PostList category={this.props.category}/>
                </div>
                <Modal 
                    className='rmodal'
                    overlayClassName='overlay'
                    isOpen={modalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel='Modal'
                >
                    <CreatePage closeModal={this.closeModal}/>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        setCategory: (category) => dispatch(filterPostsByCategory(category))
    }
}

export default connect(null, mapDispatchToProps)(HomeView)

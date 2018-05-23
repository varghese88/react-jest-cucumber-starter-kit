import { connect } from 'react-redux'
import Home from './lookup.component';
import {displayCartPage, getPostData } from './lookup.actions';

const mapStateToProps = (state) =>{
    return {
        posts: state.homeReducer.posts
    }
}

export default connect(mapStateToProps,{ displayCartPage, getPostData })(Home);
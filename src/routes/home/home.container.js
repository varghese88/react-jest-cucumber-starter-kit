import { connect } from 'react-redux'
import Home from './home.component';
import {displayCartPage } from './home.actions';

const mapStateToProps = (state) =>{
    return {
        posts: state.homeData.posts
    }
}

export default connect(mapStateToProps,{ displayCartPage })(Home);
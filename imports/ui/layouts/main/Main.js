import React from 'react';
import { connect } from 'react-redux';
import { element, oneOfType, arrayOf, object } from 'prop-types';
import NavigationHeaderBar from '../../components/NavigationHeaderBar'
import MainFeaturedStory from '../../components/container/MainFeaturedStory'
import FeaturedPosts from "../../components/container/FeaturedPosts"
import {callAddBlog} from "../../../api/redux/async-actions";

const Main = (props) => {
    const { children, blogs} = props
    return (
        <React.Fragment>
            {/*<NavigationHeaderBar />*/}
            <div className="container">
                <MainFeaturedStory />
                <section>
                    <FeaturedPosts {...props}/>
                    {children}
                </section>
            </div>
        </React.Fragment>
    )
}

Main.propTypes = {
    children: oneOfType([arrayOf(element), object]).isRequired,
};

const mapStateToProps = state => {
    return ({ posts: state.blogs })
}

const mapDispatchToProps = dispatch => ({
    dispatchCallAddBlog: data => dispatch(callAddBlog(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

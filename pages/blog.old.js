import Fetch from 'isomorphic-fetch';
import { Component } from 'react';
import propTypes from 'prop-types';
import DefaultLayout from '../components/Layouts/Default/Default';
import PostList from '../components/PostList/PostList';


class BlogPage extends Component {

    static async getInitialProps() {
        
        const posts = await fetch('http://localhost:3002/blog').then(data => data.json());

        return { posts };

    }

    render() {
        return ( 
            <DefaultLayout>
                <PostList posts={this.props.posts}/>
            </DefaultLayout>
        )
    }
}

BlogPage.propTypes = {

    posts: propTypes.array.isRequired

}

export default BlogPage;
import Fetch from 'isomorphic-fetch';
import {withRouter} from 'next/router';
import { Component } from 'react';
import ErrorPage from 'next/error'
import DefaultLayout from '../../components/Layouts/Default/Default';
import Post from '../../components/Post/Post';

class PostPage extends Component {
    static async getInitialProps(req) {
        if(req.query.post && !isNaN(Number(req.query.post)) ) {
            const post = await fetch(`http://localhost:3002/blog/${req.query.post}`).then(data => data.json());
            return { post };
        }
        else {
            const post = {};
            return { post };
        }
    
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        console.log(this.props);
        if( this.props.post !== null )
            return (
                <DefaultLayout>
                    <Post { ...this.props.post } />
                </DefaultLayout>
            )
        // else return <ErrorPage statusCode={ 404 } />
    };
}
export default PostPage;
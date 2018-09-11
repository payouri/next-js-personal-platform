import fetch from 'isomorphic-fetch';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import Layout from '../components/Layouts/Default/Default';
import Columns from '../components/Layouts/Columns/Columns';
import Section from '../components/Layouts/Section/Section';
import Container from '../components/Layouts/Container/Container';
import Featured from '../components/PostList/FeaturedArea';
import PostList from '../components/PostList/PostList';

class BlogPage extends Component {
    
    static async getInitialProps() {
        
        let posts = await fetch('http://localhost:3002/blog').then(data => data.json())
        .catch(() => posts = []);
        return { posts };

    }

    render() {
        const posts = this.props.posts;
        return (
            <Layout>
                <Featured posts={posts.map(post => post.status === 2)} />
                <Section>
                    <Container>
                        <Columns sizes={[6]}>
                            <PostList posts={posts} />
                        </Columns>
                    </Container>
                </Section>
            </Layout>
        )
    }

}

BlogPage.propTypes = {

    posts: propTypes.array.isRequired

}

export default BlogPage;
import PostPreview from './PostPreview2';

const PostList = props => {

    return (
        <ul>
            { props.posts.map( post => (
                <li key={post.id}>
                    <PostPreview {...post}/>
                </li>
            ))}
        </ul>
    );
};

PostList.defaultProps = {
    posts: []
}

export default PostList;
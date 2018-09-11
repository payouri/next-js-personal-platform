import ReadMore from './ReadMore';

const PostPreview = props => (

    <section className="articles">
        <div className="column is-8 is-offset-2">
            <div className="card article">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content has-text-centered">
                            <p className="title article-title">{props.title}</p>
                            <div className="tags has-addons level-item">
                                <span className="tag is-rounded">{props.createdAt}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-image">
                        <figure className="image is-2by1">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="content article-body">
                        <p>{props.smallDesc}</p>
                        {props.body}
                    </div>
                </div>
                <div className="card-foot">
                    <ReadMore alias={`/blog/post/${props.title.split(' ').join('-').toLowerCase()}`} href={ `/blog/post?post=${props.id}` }/>
                </div>
            </div>
        </div>
    </section>
    
);

export default PostPreview;


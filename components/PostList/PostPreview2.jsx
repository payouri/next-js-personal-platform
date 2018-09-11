import readableDate from '../../functions/readableData';
import ReadMore from './ReadMore';


const PostPreview = props => {

    return (

        <div className="card is-shadowless">
            <div className="card-head">
                <span className='tag is-primary'>{props.category ? props.category : 'Non défini'}</span>
                <time className='is-size-6'>{props.createdAt ? readableDate(props.createdAt) : 'Non défini'}</time>
            </div>
            <div className="card-content">
                <div className="title">
                    {props.title ? props.title : 'Non défini'} 
                </div>
                <div className="subtitle">
                    {props.smallDesc ? props.smallDesc : 'Non défini'}
                </div>
            </div>
            <div className="card-footer">
                <ReadMore classnames='card-footer-item' alias='' href={`/blog/post?post=${props.id}`} />
            </div>
        </div>
    );

};

export default PostPreview;
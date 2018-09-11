import escape from 'html-escape';

import './WysiwygView.css'

const View = props => {

    return (

        <div className='wysiwyg-wrapper'>
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <button onClick={props.closeCallback} className='button is-outlined is-info is-small fas fa-arrow-left' id='close_preview'></button>
                        <div className="title is-3">Prévisualisation</div>
                    </div>
                </div>
            </div>
            <div className="wysiwyg content has-background-white" dangerouslySetInnerHTML={{__html: props.content}}>
            
            </div>

        </div>
    );

}

export default View;
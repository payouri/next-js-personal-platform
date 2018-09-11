import {Component} from 'react';
import TextArea from '../TextArea/TextArea';
import EditableArea from '../EditableContentArea/EditableArea';
import Wysiwyg from '../WysiwygView/WysiwygView';
import IconBar from '../IconBar/IconBar';

import './PostEditor.css';

class PostEditor extends Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            
            body: this.props.body || '',
            previewing: false
            
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
      
    moveCursorToEnd(el) {
        if (typeof el.selectionStart == "number") {
            el.selectionStart = el.selectionEnd = el.value.length;
        } else if (typeof el.createTextRange != "undefined") {
            el.focus();
            var range = el.createTextRange();
            range.collapse(false);
            range.select();
        }
    }

    handleInput(e) {

        console.log(e.target.innerText || e.target.value);
        
        if(e.target.nodeName === 'DIV') {
            this.setState({body: e.target.innerHTML});
        } else {
            this.setState({body: e.target.value});
        }
        
        this.moveCursorToEnd(e.target);

    }

    handleToolClick(e) {

        e.preventDefault();
        const button = e.target,
            action = button.getAttribute('data-action'),
            postContentArea = document.querySelector('#post_content.textarea');
        
        const formatActions = ['alignment', 'bold', 'italic', 'underline', 'heading', 'paragraph'];

        if( formatActions.indexOf(action) !== -1 ) {
            
            const s = getSelection();

            const sControl = s.baseNode.control;
            
            let selection = {};
            
            if( sControl && sControl === postContentArea && s.type === 'Range') {
            
                selection = {
                    text: s.toString()
                };

            }

            console.log(selection);

        }

        console.log(getSelection());
    }

    handleSubmit(e) {

        e.preventDefault();
        const button = e.target;
        switch(button.getAttribute('id')) {
            case('close_preview'):

                this.setState({previewing: false});
                break;
            case('preview_post'):

                this.setState({previewing: true});
                break;
            default:
                console.log(button);
                break;
        }

    }
    
    render() {

        const {} = this.props;

        return (

            <>
                <div id="createPost" className={this.state.previewing? 'previewing' : ''}>
                    <form action="" className="form post--editor--form">
                        <h1 className="title">Ecrire un Nouveau Post</h1>
                        <div className='field'>
                            <label htmlFor='post_title' className='label'>Titre de l'article
                            <input id='post_title' type='text' className='input' value={this.props.title?this.props.title:''}/></label>
                        </div>
                        <div className='field'>
                            <label htmlFor='post_desc' className='label'>Premier texte de l'article
                            <input id='post_desc' type='text' className='input' value={this.props.smallDesc?this.props.smallDesc:''}/></label>
                        </div>
                        <div className='field'>
                            <label htmlFor='post_cover' className='label'>Couverture de l'article
                            <input id='post_cover' type='text' className='input' value={this.props.cover?this.props.cover:''}/></label>
                        </div>
                        <div className='field'>
                            <label htmlFor='post_content' className='label'>Corps de l'article
                            <IconBar onClick={this.handleToolClick.bind(this)}/>
                            <TextArea name='post_content' handleInput={this.handleInput.bind(this)} value={this.props.body || this.state.body}/></label>
                            <EditableArea handleInput={this.handleInput.bind(this)} value={this.props.body || this.state.body}/>
                        </div>
                        <div className="field">
                            <label htmlFor="post_status" className="label">Status du Post
                                <div className="control">
                                    <div className="select">
                                        <select id="post_status">
                                            <option value="0">Brouillon</option>
                                            <option value="1">Publié</option>
                                            <option value="2">En Avant</option>
                                        </select>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button" onClick={this.handleSubmit} type="submit" id="send_post">Enregistrer</button>
                            </div>
                            <div className="control">
                                <button className="button" onClick={this.handleSubmit} id="preview_post">Prévisualiser</button>
                            </div>
                        </div>
                    </form>
                    <Wysiwyg closeCallback={this.handleSubmit} content={this.state.body}/>
                </div>
            </>
        );
    }

};

export default PostEditor;
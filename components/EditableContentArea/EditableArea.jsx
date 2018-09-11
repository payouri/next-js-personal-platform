import {Component} from 'react';

import './EditableArea.css';

class EditableArea extends Component {
  
    handleInput(e) {

        this.setState({value: e.target.innerHTML});

        this.moveCursorToEnd(e.target);
    }

    constructor(props) {
        super(props);

        this.state = {

            value: this.props.value || ''

        }
    }
    
    render() {

        return (

            <div id={this.props.name} name={this.props.name} className='wysiwyg-editor content textarea' contentEditable={true} onInput={this.props.handleInput} dangerouslySetInnerHTML={{__html: this.props.value}}>
            </div>

        );

    }

};

export default EditableArea;
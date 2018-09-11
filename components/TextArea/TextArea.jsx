import {Component} from 'react';

class TextArea extends Component {
    
    handleInput(e) {

        this.setState({value: e.target.value});

    }

    constructor(props) {
        super(props);

        this.state = {

            value: this.props.value || ''

        }
    }
    
    render() {

        return (

            <textarea id={this.props.name} name={this.props.name} className='textarea' onInput={this.props.handleInput} value={this.props.value}/>

        );

    }

};

export default TextArea;
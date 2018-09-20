import {Component} from 'react';

class Input extends Component { 

    constructor(props) {
        super(props);

        this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
            ? ' ' + this.props.classnames : '';
    }

    render() {
        return (

            <input 
                className={`input${this.classnames}`}
                id={this.props.id}
                name={this.props.name}
                onChange={this.props.onChange}
                onInput={this.props.onInput}
                placeholder={this.props.placeholder}
                required={this.props.required}
                style={this.props.style} 
                type={this.props.type}
            />

        )
    }
}

export default Input;
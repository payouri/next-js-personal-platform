import {Component} from 'react';

class Input extends Component { 

    constructor(props) {
        super(props);

        this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
            ? ' ' + this.props.classnames : '';
    }

    render() {
        const {} = this.props;
        return (

            <input 
                className={`input${this.classnames}`}
                id={id}
                name={name}
                onChange={onChange}
                onInput={onInput}
                placeholder={placeholder}
                required={required}
                style={style} 
                type={this.props.type}
            />

        )
    }
}

export default Input;
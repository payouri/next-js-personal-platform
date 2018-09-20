import {Component} from 'react';

class Button extends Component {

    constructor(props) {
        super(props);

        this.classnames = this.props.classnames ? ' '+this.props.classnames : ''
    }

    render() {
        
        return (
            <button onMouseOver={this.props.onMouseOver} onClick={this.props.onClick} className={`button${this.classnames}`}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;
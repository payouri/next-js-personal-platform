import {Component} from 'react';

class Label extends Component {
    constructor(props) {
        super(props);

        this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
            ? ' ' + this.props.classnames : '';
        this.props.isHorizontal ? this.classnames += ' is-horizontal' : '';
    }

    render() {
        return (
            <label className={`label${this.classnames}`} htmlFor={this.props.for}>
                {this.props.children}
            </label>
        )
    }

}

export default Label;
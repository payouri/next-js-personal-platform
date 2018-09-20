import {Component} from 'react';

class Label extends Component {
    constructor(props) {
        super(props);

        
        this.classnames = this.props.classnames ? ' ' + this.props.classnames : '';
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
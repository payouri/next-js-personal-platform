import {Component} from 'react';

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ''
        }
        this.onInput = this.onInput.bind(this);
        this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
            ? ' ' + this.props.classnames : '';
    }
    onInput(e) {
        const newValue = e.target.value
        this.setState({value: newValue});
    }
    render() {
        return(
            <textarea className={`textarea${this.classnames}`}
                name={this.props.name}
                onChange={this.props.onChange || this.onInput}
                onInput={this.props.onInput || this.onInput}
                value={this.props.value || this.state.value}
            >
            </textarea>
        )
    }
}

export default Textarea;
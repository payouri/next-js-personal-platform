import { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {

    static defaultProps = {
        options: []
    }
    
    constructor(props) {
        super(props);

        this.options = this.props.options.map((option, i) => (

            <option defaultValue={option.selected || false}
                key={i}
                value={option.value || i}
            >
                {option.label ? option.label : option.value}
            </option>

        ));
        this.classnames = this.props.classnames ? ' ' + this.props.classnames : '';
    }

    render() {
        return (
            <select onChange={this.props.onChange} onInput={this.props.onInput} name={this.props.name} className={`select${this.classnames}`}>
                {this.options}
            </select>
        )
    }

}
Select.propTypes = {
    options: PropTypes.array
}
export default Select;
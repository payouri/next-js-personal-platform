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
        this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
            ? ' ' + this.props.classnames : '';
    }

    render() {
        return (
            <div className={`select${this.classnames}`}>
                <select
                    id={this.props.id}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onInput={this.props.onInput}
                    >
                    {this.options}
                </select>
            </div>
        )
    }

}
Select.propTypes = {
    options: PropTypes.array
}
export default Select;
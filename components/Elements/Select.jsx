import { Component } from 'react';
import PropTypes from 'prop-types';


export const Option = props => (
    <option defaultValue={props.selected || false}
        value={props.value || i}
    >
        {props.label ? props.label : props.value}
    </option>
)

class Select extends Component {

    static Option = Option;

    static defaultProps = {
        options: []
    }
    
    constructor(props) {
        super(props);

        this.options = this.props.options.map((option, i) => (

            <Option key={i} {...option}/>

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
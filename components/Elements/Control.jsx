import {Component, cloneElement} from 'react';

class Control extends Component {

    constructor(props) {
        super(props);

        this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
            ? ' ' + this.props.classnames : '';

    }

    render() {
        let { children, inputs, isHorizontal } = this.props;
        inputs = Array.isArray(inputs) ? inputs : [inputs];
        children = Array.isArray(children) ? children : [...children, ...inputs];
        // children = cloneElement([...children, ...inputs], {isHorizontal});
        children.map( child => cloneElement(child, {isHorizontal} ));
        return (
            <div className={`control${this.classnames}`} >
                { children }
            </div>
        )
    }

}
export default Control;
import {Component, cloneElement} from 'react';

class Field extends Component {

        constructor(props) {
            super(props);

            this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
                ? ' ' + this.props.classnames : '';
            this.props.isHorizontal ? this.classnames += ' is-horizontal' : '';
            this.inputs = [...this.props.inputs].map(input => )
        }

        render() {
            // let {children, isHorizontal} = this.props;
            // children = cloneElement(children, {isHorizontal});
            return (
                <div className={`field${this.classnames}`} >
                    
                </div>
            )
        }

}
export default Field;
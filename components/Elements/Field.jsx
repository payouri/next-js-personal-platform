import {Component, cloneElement} from 'react';

const FieldHint = props => (
    <span className="field-hint">
        {props.children}
    </span>
)

export default FieldHint;

const FieldLabel = props => (
    <span className="field-label">
        {props.children}
    </span>
)

export default FieldLabel;


class Field extends Component {

        static FieldLabel = FieldLabel;
        static FieldHint = FieldHint;

        constructor(props) {
            super(props);

            this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
                ? ' ' + this.props.classnames : '';
            this.props.isHorizontal ? this.classnames += ' is-horizontal' : '';
            // this.inputs = [...this.props.inputs].map(input => )
            
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
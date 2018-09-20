import {Component} from 'react';

class Field extends Component {

        constructor(props) {
            super(props);

            this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
                ? ' ' + this.props.classnames : '';
        }

        render() {
            return (
                <div className={`field${this.classnames}`} >
                    {this.props.children}
                </div>
            )
        }

}
export default Field;
import {Component} from 'react';
import Button from './Button';
import Field from './Field';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fieldsValues: [this.props.fieldValues] || []
        }
        this.classnames = this.props.classnames && typeof this.props.classnames === 'string' 
            ? ' ' + this.props.classnames : '';
    }
    fields() {
        if(this.props.children.length > 1) {
            return this.props.children.map((child, i) => (
                <Field key={i}>
                    {child}
                </Field>
            )
        )
        }else {
            return (
                <Field>
                    {this.props.children}
                </Field>
            )
        }
    }
    render() {
        return (
            <form action={this.props.action}
                className={`${this.classnames}`}
                encType={this.props.enctype || 'application/x-www-form-urlencoded'}
                method={this.props.method || 'get'}
            >
                
                {this.fields()}
                <Button onClick={this.props.onSubmit} type='submit'>{this.props.cta || 'Envoyer'}</Button>

            </form>
        )
    }

}

export default Form;
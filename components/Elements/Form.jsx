import {Component} from 'react';
import Button from './Button';
import Field from './Field';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fieldsValues: [this.props.fieldValues] || []
        }
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
            <form action={this.props.action} method={this.props.method}>
                {this.fields()}

                <Button type='submit'>{this.props.cta || 'Envoyer'}</Button>
            </form>
        )
    }

}

export default Form;
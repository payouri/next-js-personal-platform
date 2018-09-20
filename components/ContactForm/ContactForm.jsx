import {Component} from 'react';
import Checkbox from '../Elements/Checkbox';
import Radio from '../Elements/Radio';
import Label from '../Elements/Label';
import Input from '../Elements/Input';
import File from '../Elements/InputFile';

import Select from '../Elements/Select';
import Form from '../Elements/Form';
import Control from '../Elements/Control';

import './ContactForm.css';

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fieldValues: {}
        }
        this.onInput = this.onInput.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInput(e) {

        const fieldName = e.target.getAttribute('name'),
            fieldValue = e.target.value;

        const newState = this.state.fieldValues
        newState[fieldName] = fieldValue;

        this.setState({
            fieldValues: newState
        })


    }
    onChange(e) {

        const fieldName = e.target.getAttribute('name'),
            fieldValue = e.target.value;

        const newState = this.state.fieldValues
        newState[fieldName] = fieldValue;

        this.setState({
            fieldValues: newState
        })

    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <>
                    <Label>My Input</Label>
                    <File classnames isBoxed hasName>
                        Votre CV
                    </File>
                </>
                <Control>
                    <Label>Nom:</Label>
                    <Input onInput={this.onInput} name='name' type='text' placeholder='Enter your full name'/>
                </Control>
                <Control>
                    <Label>Email</Label>
                    <Input onInput={this.onInput} name='email' type='email' placeholder='Enter your email'/>
                </Control>
                <Control>
                    <Label>Objet</Label>
                    <Select onChange={this.onChange} name='subject' options={[{value:'Chat'}, {value:'Chien', label: 'Dog', selected: true}]}/>
                </Control>
            </Form>
        )
    }
}

export default ContactForm;
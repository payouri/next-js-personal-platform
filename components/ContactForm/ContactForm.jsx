import {Component} from 'react';
import Checkbox from '../Elements/Checkbox';
import Radio from '../Elements/Radio';
import Label from '../Elements/Label';
import Input from '../Elements/Input';
import File from '../Elements/InputFile';

import Textarea from '../Elements/Textarea';
import Select from '../Elements/Select';
import Form from '../Elements/Form';
import Control from '../Elements/Control';

import './ContactForm.css';

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fieldValues: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
        this.subject = [
            {value:'Chat'},
            {value:'Chien', label: 'Dog', selected: true}
        ];
        this.onInput = this.onInput.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {

        const newState = this.state.fieldValues
        
        newState['subject'] = this.subject[0].value;

        console.log(newState);


        this.setState({
            fieldValues: newState
        })
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
            <Form onSubmit={this.onSubmit} isHorizontal>
                <>
                    <Label>My Input</Label>
                    <File classnames isBoxed hasName>
                        Votre CV
                    </File>
                </>
                <Control>
                    <Label>Nom:</Label>
                    <Input id='name'
                        name='name'
                        onInput={this.onInput}
                        placeholder='Enter your full name'
                        type='text' 
                    />
                </Control>
                <Control>
                    <Label>Email:</Label>
                    <Input id='email'
                        name='email'
                        onInput={this.onInput}
                        type='email'
                        placeholder='Enter your email'
                    />
                </Control>
                <Control>
                    <Label>Sujet:</Label>
                    <Select id='subject'
                        name='subject'
                        onChange={this.onChange} 
                        options={this.subject}
                    />
                </Control>
                <Control>
                    <Label>Votre Message:</Label>
                    <Textarea id='message'
                        name='message'
                        onCHange={this.onCHange}
                        onInput={this.onInput}
                        value={this.state.fieldValues.message}
                    ></Textarea>
                </Control>
            </Form>
        )
    }
}

export default ContactForm;
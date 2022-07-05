import React, { Component } from 'react';
import { Formik, Form, } from 'formik';
//import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Label, Input } from "./ContactForm.styled";

const initialValues = {
    name: '',
    number: ''
};

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    handleChange = e => {
     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };
    
    handleSubmit = e => {
    e.preventDefault();
        if (this.props.contactsName.map(el => el = el.name.toLowerCase()).includes(this.state.name.toLowerCase())) {
             alert(`${this.state.name} is already in contacts`)
        }
        else {
            this.props.onSubmit(this.state.name, this.state.number);
            
        }        
    };

    render() {
        const { name, number } = this.state;
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={this.handleSubmit}>
            <Form  onSubmit={this.handleSubmit}>
                <Label htmlFor='inputName'>Name</Label>
                <Input
            
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    value={name}
                    />
                    
                <Label  htmlFor='inputTel'>Number</Label>
                <Input
                    
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                    value={number}
                    />
                    
                <Button  type="submit" >Add Contact</Button>
                </Form>
                </Formik>
                )
    }
};
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
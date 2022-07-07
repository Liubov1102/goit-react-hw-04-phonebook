import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
//import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Label } from "./ContactForm.styled";

const Input = styled(Field)`
    border: 1px solid black;
    font: inherit;
    font-size: 16px;
    padding: 8px;
    border-radius: 4px;
    width: 360px;
    outline: 0;
`;

const initialValues = {
    name: '',
    number: ''
};
export class ContactForm extends Component {

    handleSubmit = (values, { resetForm }) => {
        if (this.props.contactsName.map(el => el = el.name.toLowerCase()).includes(values.name.toLowerCase())) {
            alert(`${values.name} is already in contacts`)
        }
        else {
            this.props.onSubmit(values);
            resetForm();
        }
  };
    render() {
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={this.handleSubmit}>
            <Form  >
                <Label htmlFor='inputName'>Name</Label>
                <Input           
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required                   
                />
                    
                <Label  htmlFor='inputTel'>Number</Label>
                <Input                 
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
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

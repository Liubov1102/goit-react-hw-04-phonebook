import React from 'react';
import { Formik, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Label , Input, ErrorText} from "./ContactForm.styled";

const validationSchema = Yup.object({
    name: Yup.string().max(16).required('Please, enter name.'),
    number: Yup.number().min(5).positive().required('Please, enter number.'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
  
export const ContactForm = ({ onSubmit, contactsName }) => {

    const handleSubmit = (values, { resetForm }) => {
        if (contactsName.map(el => el = el.name.toLowerCase()).includes(values.name.toLowerCase())) {
            alert(`${values.name} is already in contacts`)
        }
        else {
            onSubmit(values);
            resetForm();
        }
    };
    
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form  >
                <Label htmlFor='inputName'>Name</Label>
                <Input
                    type="text"
                    name="name"
                />
                <FormError name="name" />
                <Label htmlFor='inputTel'>Number</Label>
                <Input
                    type="tel"
                    name="number"
                />
                <FormError name="number" />
                <Button type="submit" >Add Contact</Button>
            </Form>
        </Formik>
    )
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


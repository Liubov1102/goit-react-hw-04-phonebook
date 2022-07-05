import React from "react";
import PropTypes from 'prop-types';
import { Item, Button } from "./ContactElement.styled";

export const ContactElement = ({ id,  name, number, onDeleteContact }) => {
	return (
        <Item >
            
            {name} : {number}
            <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </Item>
	);
};
ContactElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,   
    onDeleteContact: PropTypes.func.isRequired,
}
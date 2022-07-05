import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContactElement } from "components/ContactElement/ContactElement";

const List = styled.ul`
    width: 400px;
    padding: 6px;
    border: 1px solid black;
    border-radius: 4px; 
`;

export const ContactList = ({ contacts, onDeleteContact }) => {
	return (
		 <List >
            {contacts.map(({id, name, number}) => (
        
             <ContactElement
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
             />
    ))}
         </List>
	);
};
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
    onDeleteContact: PropTypes.func.isRequired,
}
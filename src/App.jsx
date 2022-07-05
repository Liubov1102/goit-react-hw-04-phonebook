import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { Box } from './Box';

const Title = styled.h1`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

const Subtitle = styled.h2`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;
`;

export class App extends Component  {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  };

  addContact = (formName, formNumber) => {
    this.setState(prevState => ({
      contacts: [{ name: formName, id: nanoid(), number: formNumber }, ...prevState.contacts],
    }));
   
  };

  deleteContact = (contactId) => {
    this.setState(prevState => (
      { contacts: prevState.contacts.filter(contact => contact.id !== contactId) }
    ))
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box ml={16} >
         <Title>Phonebook</Title>
           <ContactForm
             onSubmit={this.addContact}
             contactsName={this.state.contacts}        
           />

         <Subtitle>Contacts</Subtitle>
           <Filter
             value={filter} onChangeFilter={this.changeFilter} 
           />
        
           <ContactList
              contacts={visibleContacts}
              filter={filter}
              onDeleteContact={this.deleteContact}
           />
      </Box>
    )    
  }
};

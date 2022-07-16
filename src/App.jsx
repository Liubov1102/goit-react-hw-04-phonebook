import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { Box } from "./components/Box";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    };
  };

  handleSubmit = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(state => ({
      contacts: [contact, ...state.contacts],
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState(prevState => (
      { contacts: prevState.contacts.filter(contact => contact.id !== contactId) }
    ))
  };

  handleChangeFilter = (filter) => {
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
             onSubmit={this.handleSubmit}
             contactsName={this.state.contacts}        
           />

         <Subtitle>Contacts</Subtitle>
           <Filter
             value={filter} onChangeFilter={this.handleChangeFilter} 
           />
        
           <ContactList
              contacts={visibleContacts}
              filter={filter}
              onDeleteContact={this.handleDeleteContact}
           />
      </Box>
    )    
  };
};


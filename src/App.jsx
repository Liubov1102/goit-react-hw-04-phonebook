import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { Box } from "./components/Box";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";

let contactsList = 
 [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

export const App = () => {
  const isMounted = useRef(false);
  const [contacts, setContacts] = useState(contactsList);
  const [filter, setFilter] = useState('');
 
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, [])
 
  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
    isMounted.current = true;
  }, [contacts])
  
  const handleSubmit = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    setContacts(state => [contact, ...state])
  };

  const handleDeleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const handleChangeFilter = filter => {
    return setFilter(filter);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Box ml={16} >
      <Title>Phonebook</Title>
      <ContactForm
        onSubmit={handleSubmit}
        contactsName={contacts}
      />

      <Subtitle>Contacts</Subtitle>
      <Filter
        value={filter} onChangeFilter={handleChangeFilter}
      />
        
      <ContactList
        contacts={getVisibleContacts()}           
        onDeleteContact={handleDeleteContact}
      />
    </Box>
  )
};



import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [filter, setfilter] = useState('');
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedFilter = name.toLowerCase();
    const checkByName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFilter
    );

    if (checkByName) {
      return alert(`${name} is alredy in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevState => [...prevState, newContact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleChange = event => {
    setfilter(event.currentTarget.value);
  };

  const filterContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContact = filterContact();
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChange} />
      <ContactList contacts={filteredContact} onDeleteContact={deleteContact} />
    </Layout>
  );
}

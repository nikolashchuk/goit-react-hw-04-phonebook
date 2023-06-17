import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const LS_KEY = 'contacts';

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
    const parsedContacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newName, number) => {
    const uniqueName = this.state.contacts.some(({ name }) => name === newName);

    if (uniqueName) {
      return alert(`${newName} is alredy in contacts.`);
    }

    const newContact = {
      id: nanoid(),
      name: newName,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filterContact = this.filterContact();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} />
        <ContactList
          contacts={filterContact}
          onDeleteContact={this.deleteContact}
        />
      </Layout>
    );
  }
}

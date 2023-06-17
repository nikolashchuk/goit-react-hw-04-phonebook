import { Button, Form, Input, Label } from './ContactForm.styled';
import { useState } from 'react';

export function ContactForm({ onSubmit }) {
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setname(value);
        break;

      case 'number':
        setnumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });

    resetForm();
  };

  const resetForm = () => {
    setname('');
    setnumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          placeholder="Pavlo Nikolashchuk"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          placeholder="+380-00-000-0000"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit"> Add contact </Button>
    </Form>
  );
}

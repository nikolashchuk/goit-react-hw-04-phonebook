import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={onChange}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Pavlo Nikolashchuk"
          required
        />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

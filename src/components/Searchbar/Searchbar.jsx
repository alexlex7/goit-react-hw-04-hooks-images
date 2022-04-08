import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled.jsx';

function Searchbar({ handleSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmitForm = e => {
    e.preventDefault();
    handleSubmit(inputValue);
    setInputValue('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmitForm}>
        <SearchFormButton>
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          placeholder="Search images and photos"
          onChange={e => setInputValue(e.target.value)}
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = { handleSubmit: PropTypes.func.isRequired };

export default Searchbar;

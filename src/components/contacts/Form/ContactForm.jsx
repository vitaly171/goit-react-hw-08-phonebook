import React from 'react';
import {useState} from 'react';
import s from './ContactForm.module.css';
import { toast } from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import {addContact} from '../../../redux/contacts/contacts-operations';
import PropTypes from 'prop-types';


export default function Form () {

  const [name,setName]=useState('');
  const [number,setNumber]=useState('');
  const [error, setError]=useState('');


  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch('');


  const handleChange = (event) => {
    const {name, value} = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
        
      default: toast.error(`There are no type input "${name}"`);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contacts && contacts.some(contact => contact.name===name)) {
      setError(name);
      event.target.reset();
      return;
    } else {
      dispatch(addContact({name, number}));
      setName('');
      setNumber(''); 
      event.target.reset();
    }
  }


  return (
     <form className={s.form} onSubmit = {handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          placeholder="Enter name"
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <label>
          <input 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must contain digits and also can contain : spaces, dashes, parentheses and start with '+' "
          required
           placeholder="Enter phone number"
            onChange={handleChange}
            className={s.input}
          >
          </input>
        </label>
      <button className={s.button} type="submit">
        {' '}Add contact{' '}
      </button>
      </form>
  );

}

Form.propTypes = {
  onSubmit: PropTypes.any,
}
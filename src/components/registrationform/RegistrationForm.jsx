import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './RegistrationForm.module.css';
import { useNavigate } from 'react-router-dom';

import authSelectors from '../../redux/auth/auth-selectors';

const RegistrationForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const  [password, setPassword] = useState ('');

    const dispatch = useDispatch('');
    const navigate = useNavigate();

    const isRegistered =  useSelector(authSelectors.isRegistered);
    
    const handleChange = (event) => {
      const {name, value} = event.target;
    
        switch (name) {
        case 'name':
          setName(value);
            break;
    
        case 'email':
          setEmail(value);
            break;
        
        case 'password':
         setPassword(value);
            break;
            
        default: return;
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(authOperations.register({name, email, password}));
        setName('');
        setEmail(''); 
        setPassword('');
        event.target.reset();
    }

    useEffect(() => { 
      if (isRegistered) {
        navigate ('/login') 
      }
    }, [isRegistered, navigate]);

    
    return (
        <div className = {s.formContainer}>
          <form onSubmit = {handleSubmit} className={s.form}>
              <label className = {s.label}>
              Name:
              <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="The name can only consist of letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
                  required
                  onChange={handleChange}
              className={s.formInput}
              placeholder='Name'
              />
              </label>
              <label className = {s.label}>
              E-mail:
                <input 
                    type="email"
                    name="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title="Invalid email address"
                    required
                    onChange={handleChange}
              className={s.formInput}
              placeholder='E-mail'
                >
                </input>
              </label>
              <label className = {s.label}>
                Password:
                <input 
                    type="text"
                    name="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    required
                    onChange={handleChange}
              className={s.formInput}
              placeholder='Password'
                >
                </input>
              </label>
              <button className={s.formButton}>Register</button>
          </form>
        </div>
      ); 
  }

  RegistrationForm.propTypes = {
      onSubmit: PropTypes.any,
}
  
  export default RegistrationForm;
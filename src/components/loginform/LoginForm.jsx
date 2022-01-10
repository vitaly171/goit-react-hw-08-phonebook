import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import { useLocation } from 'react-router-dom'


const LoginForm = () => {

    const [email, setEmail]=useState('');
    const [password, setPassword] = useState ('');
    const isRegistered =  useSelector(authSelectors.isRegistered);
    const logedIn =  useSelector(authSelectors.getIsLoggedIn);
    const httpError =  useSelector(authSelectors.getHttpError);
    const {state} = useLocation();

    const dispatch = useDispatch('');
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const {name, value} = event.target;
    
        switch (name) {
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
        dispatch(authOperations.logIn({email, password}));
        setEmail('');
        setPassword('');
        event.target.reset();
    }

    useEffect(() => { 
        if (logedIn) {
          navigate(state?.path || '/usermenu');
        }
      }, [logedIn, navigate]);
    
    return (
        <div className = {s.formContainer}>
            {isRegistered ? <div className={s.registrationMessage}> 🎉🎉🎉 Congratulations, your account has been successfully created. Please, log in ツ</div>: ''}
            {httpError ? <div className={s.error}>⛔ LOG IN ERROR ⛔</div> : ''}
            <form onSubmit = {handleSubmit} className={s.form}>
            <label className={s.label}>
                E-mail:
                <input 
                    type="email"
                    name="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title="Invalid email address"
                    required
                        onChange={handleChange}
                    placeholder='E-mail'
                    className = {s.formInput}
                >
                </input>
                </label>
                <label className={s.label}>
                Password:
                <input 
                    type="text"
                    name="password"
                    required
                    onChange={handleChange}
                        className={s.formInput}
                        placeholder='Password'
                >
                </input>
                </label>
                <button className={s.formButton}>Log in</button>
            </form>
        {/* {error && <span className={s.error}>This name already exists.</span> } */}
        </div>
    ); 
}

LoginForm.propTypes = {
    onSubmit: PropTypes.any,
}
  
  export default LoginForm;
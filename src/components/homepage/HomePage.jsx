import  { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => (
  <div className={s.mainPageContainer}>
  <h1>Welcome to Phonebook.App</h1>
  <div className={s.homePageContainer}>
    <NavLink to="/login" className="link">
        <button className={s.button}>Log in</button>  </NavLink>
    <NavLink to="/register" className= "link">
        <button className={s.button}>Register</button>
    </NavLink>
    </div>
    </div>
) 

export default HomePage;
import React from 'react';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import styles from './App.module.css';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRout';




export default function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);




  const Homepage = lazy(() => import('./components/homepage/HomePage'));
  const RegistrationForm = lazy(() => import('./components/registrationform/RegistrationForm' ));
  const LoginForm = lazy(() => import('./components/loginform/LoginForm'));
  const UserMenu = lazy(() => import('./components/usermenu/UserMenu'));
  const ContactsApp = lazy(() => import('./components/contacts/ContactsApp'));


  return (
    <div className = {styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={ <Homepage />} />
          <Route exact strict path="/register" element={<RegistrationForm />} />
          <Route exact strict path="/login" element={<LoginForm />} />
          <Route path="/usermenu" element={<PrivateRoute><UserMenu /></PrivateRoute>}>
              <Route path="contacts" element={<PrivateRoute><ContactsApp /></PrivateRoute>}></Route>
          </Route>
        </Routes>
      </Suspense> 
    </div>
    );


}


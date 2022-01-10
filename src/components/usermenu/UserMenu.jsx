
import {useDispatch, useSelector} from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import'./usermenu.css';


export default function UserMenu() {

    const dispatch = useDispatch('');

    const navigate = useNavigate();

    const name = useSelector(state => state.auth.user.name);
    const email = useSelector(state => state.auth.user.email); 

    return (
        <div className={s.container}>
            <div className={s.containerMenu}>
                <span className={s.userName}><b>Welcome, {name}! </b></span>
                <ul className={s.linkList}>
                    <li><NavLink className={s.link} to="/usermenu" end> Home</NavLink></li>
                    <li><NavLink className={s.link} to= {'contacts'}> Contacts </NavLink></li>
                </ul>
                <span className={s.userEmail}><b>E-mail:</b> {email}</span>
                <button 
                    className={s.buttonExit} 
                    type="button" 
                    onClick={() => {
                        dispatch(authOperations.logOut());
                        navigate('/')}}>
                            Sign Out
                </button>
            </div>
            <Outlet />
            <div className={s.section}></div>
        </div>
    );
}
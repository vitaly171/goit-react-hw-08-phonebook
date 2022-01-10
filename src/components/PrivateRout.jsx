import authSelectors from '../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const location = useLocation();
    
    return isLoggedIn ? children : <Navigate
        to="/login"
        replace
        state={{ path: location.pathname }} />;
}

import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './useAuth';


const PrivateRoute = () => {
    const { user } = useAuth();
    return (
        user ? <Navigate to="/Dashboard" /> : <Navigate to="/Login" />
    );
}

export default PrivateRoute;
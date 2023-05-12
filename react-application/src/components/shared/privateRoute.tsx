import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './useAuth';


const PrivateRoute = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        !user ? <Navigate to="/Login" /> : <Outlet/>
    );
};

export default PrivateRoute;
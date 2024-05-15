import { useAuth } from '@/hooks/UseAuth'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet />:<Navigate to="/signin" replace />
}

export default ProtectedRoutes;
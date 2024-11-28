import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuth";

interface Props {
    children: React.ReactNode;
    requiredPermissions: string;
}

export const ProtectedRoute = ({ children, requiredPermissions }: Props) => {
    
    const { isAuthenticated, permissions } = useAuthStore();

    if(!isAuthenticated) {
        return <Navigate to="/login" />
    }

    if (!permissions.includes(requiredPermissions)) {
        return <Navigate to="/unauthorized" />
    }

    return <>{children}</>;

};
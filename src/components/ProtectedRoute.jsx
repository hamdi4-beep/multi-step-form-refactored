import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ isAccessAllowed }) =>
    isAccessAllowed ? <Outlet /> : <Navigate to='/' replace />

export default ProtectedRoute
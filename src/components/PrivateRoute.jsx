import { Navigate, Outlet } from "react-router";

const PrivateRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

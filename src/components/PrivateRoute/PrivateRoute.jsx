import { Navigate, Outlet } from "react-router-dom";
import { Router } from "../../pages/routes";

export const PrivateRoute = ({isAuth}) => {
  return isAuth ? <Outlet /> : <Navigate to={Router.login} />;
};

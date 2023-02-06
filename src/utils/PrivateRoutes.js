import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = (correctRole) => {
  const { signedIn } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.auth);

  return signedIn && correctRole.correctRole === role ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoutes;

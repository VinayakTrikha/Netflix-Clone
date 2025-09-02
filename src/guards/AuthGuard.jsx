import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const AuthGuard = () => {
  const { accessToken } = useSelector((store) => store.userData);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(accessToken);
    // if (!accessToken) navigate("/login");
    // else
     return <Outlet />;
  }, [])


};

export default AuthGuard;

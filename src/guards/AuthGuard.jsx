import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/UserSlice";
import Loading from "../components/Loading";

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

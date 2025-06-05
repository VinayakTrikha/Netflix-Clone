import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/UserSlice";
import { auth } from "../utils/firebase";

const LoginGuard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, displayName, email, uid } = user;
        dispatch(
          addUser({
            accessToken,
            displayName,
            email,
            uid,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);
};

export default LoginGuard;

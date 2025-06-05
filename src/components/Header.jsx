import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "../utils/UserSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { avatarImg, Logo } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    const res = await signOut(auth);
    dispatch(removeUser());
    navigate("/login");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full  flex flex-row justify-between">
      <img className="w-44" src={Logo} alt="Netflix Logo" />
      <div className="flex items-center">
        <img src={avatarImg} className=" h-[35px]" />
        <button
          className=" font-bold text-white cursor-pointer"
          onClick={handleClick}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;

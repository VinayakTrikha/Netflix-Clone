import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { avatarImg, Logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showGptSearch } = useSelector((store) => store.gpt);

  const handleClick = async () => {
    const res = await signOut(auth);
    dispatch(removeUser());
    navigate("/login");
  };
  const user = useSelector((store) => store.userData);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, email, displayName, accessToken } = user;
        dispatch(addUser({ uid, email, displayName, accessToken }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClicked = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute z-20 px-8 py-2 bg-gradient-to-b from-black w-full  flex flex-row justify-between">
      <img className="w-44" src={Logo} alt="Netflix Logo" />
      {user?.accessToken && (
        <div className="flex items-center">
          <button
            className="py-2 px-4 m-2 my-2 text-white bg-purple-500 rounded-lg"
            onClick={handleGptSearchClicked}
          >
            {showGptSearch ? "Home Page" : "Gpt Search"}
          </button>
          <img src={avatarImg} className=" h-[35px]" />
          <button
            className=" font-bold text-white cursor-pointer"
            onClick={handleClick}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

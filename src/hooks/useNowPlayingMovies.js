import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );

    const data = await res.json();

    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useNowPlayingMovies;

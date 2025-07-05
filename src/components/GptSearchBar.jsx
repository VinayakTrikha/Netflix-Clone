import { useState } from "react";
import { APIKey } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchedMovies } from "../utils/movieSlice";

const GptSearchBar = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const dispatch = useDispatch();

  const searchHindiMovies = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${encodeURIComponent(
        query
      )}&include_adult=false&page=1`
    );
    const data = await response.json();

    dispatch(addSearchedMovies(data.results));
  };

  const handleSearch = async () => {
    if (!searchTxt.trim()) return;
    await searchHindiMovies(searchTxt.trim());
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder="What would you like to watch today?"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="col-span-3 m-4 px-4 bg-red-700 text-white rounded-lg"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { searchedMovies } = useSelector((store) => store.movies);
  if (!searchedMovies) return null;
  return (
    <div className="p-4 m-4 bg-black/80 text-white">
      <div>
        {
          searchedMovies.map((movie) => <MovieList title={movie.title} movies={searchedMovies} />)
        }
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

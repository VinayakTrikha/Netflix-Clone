import { backgroundImg } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="w-full h-full object-cover"
          src={backgroundImg}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

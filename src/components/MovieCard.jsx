import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;

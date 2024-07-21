import { PLACEHOLDER_IMAGE } from "@/constants.ts";
import { MovieListProps } from "@/utils/tsUtils";
import { HighlightSearchTerm } from "@/components/HighlightSearchTerm";

export default function MovieList({ movie, searchTerm }: MovieListProps) {
  const imageUrl = movie.Poster !== "N/A" ? movie.Poster : PLACEHOLDER_IMAGE;
  return (
    <div className="result-item">
      <img src={imageUrl} alt="Result Image" />
      <div className="result-text">
        <HighlightSearchTerm text={movie.Title} highlight={searchTerm} />
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

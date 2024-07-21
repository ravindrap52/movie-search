import { MovieListProps } from "@/utils/tsUtils";

export default function MovieList({ movie, searchTerm }: MovieListProps) {
  return (
    <div className="result-item">
      <img src={movie.Poster} alt="Result Image" />
      <div className="result-text">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

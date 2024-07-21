import { useState, useCallback, ChangeEvent } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useMovieSearch } from "@/hooks/useMovieSearch";
import MovieList from "@/components/MovieList.tsx";

export default function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, error, isLoading } = useMovieSearch(debouncedSearchTerm);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">
            <h1>Movie Search</h1>
          </div>
          <div className="search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search for movies..."
              className="search-input"
            />
          </div>
        </div>
      </header>

      <main>
        <div className="search-results">
          {isLoading && <div>Loading...</div>}
          {error && <div>An error occurred while fetching the results</div>}
          {data && data.Response === "False" && (
            <div>No movies found for "{searchTerm}".</div>
          )}
          {data && data.Response === "True" && (
            <MovieList movie={data} searchTerm={debouncedSearchTerm} />
          )}
        </div>
      </main>
    </>
  );
}

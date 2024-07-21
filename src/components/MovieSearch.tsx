import { useState, useCallback, ChangeEvent } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useMovieSearch } from "@/hooks/useMovieSearch";
import MovieList from "@/components/MovieList.tsx";
import Loading from "@/components/Loading";

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
          {isLoading && <div className="text-center"><Loading /></div>}
          {error && <h3 className="text-center">An error occurred while fetching the results</h3>}
          {data && data.Response === "False" && (
            <h3 className="text-center">No movies found for "{searchTerm}".</h3>
          )}
          {data && data.Response === "True" && (
            <MovieList movie={data} searchTerm={debouncedSearchTerm} />
          )}
        </div>
      </main>
    </>
  );
}

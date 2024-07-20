import { useState, useCallback, ChangeEvent } from "react";
import { useDebounce } from '@/hooks/useDebounce';
import { useMovieSearch } from "@/hooks/useMovieSearch";

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
    <div className="movie-search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for movies..."
        className="search-input"
      />
    </div>
  );
}

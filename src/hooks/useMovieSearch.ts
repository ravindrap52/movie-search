import { useQuery } from "@tanstack/react-query";
import { API_KEY, API_URL } from "@/constants.ts";
import { Movie } from "@/utils/tsUtils.ts";

/**
 * Fetch movies based on the search term.
 * @param searchTerm - The term to search for movies.
 * @returns A promise that resolves to a list of movies or throws an error.
 */
export const fetchMovies = async (
  searchTerm: string
): Promise<Movie | null> => {
  try {
    // Encoding the search term correctly
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const url = `${API_URL}/?apikey=${API_KEY}&t=${encodedSearchTerm}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return data as Movie;
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return null;
  }
};

export const useMovieSearch = (searchTerm: string) => {
  return useQuery({
    queryKey: ["movies", searchTerm],
    queryFn: () => fetchMovies(searchTerm),
    enabled: !!searchTerm,
  });
};

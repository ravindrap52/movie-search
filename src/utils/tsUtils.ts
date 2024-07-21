export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Response: String;
}

export interface MovieListProps {
  movie: Movie;
  searchTerm: string;
}

export interface HighlightProptypes {
  text: string;
  highlight: string;
}
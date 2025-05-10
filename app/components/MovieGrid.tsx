import type { Movie } from "~/hooks/useMovies";
import { MovieCard } from "./MovieCard";

export const MovieGrid = ({ movies }: { movies: Movie[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

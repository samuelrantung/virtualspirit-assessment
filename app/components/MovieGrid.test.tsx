import { render, screen } from "@testing-library/react";
import { MovieGrid } from "./MovieGrid";
import type { Movie } from "../hooks/useMovies";

const movies: Movie[] = [
  {
    id: 1,
    title: "Movie One",
    overview: "Overview of movie one.",
    poster_path: null,
    vote_average: 7.5,
    release_date: "2023-01-01",
    original_language: "en",
    adult: false,
    genre_ids: [18],
    original_title: "Movie One",
    backdrop_path: null,
    popularity: 10,
    vote_count: 100,
    video: false,
  },
  {
    id: 2,
    title: "Movie Two",
    overview: "Overview of movie two.",
    poster_path: null,
    vote_average: 8.0,
    release_date: "2022-01-01",
    original_language: "en",
    adult: false,
    genre_ids: [35],
    original_title: "Movie Two",
    backdrop_path: null,
    popularity: 20,
    vote_count: 200,
    video: false,
  },
];

describe("MovieGrid", () => {
  test("renders all movie cards", () => {
    render(<MovieGrid movies={movies} />);
    expect(screen.getByText(/Movie One/i)).toBeInTheDocument();
    expect(screen.getByText(/Movie Two/i)).toBeInTheDocument();
  });
});

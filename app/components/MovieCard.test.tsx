import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MovieCard } from "./MovieCard";

const movie = {
  id: 1,
  title: "A Very Long Movie Title That Might Wrap",
  overview:
    "This is a test overview of the movie. It explains the plot briefly.",
  poster_path: null,
  vote_average: 8.2,
  release_date: "2023-07-01",
  original_language: "en",
  adult: false,
  genre_ids: [28, 12],
  original_title: "A Very Long Movie Title That Might Wrap",
  backdrop_path: null,
  popularity: 100,
  vote_count: 200,
  video: false,
};

describe("MovieCard", () => {
  test("renders title, rating and release year", () => {
    render(<MovieCard movie={movie} />);
    expect(screen.getByText(/A Very Long Movie Title/i)).toBeInTheDocument();
    expect(screen.getByText(/8.2/)).toBeInTheDocument();
    expect(screen.getByText(/2023/)).toBeInTheDocument();
  });

  test("toggles overview when button is clicked", async () => {
    render(<MovieCard movie={movie} />);
    const toggleBtn = screen.getByText(/Show Overview/i);
    fireEvent.click(toggleBtn);

    expect(screen.getByText(/This is a test overview/)).toBeInTheDocument();

    fireEvent.click(toggleBtn); // hide it

    await waitForElementToBeRemoved(() =>
      screen.getByText(/This is a test overview/)
    );
  });
});

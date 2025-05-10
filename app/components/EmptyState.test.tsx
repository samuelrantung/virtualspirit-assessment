import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";

describe("EmptyState", () => {
  test("renders initial state message", () => {
    render(<EmptyState type="initial" />);
    expect(screen.getByText(/Ready to explore movies/i)).toBeInTheDocument();
    expect(screen.getByText(/Start by typing/i)).toBeInTheDocument();
  });

  test("renders no-results state with query", () => {
    render(<EmptyState type="no-results" query="Ghost" />);
    expect(screen.getByText(/No results found/i)).toBeInTheDocument();
    expect(screen.getByText(/No movies found for “Ghost”/i)).toBeInTheDocument();
  });
});
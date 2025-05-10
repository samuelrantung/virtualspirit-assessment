import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./home";

jest.mock("../api/api", () => ({
  searchMovies: jest.fn().mockResolvedValue({
    movies: [],
    nextPage: 2,
    totalPages: 2,
  }),
}));

const renderWithProviders = (ui: React.ReactElement) => {
  const client = new QueryClient();
  return render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>
  );
};

describe("Home Route", () => {
  test("renders search input and empty state initially", async () => {
    renderWithProviders(<Home />);
    expect(screen.getByPlaceholderText(/search movies/i)).toBeInTheDocument();

    // Wait for loading spinner to disappear
    await waitForElementToBeRemoved(() => screen.queryByRole("status"));

    // Check for empty state message
    expect(screen.getByText(/ready to explore movies/i)).toBeInTheDocument();
  });

  test("allows typing in search bar", () => {
    renderWithProviders(<Home />);
    const input = screen.getByPlaceholderText(/search movies/i);
    fireEvent.change(input, { target: { value: "ghost" } });
    expect(input).toHaveValue("ghost");
  });
});

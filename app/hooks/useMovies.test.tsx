import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMovies } from "./useMovies";
import * as api from "../api/api";

jest.mock("../api/api");

const mockSearchMovies = api.searchMovies as jest.Mock;

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

describe("useMovies", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and returns movie data", async () => {
    mockSearchMovies.mockResolvedValueOnce({
      movies: [{ id: 1, title: "Mock Movie", poster_path: null }],
      nextPage: 2,
      totalPages: 2,
    });

    const { result } = renderHook(() => useMovies("avengers"), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.data?.pages[0].movies).toBeDefined();
    });

    expect(result.current.data?.pages[0].movies).toEqual([
      { id: 1, title: "Mock Movie", poster_path: null },
    ]);
  });
});
import { searchMovies, fetchKeywordSuggestions, apiClient } from "./api";
import type { QueryFunctionContext } from "@tanstack/react-query";

describe("api functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("searchMovies calls /search/movie with query and page", async () => {
    const mockResponse = {
      data: {
        results: [{ id: 1, title: "Mock Movie" }],
        total_pages: 5,
      },
    };
    jest.spyOn(apiClient, "get").mockResolvedValueOnce(mockResponse);

    const context = {
      pageParam: 1,
      queryKey: ["search", { query: "avengers" }],
    } as unknown as QueryFunctionContext;

    const result = await searchMovies(context);

    expect(apiClient.get).toHaveBeenCalledWith("/search/movie", {
      params: { query: "avengers", page: 1 },
    });

    expect(result).toEqual({
      movies: mockResponse.data.results,
      nextPage: 2,
      totalPages: 5,
    });
  });

  test("fetchKeywordSuggestions calls /search/keyword with query", async () => {
    const mockKeywords = {
      data: {
        results: [{ id: 100, name: "hero" }],
      },
    };
    jest.spyOn(apiClient, "get").mockResolvedValueOnce(mockKeywords);

    const result = await fetchKeywordSuggestions("hero");

    expect(apiClient.get).toHaveBeenCalledWith("/search/keyword", {
      params: { query: "hero" },
    });

    expect(result).toEqual(mockKeywords.data.results);
  });
});
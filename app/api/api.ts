import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

// Test case will failed with import.meta, use process.env instead for testing
const apiToken = import.meta.env.VITE_TMDB_API_TOKEN;
// const apiToken = process.env.VITE_TMDB_API_TOKEN;

const tmdbURL = "https://api.themoviedb.org/3";

export const apiClient = axios.create({
  baseURL: tmdbURL,
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});

export const searchMovies = async ({
  pageParam,
  queryKey,
}: QueryFunctionContext) => {
  const queryArgs = queryKey[1] as any;
  const query = queryArgs.query as string;

  const response = await apiClient.get("/search/movie", {
    params: {
      query,
      page: pageParam,
    },
  });

  return {
    movies: response.data.results,
    nextPage: (pageParam as number) + 1,
    totalPages: response.data.total_pages,
  };
};

export const fetchKeywordSuggestions = async (query: string) => {
  const response = await apiClient.get("/search/keyword", {
    params: { query },
  });
  return response.data.results;
};

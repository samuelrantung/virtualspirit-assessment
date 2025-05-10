import {
  useInfiniteQuery,
  useQuery,
  type UseInfiniteQueryResult,
  type UseQueryResult,
} from "@tanstack/react-query";
import { fetchKeywordSuggestions, searchMovies } from "../api/api";

export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MoviePage {
  movies: Movie[];
  nextPage: number;
  totalPages: number;
}

/**
 *
 * Used for list of movie
 */
export const useMovies = (query: string) => {
  return useInfiniteQuery<MoviePage, Error>({
    queryKey: ["movies", { query }],
    queryFn: searchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage <= lastPage.totalPages
        ? lastPage.nextPage
        : undefined;
    },
  });
};

/**
 *
 * Used for search keyword suggestion
 */
export const useKeywordSuggestions = (query: string) => {
  return useQuery({
    queryKey: ["keywordSuggestions", query],
    queryFn: () => fetchKeywordSuggestions(query),
    enabled: !!query && query.length >= 2,
  });
};

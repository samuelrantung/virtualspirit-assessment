import type { Route } from "./+types/home";
import { useState } from "react";
import { useMovies } from "~/hooks/useMovies";
import { SearchBar } from "~/components/SearchBar";
import { MovieGrid } from "~/components/MovieGrid";
import LoadMore from "~/components/LoadMore";
import Loader from "~/components/Loader";
import EmptyState from "~/components/EmptyState";
import { EndOfResult } from "~/components/EndOfResult";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  const [search, setSearch] = useState("");
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
  } = useMovies(search);

  const allMovies = data?.pages.flatMap((page) => page.movies) ?? [];

  return (
    <div className="p-4">
      <SearchBar onSearch={setSearch} />
      {isLoading ? (
        <Loader />
      ) : !search ? (
        <EmptyState type="initial" />
      ) : allMovies.length === 0 ? (
        <EmptyState type="no-results" query={search} />
      ) : (
        <>
          <MovieGrid movies={allMovies} />
          {hasNextPage && <LoadMore onVisible={fetchNextPage} />}
          {!hasNextPage && <EndOfResult />}
        </>
      )}
    </div>
  );
}

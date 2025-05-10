import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Movie } from "~/hooks/useMovies";
import languageList from "~/data/language.json";

const fallbackImage = "/comingsoon.webp";

const getLanguageName = (code: string): string => {
  const match = languageList.find((lang) => lang.iso_639_1 === code);
  return match?.english_name ?? code.toUpperCase();
};

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const [expanded, setExpanded] = useState(false);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : fallbackImage;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const language = getLanguageName(movie.original_language);

  return (
    <div className="relative bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Poster */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={imageUrl}
          alt={movie.title}
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== fallbackImage) target.src = fallbackImage;
          }}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-1 flex gap-2 text-xs text-gray-600">
          <span className="bg-gray-200 px-2 py-1 rounded-full whitespace-nowrap">
            📅 {releaseYear}
          </span>
          <span className="bg-gray-200 px-2 py-1 rounded-full uppercase whitespace-nowrap">
            🌍 {language}
          </span>
        </div>

        <div className="mb-3 min-h-[3.5rem]">
          <h2
            className="text-base font-semibold line-clamp-2 leading-snug"
            title={movie.original_title}
          >
            {movie.original_title}
          </h2>
        </div>

        {/* Overview toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-auto text-sm text-blue-600 hover:underline focus:outline-none font-medium"
        >
          {expanded ? "Hide Overview" : "Show Overview"}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.p
              key="overview"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-gray-700 mt-2 overflow-hidden"
            >
              {movie.overview}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

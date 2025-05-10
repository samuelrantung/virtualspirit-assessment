import { useState, useRef } from "react";
import { useKeywordSuggestions } from "~/hooks/useMovies";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: suggestions = [] } = useKeywordSuggestions(input);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleSelect = (keyword: string) => {
    setInput(keyword);
    setShowDropdown(false);
    onSearch(keyword);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onSearch(input.trim());
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setShowDropdown(true);
        }}
        onBlur={() => {
          timeoutRef.current = setTimeout(() => setShowDropdown(false), 100);
        }}
        onFocus={() => {
          if (suggestions.length) setShowDropdown(true);
        }}
        onKeyDown={handleKeyDown}
      />

      {/* Dropdown */}
      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded shadow mt-1 max-h-56 overflow-y-auto">
          {suggestions.map((suggestion: any) => (
            <li
              key={suggestion.id}
              onMouseDown={() => handleSelect(suggestion.name)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

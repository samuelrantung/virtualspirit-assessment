import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { renderWithQueryClient } from "~/test-utils";

describe("SearchBar", () => {
  test("renders input and allows typing", () => {
    const mockSearch = jest.fn();
    renderWithQueryClient(<SearchBar onSearch={mockSearch} />);
    // render(<SearchBar onSearch={mockSearch} />);
    const input = screen.getByPlaceholderText(/Search movies/i);
    fireEvent.change(input, { target: { value: "Batman" } });
    expect(input).toHaveValue("Batman");
  });

  test("calls onSearch when Enter is pressed", () => {
    const mockSearch = jest.fn();
    renderWithQueryClient(<SearchBar onSearch={mockSearch} />);
    // render(<SearchBar onSearch={mockSearch} />);
    const input = screen.getByPlaceholderText(/Search movies/i);
    fireEvent.change(input, { target: { value: "Spider-Man" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(mockSearch).toHaveBeenCalledWith("Spider-Man");
  });
});

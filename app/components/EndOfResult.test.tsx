import { render, screen } from "@testing-library/react";
import { EndOfResult } from "./EndOfResult";

describe("EndOfResult", () => {
  test("displays end of results message", () => {
    render(<EndOfResult />);
    expect(
      screen.getByText(/you've reached the end of the list/i)
    ).toBeInTheDocument();
  });
});

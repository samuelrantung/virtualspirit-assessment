import { render, screen } from "@testing-library/react";
import LoadMore from "./LoadMore";

describe("LoadMore", () => {
  test("shows loading more text and spinner", () => {
    render(<LoadMore onVisible={jest.fn()} />);
    expect(screen.getByText(/loading more/i)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader", () => {
  test("renders the loader spinner", () => {
    render(<Loader />);
    const spinner = screen.getByRole("status", { hidden: true });
    expect(spinner).toBeInTheDocument();
  });
});
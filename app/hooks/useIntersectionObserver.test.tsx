import React from "react";
import { render } from "@testing-library/react";
import { useIntersectionObserver } from "./useIntersectionObserver";

const TestComponent = ({ onVisible }: { onVisible: () => void }) => {
  const ref = useIntersectionObserver({ callback: onVisible });
  return (
    <div data-testid="observe-target" ref={ref}>
      Target
    </div>
  );
};

describe("useIntersectionObserver", () => {
  const mockObserve = jest.fn();
  const mockDisconnect = jest.fn();
  const mockUnobserve = jest.fn();
  const mockConstructor = jest.fn(() => ({
    observe: mockObserve,
    disconnect: mockDisconnect,
    unobserve: mockUnobserve,
  }));

  beforeEach(() => {
    global.IntersectionObserver =
      mockConstructor as unknown as typeof IntersectionObserver;
    jest.clearAllMocks();
  });

  it("sets up IntersectionObserver", () => {
    const onVisible = jest.fn();
    render(<TestComponent onVisible={onVisible} />);
    expect(mockConstructor).toHaveBeenCalledTimes(1);
  });
});

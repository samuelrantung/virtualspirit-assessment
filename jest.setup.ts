import "@testing-library/jest-dom";
import "dotenv/config";
process.env.VITE_TMDB_API_TOKEN = "test-token";
beforeEach(() => {
  global.IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })) as unknown as typeof IntersectionObserver;
});
// beforeEach(() => {
//   global.IntersectionObserver = jest.fn(() => ({
//     observe: jest.fn(),
//     unobserve: jest.fn(),
//     disconnect: jest.fn(),
//   })) as any;
// });

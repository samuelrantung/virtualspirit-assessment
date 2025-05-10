import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export const renderWithQueryClient = (ui: ReactNode) => {
  const testQueryClient = createTestQueryClient();

  return render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
};

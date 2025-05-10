interface EmptyStateProps {
  type: "initial" | "no-results";
  query?: string;
}

export const EmptyState = ({ type, query }: EmptyStateProps) => {
  const message =
    type === "initial"
      ? "Start by typing a keyword to find your next movie!"
      : `No movies found for “${query}”. Try another keyword.`;

  const icon = type === "initial" ? "🎬" : "😕";

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 text-gray-500">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">
        {type === "initial" ? "Ready to explore movies?" : "No results found"}
      </h2>
      <p className="max-w-md">{message}</p>
    </div>
  );
};

export default EmptyState;

import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";

const LoadMore = ({ onVisible }: { onVisible: () => void }) => {
  const ref = useIntersectionObserver({ callback: onVisible });
  //   return <div ref={ref} className="h-1" />;
  return (
    <div ref={ref} className="flex justify-center items-center py-4">
      <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-400 border-t-transparent" />
      <span className="ml-2 text-sm text-gray-600">Loading more...</span>
    </div>
  );
};

export default LoadMore;

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64 w-full">
      <div
        role="status"
        className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"
      ></div>
    </div>
  );
};

export default Loader;

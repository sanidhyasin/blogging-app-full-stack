export const BlogSkeleton = () => {
  return (
    <div className="flex items-center flex-col px-8 pb-4 gap-2">
      <div role="status" className="max-w-screen-lg w-full animate-pulse mt-5">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-10"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-screen-md mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-screen-lg mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-screen-lg mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-screen-lg mb-5"></div>
        <div className="flex flex-row justify-between">
          <div className="h-2.5 bg-gray-200 rounded-full w-28 mb-10"></div>
          <div className="flex flex-row gap-5">
            <div className="h-6 rounded-full bg-gray-200 w-6"></div>
            <div className="h-6 rounded-full bg-gray-200 w-6"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export const AppbarSkeleton = () => {
  return (
    <>
      <div className="w-full animate-pulse flex flex-row justify-between pt-4 px-8 gap-2">
        <div className="h-10 rounded-full bg-gray-200 w-10"></div>
        <div className="flex flex-row gap-5 items-center">
          <div className="h-10 rounded-full bg-gray-200 w-24"></div>
          <div className="h-6 rounded-full bg-gray-200 w-6"></div>
          <div className="h-6 rounded-full bg-gray-200 w-6"></div>
          <div className="h-10 rounded-full bg-gray-200 w-10"></div>
        </div>
      </div>
      <div className="w-full animate-pulse rounded-full h-1 bg-gray-200 my-4"></div>
    </>
  );
};

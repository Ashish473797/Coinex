function CoinDetailsLoader() {
  return (
    <div className="flex flex-col md:flex-row animate-pulse">
      {/* Right section skeleton */}
      <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
        <div className="h-52 w-52 bg-gray-300 mb-5 rounded-lg"></div>
        <div className="h-10 w-48 bg-gray-300 mb-5 rounded-lg"></div>
        <div className="w-full px-6 py-4">
          <div className="h-4 bg-gray-300 mb-2 rounded-lg"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded-lg"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded-lg"></div>
          <div className="h-4 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between px-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-6 w-20 bg-gray-300 rounded-lg"></div>
            <div className="ml-3 h-6 w-12 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-6 w-32 bg-gray-300 rounded-lg"></div>
            <div className="ml-3 h-6 w-16 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Left section skeleton */}
      <div className="md:w-2/3 w-full p-6">
        <div className="h-6 w-40 bg-gray-300 mb-4 rounded-lg"></div>
        <div className="h-4 w-full bg-gray-300 mb-2 rounded-lg"></div>
        <div className="h-4 w-full bg-gray-300 mb-2 rounded-lg"></div>
        <div className="h-4 w-full bg-gray-300 mb-2 rounded-lg"></div>
        <div className="h-4 w-full bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}

export default CoinDetailsLoader;

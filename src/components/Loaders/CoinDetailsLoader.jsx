function CoinDetailsLoader() {
  return (
    <div className="flex flex-col md:flex-row animate-pulse">
      {/* Right section skeleton */}
      <div className="flex flex-col items-center w-full mt-6 border-r-2 border-gray-500 md:w-1/3 md:mt-0">
        <div className="mb-5 bg-gray-300 rounded-lg h-52 w-52"></div>
        <div className="w-48 h-10 mb-5 bg-gray-300 rounded-lg"></div>
        <div className="w-full px-6 py-4">
          <div className="h-4 mb-2 bg-gray-300 rounded-lg"></div>
          <div className="h-4 mb-2 bg-gray-300 rounded-lg"></div>
          <div className="h-4 mb-2 bg-gray-300 rounded-lg"></div>
          <div className="h-4 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-col w-full px-6 md:flex-row md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-20 h-6 bg-gray-300 rounded-lg"></div>
            <div className="w-12 h-6 ml-3 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-32 h-6 bg-gray-300 rounded-lg"></div>
            <div className="w-16 h-6 ml-3 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Left section skeleton */}
      <div className="w-full p-6 md:w-2/3">
        <div className="w-40 h-6 mb-4 bg-gray-300 rounded-lg"></div>
        <div className="w-full h-4 mb-2 bg-gray-300 rounded-lg"></div>
        <div className="w-full h-4 mb-2 bg-gray-300 rounded-lg"></div>
        <div className="w-full h-4 mb-2 bg-gray-300 rounded-lg"></div>
        <div className="w-full h-4 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}

export default CoinDetailsLoader;

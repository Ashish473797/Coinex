export default function HomeLoader() {
  return (
    <>
      <div className="h-[50vh] bg-cover bg-left-bottom flex items-center animate-pulse">
        <div className="container mx-auto text-center">
          <div className="w-2/3 h-10 mx-auto mb-8 bg-gray-300 rounded-lg"></div>
          <div className="w-1/3 h-6 mx-auto bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center gap-5 mx-auto my-5 animate-pulse">
        {/* Header skeleton */}
        <div className="flex items-center justify-between w-full px-2 py-4 font-semibold bg-gray-300 rounded-lg">
          <div className="basis-[40%] h-6 bg-gray-400 rounded"></div>
          <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
          <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
          <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
        </div>

        {/* Body skeleton - 5 rows */}
        <div className="flex flex-col w-full gap-4">
          {/* Row 1 */}
          <div className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-gray-800 rounded-lg cursor-pointer">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="w-24 h-6 mb-2 bg-gray-400 rounded"></div>
                <div className="w-16 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-gray-800 rounded-lg cursor-pointer">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="w-24 h-6 mb-2 bg-gray-400 rounded"></div>
                <div className="w-16 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-gray-800 rounded-lg cursor-pointer">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="w-24 h-6 mb-2 bg-gray-400 rounded"></div>
                <div className="w-16 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>

          {/* Row 4 */}
          <div className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-gray-800 rounded-lg cursor-pointer">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="w-24 h-6 mb-2 bg-gray-400 rounded"></div>
                <div className="w-16 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>

          {/* Row 5 */}
          <div className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-gray-800 rounded-lg cursor-pointer">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="w-24 h-6 mb-2 bg-gray-400 rounded"></div>
                <div className="w-16 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>
        </div>

        {/* Pagination skeleton */}
        <div className="flex gap-2">
          <div className="w-24 h-10 bg-gray-400 rounded"></div>
          <div className="w-24 h-10 bg-gray-400 rounded"></div>
        </div>
      </div>
    </>
  );
}

export default function HomeLoader() {
  return (
    <>
      <div className="h-[50vh] bg-cover bg-left-bottom flex items-center animate-pulse">
        <div className="container mx-auto text-center">
          <div className="h-10 w-2/3 mx-auto bg-gray-300 mb-8 rounded-lg"></div>
          <div className="h-6 w-1/3 mx-auto bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <div className="my-5 flex flex-col items-center justify-center gap-5 container mx-auto animate-pulse">
        {/* Header skeleton */}
        <div className="w-full bg-gray-300 flex py-4 px-2 font-semibold items-center justify-between rounded-lg">
          <div className="basis-[40%] h-6 bg-gray-400 rounded"></div>
          <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
          <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
          <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
        </div>

        {/* Body skeleton - 5 rows */}
        <div className="flex flex-col w-full gap-4">
          {/* Row 1 */}
          <div className="w-full text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer bg-gray-800 rounded-lg">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="h-6 w-24 bg-gray-400 mb-2 rounded"></div>
                <div className="h-4 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>

          {/* Row 2 */}
          <div className="w-full text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer bg-gray-800 rounded-lg">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="h-6 w-24 bg-gray-400 mb-2 rounded"></div>
                <div className="h-4 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>

          {/* Row 3 */}
          <div className="w-full text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer bg-gray-800 rounded-lg">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="h-6 w-24 bg-gray-400 mb-2 rounded"></div>
                <div className="h-4 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>

          {/* Row 4 */}
          <div className="w-full text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer bg-gray-800 rounded-lg">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="h-6 w-24 bg-gray-400 mb-2 rounded"></div>
                <div className="h-4 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>

          {/* Row 5 */}
          <div className="w-full text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer bg-gray-800 rounded-lg">
            <div className="flex items-center justify-start gap-4 basis-[40%]">
              <div className="w-[5rem] h-[5rem] bg-gray-400 rounded-full"></div>
              <div className="flex flex-col">
                <div className="h-6 w-24 bg-gray-400 mb-2 rounded"></div>
                <div className="h-4 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="basis-[20%] h-6 bg-gray-400 rounded"></div>
            <div className="basis-[25%] h-6 bg-gray-400 rounded mx-auto"></div>
            <div className="basis-[15%] h-6 bg-gray-400 rounded ml-auto"></div>
          </div>
        </div>

        {/* Pagination skeleton */}
        <div className="flex gap-2">
          <div className="h-10 w-24 bg-gray-400 rounded"></div>
          <div className="h-10 w-24 bg-gray-400 rounded"></div>
        </div>
      </div>
    </>
  );
}

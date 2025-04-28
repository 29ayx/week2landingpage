export default function AdView() {
  return (
    <>
      <div className="border-2 m-6 border-gray-300 flex flex-row rounded-xl">
       
       
        <div className="flex p-6 flex-col gap-8">

          <h1 className="text-4xl">Yash : TodoList Pvt ltd</h1>
          <h1 className="text-md">
            This is the worlds best TodoList Website ever created by humanity proudly owned by Yash Gautam.
          </h1>


          <div className="flex flex-row gap-8">
            <button type="button" className="bg-blue-600 text-white px-7 rounded-md w-32 ">
              Save
            </button>
            <button type="button" className="bg-none px-7 text-gray-500 border-1 rounded-md" >
              Delete Listing
            </button>
          </div>
        </div>



        <div>
          {/* //Picture on the right side */}
          <img
            src="https://i.scdn.co/image/ab6765630000ba8af051fb24077dd90d2489504f"
            alt="Ad IMage for"
            className="w-full h-48 object-cover rounded-xl mt-4 mb-4"
          />
        </div>
      </div>
    </>
  );
}

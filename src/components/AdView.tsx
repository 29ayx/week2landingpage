export default function AdView() {
  return (
    <>
      <div className="border-2 m-6 border-gray-300 flex flex-row rounded-xl">
       
       
        <div className="flex p-6 flex-col gap-8">

          <h1 className="text-4xl">Ayush : TodoList Pvt ltd</h1>
          <h1 className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            itaque ipsum vitae deserunt quis? Ad perspiciatis rerum officiis ab
            eveniet earum explicabo.
          </h1>


          <div className="flex flex-row gap-8">
            <button type="button" className="bg-blue-600 text-white px-7 rounded-md w-32 ">
              Visit
            </button>
            <button type="button" className="bg-none px-7 text-gray-500 border-1 rounded-md" >
              Learn More
            </button>
          </div>
        </div>



        <div>
          {/* //Picture on the right side */}
          <img
            src="https://blog.lulu.com/content/images/2024/12/072120-ToDoList-Blog.png"
            alt="Ad IMage for"
            className="w-full h-48 object-cover rounded-xl mt-4 pr-6"
          />
        </div>
      </div>
    </>
  );
}

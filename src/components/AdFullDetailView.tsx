export default function AdFullDetailView() {
    return (
        <div className="p-5 w-full max-w-3xl">
            <h1 className=" m-6 text-xl font-medium">Add you listing</h1>
            <div className="border-2 m-6 border-gray-300 flex flex-row rounded-xl">
                <div className="flex p-6 flex-col gap-5 mb-8">

                    <h1 className="text-2xl border-2 rounded-md p-1">Ayush : TodoList Pvt ltd</h1>
                    <p className="text-sm">
                        this is the worlds best todo list website every created by humanity, proudly owned by Ayush Singh.
                    </p>


                    <div className="flex flex-row gap-8 mt-20">
                        <button type="button" className="bg-blue-700 hover:bg-blue-800 text-white px-7 rounded-md w-32 ">
                            Save
                        </button>
                        <button type="button" className="bg-none hover:bg-red-50 px-7 text-gray-500 border-1 rounded-md p-2" >
                            Delete Listing
                        </button>
                    </div>
                </div>

                <div>
                    {/* //this is image section  */}
                    <img
                        src="https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg"
                        alt="to-do list image"
                        className="w-full h-70 object-cover rounded-xl mt-4 pr-6 pl-8"
                    />
                </div>
            </div>
        </div>
    )
}
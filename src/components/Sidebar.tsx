export default function Sidebar() {
    return (
        <>
        <div className="flex flex-col min-w-max p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
    
        <div className=" relative border text-2xl font-bold text-center mb-4 p-2 bg-blue-600 text-white rounded-lg flex justify-between items-center">
           <span className="flex-grow text-center" 
           >DEVx Solutions</span> 
           
           <button className="flex flex-justify text-sm bg-white text-blue-600 px-4 py-1 m-3 rounded-lg shadow hover:bg-gray-100 ">
            Add your services
           </button>
        </div>

         <div className=" relative border p-4 py-3 rounded-lg bg-gray-50 mb-4 h-90 max-w-max flex flex-col justify-start">
        <div className="flex flex-col gap-2 mb-4">
            <button className="w-50 p-3 text-left rounded-lg border border-gray-300 hover:bg-blue-50 transition-colors">
                Online Services
            </button>
        <button className="w-50 p-3 text-left rounded-lg border border-gray-300 hover:bg-blue-50 transition-colors">
             Local Services
        </button>
        </div>
        </div>
        

        <div className=" relative top-1/2 bottom-80 transform -transition-y-1/2 p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
            <span className="text-blue-600">Find</span> services in your area
            </h2>
        </div>
       
        </div>
        
        </>
    );
}
export default function FullPage(){
    return(
        
        <div className=" flex flex-col bg-white-200 border border-gray-20 rounded-xl shadow-md overflow-hidden flex justify-center p-8  ">

            {/* Profile section */}
        <div className=" flex flex-row items-start p-2 ">
        <div className="flex flex-col items-center mr-6">
        <img 
   src="https://getwallpapers.com/wallpaper/full/a/3/6/1290740-tony-stark-wallpaper-1920x1080-pictures.jpg"
   alt="profile pic"
   className="w-32 h-32 object-cover rounded-full border-2 border-blue-500 mb-1"
   />
    <button type="button" className=" bg-blue-400 rounded-full py-1 px-1 m-1 text-white font-semibold hover:bg-blue-700 "> 
        Edit Profile

    </button>
    </div>
        <div className="text-center p-5 ">
            <p className="text-xl font-bold text-gray-800">Robert Downey Jr.</p>
            <p className="text-gray-600 text-sm">USA</p>
            <p className="text-gray-500 text-sm">You know who I am  </p>

           
            </div>
        

</div>
<div className="bg blue-600 flex flex-row items-center justify-evenly  flex-grow text-center border border-gray-200   rounded-full ">
        <div>
          <p className="font-bold text-gray-800 text-xl">3</p>
          <p className="text-gray-500 text-sm ">Posts</p>
        </div>
        <div>
          <p className="font-bold text-gray-800 text-xl">58.5M</p>
          <p className="text-gray-500 text-sm">Followers</p>
        </div>
        <div>
          <p className="font-bold text-gray-800 text-xl">171</p>
          <p className="text-gray-500 text-sm">Following</p>
        </div>
        
      </div>
      <div className="flex flex-col">

      <div className="flex flex-wrap justify-start items-center m-3">

        <img className=" w-48 h-32 border rounded m-3" src="https://tse1.mm.bing.net/th?id=OIP.O4Jy7AhDP20PTZmimWI5XwHaEK&pid=Api&P=0&h=180" alt="pic" />
        <img className="w-48 h-32 border rounded m-3" src="http://br.web.img2.acsta.net/pictures/18/06/29/00/35/0101925.jpg" alt="pic" />
        <img className=" w-48 h-32 flex flex-col border rounded m-3 object-cover  " src="https://wallpapercave.com/wp/wp2637032.jpg" alt="pic" />
        
</div>

<div className="flex flex-wrap justify-start items-center m-4 ">
    <img
      className="w-48 h-32 border rounded m-3  object-cover"
      src="https://vistapointe.net/images/robert-downey-jr-9.jpg"
      alt="pic"
    />
    <img
      className="w-48 h-32 border rounded m-3 object-cover"
      src="https://wallpapers.com/images/hd/focused-photography-robert-downey-jr-pjs7jatnx0yfofsc.jpg"
      alt="pic"
    />
    <img
      className="w-48 h-32 border rounded m-3 object-cover"
      src="https://images7.alphacoders.com/114/thumb-1920-1148449.jpg"
      alt="pic"
    />
  </div>
      </div>
</div>
    );
}
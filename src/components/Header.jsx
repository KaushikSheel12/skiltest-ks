import Image from "next/image";
import React, { useState } from "react";
import Counter from "./Counter";


const Header = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };




  return (
    <div className="flex py-4 fixed  px-4 w-full border justify-between overflow-hidden bg-white">
      <div className="flex">
        <Image
          width={80}
          height={35}
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Google_2011_logo.png"
          alt="google"
          className="object-contain"
        />

        <h2 className="ml-10 text-[15px] flex font-semibold ">
          UPSC Civil Services<span className="block md:hidden">....</span><span className="hidden md:block">Prelims CSAT Full Test 4</span>{" "}
        </h2>
      
      </div>

      <div className="border md:flex hidden  px-2 py-0 gap-1 items-center h-10 bg-slate-100 ml-[645px] cursor-pointer "
        onClick={handleFullScreen}
      >
    
        <div className="w-8 h-8">
        <svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg>
        </div>
   
        <button >
      {isFullScreen ? 'Exit Full Screen' : 'Go Full Screen'}
    </button>
      </div>


      <div>

    


        <Counter />
      </div>
    </div>
  );
};

export default Header;

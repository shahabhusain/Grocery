import React, { useState } from "react";
import thumbnail from "../../assets/thumbnail.png";
import { FaPlay } from "react-icons/fa"; // Importing a play icon from react-icons

const Cooporative = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    // background image bg-2
    <div className="bg-2 md:h-[922px] h-[757px] md:mt-32 mt-[352px]">
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto md:gap-24 gap-8 ">
        <h1 className="text-[40px] mt-20">What’s a Cooperative?</h1>
        <p className="text-[22px] font1 font-[400] md:mt-20">
      
At it’s heart, The Front Porch is a cooperative, meaning it’s owned by the very people it serves—our community members. Cooperatives are built on shared values and a commitment to working together for the common good.
        </p>
      </div>

      <div className="md:w-[70%] w-[90%] mx-auto md:mt-52 relative">
        {isPlaying ? (
          <iframe
            className="w-full h-[500px] rounded-lg"
            src="https://www.youtube.com/embed/MxQ9T5ogncI?autoplay=1"
            title="YouTube Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative">
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="w-full h-[500px] cursor-pointer rounded-lg object-contain"
              onClick={() => setIsPlaying(true)}
            />
            {/* Play Icon */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setIsPlaying(true)}
            >
              <FaPlay className="text-white text-6xl cursor-pointer opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cooporative;
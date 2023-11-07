'use client'
import React, { useRef, useEffect } from "react";

interface myComponentProps {
  dictionary: any
}
 
const Header2: React.FC<myComponentProps> = ({dictionary}:{dictionary:any}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative lg:mt-[-141px] md:mt-[-138px]">
      <div className="grid-btn">
        <button className="btn" onClick={handlePlay}>
       Play
        </button>
        <button className="btn-pause" onClick={handlePause}>
          Pause
        </button>
      </div>

      <video   className=" " autoPlay loop muted ref={videoRef}>
        <source src={'/bgvideo.mp4'}  />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold">
      {dictionary.frontHeader.topLine}
      </div>
    </div>
  );
};

export default Header2;
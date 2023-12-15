'use client'
import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

const VideoPlayer = () => {
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="codedog">
      <div>
        <Video
          publicId="videoplayer-demo"
          width="100%"
          controls
          innerRef={videoRef}
        />
      </div>
    </CloudinaryContext>
  );
};

export default VideoPlayer;

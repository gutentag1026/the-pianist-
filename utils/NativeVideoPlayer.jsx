'use client'
import "cloudinary-video-player/dist/cld-video-player.min.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { Cloudinary } from "cloudinary-core";
import { useEffect } from "react";

const NativeVideoPlayer = ({folder,public_id}) => {
  const cld = new Cloudinary({ cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME });
  useEffect(() => {
    const videoPlayer = cld.videoPlayer("video-player", {
      muted: true,
      controls: true
    });
    videoPlayer.source(`${folder}/${public_id}`);
  });
  return (
    <div>
      <video id="video-player" />
    </div>
  );
};
export default NativeVideoPlayer;

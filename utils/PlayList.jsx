'use client'
import { useEffect } from "react";

export default function PlayList({cloudName, mediaAssets}) {
  useEffect(() => {
   console.log('window playvideo',window)
   
        const productGallery = cloudinary.galleryWidget({
            container: "#my-gallery",
            cloudName: cloudName,
            mediaAssets: mediaAssets,
            aspectRatio: "4:3",
            borderWidth: 5,
            border:'black',
            transition: "fade",
            sortProps:{ source: "public_id", direction: "desc" },
            videoProps: {
                  playerType: "cloudinary",
                  showJumpControls: true
                }
          })
          productGallery.render();
    
  }, []);

  return (
    <div className="container" style={{width:'1000px', margin:'0 10px'}}>
      <div className="gallery-container">
        <div id="image-gallery"></div>
      </div>
    </div>
  );
}

'use client'
import { useEffect } from "react";

export default function PlayList({cloudName, mediaAssets}) {
  useEffect(() => {
    console.log('cloudName',cloudName, 'mediaAssets',mediaAssets)
    const productGallery = cloudinary.galleryWidget({
      container: "#image-gallery",
      cloudName: cloudName,
      mediaAssets: mediaAssets,
      aspectRatio: "4:3",
      borderWidth: 5,
      border:'black',
      transition: "fade",
      sortProps:{ source: "public_id", direction: "desc" }
    });

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

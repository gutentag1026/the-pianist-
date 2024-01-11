'use client'
// import cloudinary from '@/utils/cloudinary'
import { useEffect } from "react";

export default function PlayList({cloudName, mediaAssets}) {
  useEffect(() => {
    console.log('cloudName',cloudName, 'mediaAssets',mediaAssets)
    if (window.cloudinary && window.cloudinary.galleryWidget){
    const productGallery = cloudinary.galleryWidget({
      container: "#my-gallery",
      cloudName: cloudName,
      mediaAssets: mediaAssets,
      aspectRatio: "4:3",
      borderWidth: 5,
      border:'black',
      transition: "fade",
      carouselLocation: "bottom",
      sortProps:{ source: "public_id", direction: "desc" },
      videoProps:{ controls:"all", sound:true}
    });

    productGallery.render();
  }
  }, []);

  return <div style={{width:'1000px', margin:'0 10px'}}>
            <div id="my-gallery"></div>
          </div>    
}

import React from 'react'
import { Suspense } from 'react'
import { getAssets } from '../biography/page'
import PlayList from '../../utils/PlayList'

export default async function Videos() {
    const videos = await getAssets('CLOUDINARY_VIDEO_FOLDER')
    console.log(videos)
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    const mediaAssets = videos.map(v => {
        return {
            mediaType: "video", 
            publicId: v.public_id,
            transformation: { background: "black" } 
        }
    })
   
    return (<>
    <script
      src="https://product-gallery.cloudinary.com/all.js"
      type="text/javascript"
      defer
      >
    </script>
        <Suspense fallback={<p>loading...</p>}>
      
        <PlayList cloudName={cloudName} mediaAssets={mediaAssets} />
            {/* <div className="flex  min-h-screen flex-col px-12"> */}
             {/* <div className="gap-12 columns-6 px-12">  */}
        {/* {
            videos.map(({ id, public_id, format, width, height }) => { 

                return <VideoPlayer key={id} public_id={public_id} cloudName={cloudName} width={width} height={height} format={format} /> })
        }  */}
         
          
                {/* </div> */}
            {/* </div> */}

        </Suspense>
        
         </>
    )
}
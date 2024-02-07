import React from 'react'
import { Suspense } from 'react'
import { getAssets } from '../biography/page'
import PlayList from '../../utils/PlayList'

export default async function Videos() {
    const videos = await getAssets('CLOUDINARY_VIDEO_FOLDER')
   // console.log(videos)
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    const mediaAssets = videos.map(v => {
        return {
            mediaType: "video", 
            publicId: v.public_id,
            transformation: { background: "black" } 
        }
    })
   
    return (<>
                <Suspense fallback={<p>loading...</p>}>
                        <PlayList cloudName={cloudName} mediaAssets={mediaAssets} />
                </Suspense> 
                <script
                    src="https://product-gallery.cloudinary.com/all.js"
                    type="text/javascript"
                >
                </script>
            </>
    )
}
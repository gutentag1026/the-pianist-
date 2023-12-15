import { Suspense } from 'react'
import { getAssets } from '../biography/page'
import dynamic from "next/dynamic"
import VideoPlayer from '../../utils/VideoPlayer'

const DynamicVideo = dynamic(
    () => import('../../utils/NativeVideoPlayer'),
    { ssr: false }
  );
export default async function Videos({ params }) {
    const videos = await getAssets('CLOUDINARY_VIDEO_FOLDER')
    return (
        <Suspense fallback={<p>loading...</p>}>
            <div className="gap-2">  
                 {videos.map(({ id, public_id, format}) => {
              //    let url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/c_scale,w_720/${public_id}.${format}`

            // <Link
            //   key={id}
            //   href={`/?photoId=${id}`}
            //   as={`/p/${id}`}
            //   ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
            //   shallow
            //   className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            // >
            
           return <DynamicVideo key={id} folder='videos'  public_id={public_id} />
            // <videoPlayer
            //     key={id}
            //     alt="pianist working photo"
            //     className="transform brightness-90 transition will-change-auto group-hover:brightness-110 my-2"
            //     style={{ transform: 'translate3d(0, 0, 0)' }}
            //     // placeholder="blur"
            //     // blurDataURL={blurDataUrl}
            //     src={url}
            //     // width={720}
            //     // height={480}
            //     qiality={100}
            //     sizes="(max-width: 640px) 100vw,
            //       (max-width: 1280px) 50vw,
            //       (max-width: 1536px) 33vw,
            //       25vw"
            //   />
            // </Link>
                 })}
            </div>
        </Suspense>
    )
}
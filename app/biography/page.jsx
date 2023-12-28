import cloudinary from "@/utils/cloudinary"

// import getBase64ImageUrl from "@/utils/generateBlurPlaceholder"

const biography =[{key:1,content:"Talented pianist, Wendy performs in various occasions, such as luxury hotels(Shangrila West, St. Regis, The Longemont), IP Mall, Residence of Consul General at the  Austrian Consulate General in Shanghai, Flower Expo in Chongming Island, Peace Lutheran in San Jose and many others."},
{key:2,content:"A full-fleged pianist, as much in her broad repertoires as in her personal way of presenting the works of Chopin with genuinely poetic touch and the works of romantic period artist with deeply expressive intepretation and baroque with logic and energetic spirit."},{key:3,content:"2020 saw Aurora, the first neo-classic band started by Wendy. The band's members comes from 3 continents, 4 countries. With one vocal and guitarist, a keyboard, a bass and a drummer."}]

async function getData() {
    return biography
}

export default async function Biography() {
    const data = await getData()
    const images = await getAssets('CLOUDINARY_IMAGE_FOLDER')

    return <div className="flex min-h-screen flex-col px-12">
    
            <div className="overflow-y-auto h-[70vh] w-full grid grid-cols-7 gap-4">
        
                  {images.map(({ id, public_id, format, width, height}) => {
                   const ratio = width > height
                   const url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}.${format}`
                   return ratio ? <div key={id}  className="grid grid-cols-subgrid gap-4 col-span-2">
                      <div key={id} className={`my-0 flex items-center`}>
                        <img src={url} alt="pianist" />
                      </div>
                    </div> : <div key={id} className={`flex items-center`}>
                    <img src={url} alt="pianist" />
                   </div>
                 })}
       
             </div>
             <div className="flex flex-row justify-between gap-24 py-12">
                     { data.map(d => {
                         return <div key={d.key}>{d.content}</div>
                     }) }
             </div>  
   
     </div> 
}

export async function getAssets(folder) {
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env[folder]}/*`)
      .sort_by('public_id', 'desc')
      .max_results(100)
      .execute()
    let reducedResults = []
  
    let i = 0
    for (let result of results.resources) {
      reducedResults.push({
        id: i,
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format,
      })
      i++
    }
  
    // const blurImagePromises = results.resources.map((image) => {
    //   return getBase64ImageUrl(image)
    // })

    // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)
  
    // for (let i = 0; i < reducedResults.length; i++) {
    //   reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
    // }
  
    return reducedResults 
  }
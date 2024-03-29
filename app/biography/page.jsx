import cloudinary from "@/utils/cloudinary"
import { MongoClient } from "mongodb"
// import getBase64ImageUrl from "@/utils/generateBlurPlaceholder"

//  const bio =[{key:1,content:"Talented pianist, Wendy performs in various occasions, such as luxury hotels(Shangrila West, St. Regis, The Longemont), IP Mall, Residence of Consul General at the  Austrian Consulate General in Shanghai, Flower Expo in Chongming Island, Peace Lutheran in San Jose and many others."},
//  {key:2,content:"A full-fleged pianist, as much in her broad repertoires as in her personal way of presenting the works of Chopin with genuinely poetic touch and the works of romantic period artist with deeply expressive intepretation and baroque with logic and energetic spirit."},
//  {key:3,content:"2020 saw Aurora, the first neo-classic band started by Wendy. The band's members comes from 3 continents, 4 countries. With one vocal and guitarist, a keyboard, a bass and a drummer."}]
 
async function getData() {
  try {
    const connect = process.env.MONGODB_URI
    const client = new MongoClient(connect);
    // Get the database and collection on which to run the operation
    const database = client.db("pianist");
    const biography = database.collection("biography")
    const cursor = biography.find()
    const res = await cursor.toArray()
    client.close()
    return res
  }
  catch(e){
    console.log(e) 
  }
}

export default async function Biography() {
    const data = await getData()
    // console.log('bio',data)
    const images = await getAssets('CLOUDINARY_IMAGE_FOLDER')

    return <div className="flex min-h-screen flex-col px-1 md:px-12">
    
            <div className="overflow-y-auto h-[45vh] md:h-[70vh] w-full grid grid-cols-1 my-3 md:my-0 md:grid-cols-7 gap-0 md:gap-4">
        
                  {images.map(({ id, public_id, format, width, height}) => {
                   const ratio = width > height
                   const url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}.${format}`
                   return ratio ? <div key={id}  className="grid md:grid-cols-subgrid gap-1 md:gap-4 col-span-1 md:col-span-2">
                      <div key={id} className={`my-0 flex items-center`}>
                        <img src={url} alt="pianist" />
                      </div>
                    </div> : <div key={id} className={`flex items-center my-1 md:my-0`}>
                    <img src={url} alt="pianist" />
                   </div>
                 })}
       
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-12 py-5 md:py-12">
                     { data.map(d => {
                         return <div key={d._id}><p class="text-xs md:text-base">{d.content}</p></div>
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
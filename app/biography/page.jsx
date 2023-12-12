import styles from './biography.module.css'
const biography =[{key:1,content:"Talented pianist, Wendy performs in various occasions, such as luxury hotels(Shangrila West, St. Regis, The Longemont Shanghai), IP Mall, Residence of Consul General at the  Austrian Consulate General in Shanghai, Flower Expo in Chongming Island, Peace Lutheran in San Jose and many others."},
{key:2,content:"A full-fleged pianist, as much in her broad repertoires as in her personal way of presenting the works of Chopin with genuinely poetic touch and the works of romantic period artist with deeply expressive intepretation and baroque with logic and energetic spirit."},{key:3,content:"2020 saw Aurora, the first neo-classic band started by Wendy. The band's members comes from 3 continents, 4 countries. With one vocal and guitarist, a keyboard, a bass and a drummer."}]

async function getData() {
    return biography
}

const itemData = [
    {key:1,img:"/img/spa2.jpg", title:'Shimao Riviera', subtitle:'Lujiazui', className:"w-full aspect-auto mb-6"},
    {key:2,img:"/img/spa1.jpg",className:"w-full aspect-auto mb-6"},

    {key:3,img:"/img/drawing room side.jpg", title:'St Regis', subtitle:'Jingan',className:"w-full aspect-auto mb-6"},
    {key:4,img:"/img/St Regis.jpg",className:"w-full aspect-auto mb-6"},
    {key:7,img:"/img/st regis grand.jpg",className:"w-full aspect-auto mb-6"},
    {key:5,img:"/img/shangrila side.jpg",className:"w-full aspect-auto mb-6"},
    {key:6,img:"/img/drawing room.png",className:"w-full aspect-auto mb-6"},
   
    {key:8,img:"/img/tea.jpg",className:"w-full aspect-auto mb-6"},
    {key:9,img:"/img/IP Mall.png",title:'IP Mall', subtitle:'Banquet in loving memory of Teresa Teng',className:"w-full aspect-auto mb-6"},

    {key:10,img:"/img/band.jpg",className:"w-full aspect-auto mb-6"},
    {key:11,img:"/img/shangrila.jpg",className:"w-full aspect-auto mb-6"},
    {key:12,img:"/img/home.jpg",className:"w-full aspect-auto mb-6"},
];

export default async function Biography() {
    const data = await getData()
    return ( <div className="flex  min-h-screen flex-col px-12">
                <div className="gap-2 columns-6">
                    
                    { itemData.map((item) => (<img className={item.className} key={item.key} src={item.img} />))}
                </div>
          
            
                <div className="flex  min-h-screen flex-row justify-between gap-24 py-12">
                    { data.map(d => {
                        return <div key={d.key}>{d.content}</div>
                    }) }
                </div>
            </div>
        )
  }
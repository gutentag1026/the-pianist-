import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { AvatarDemo } from "./avatar"
  export function AccordionDemo({repertoires}) {
    const composer = Object.keys(repertoires)
    return composer.map((c,i) => {
        const artist = c.split(':')[0]
        const desc = c.split(':')[1]
        return <Accordion key={artist} type="single" collapsible className="w-full" defaultValue="Johann Sebastian Bach">
        <AccordionItem value={artist}>
          <AccordionTrigger>
            <AvatarDemo src={`./composer/${artist}.jpeg`} artist={artist} />
           <div className="flex flex-col items-center justify-between">
            <div>{artist}</div> 
            <small className="text-sm font-medium leading-none mt-1">{desc}</small>
           </div>
         </AccordionTrigger>
          <AccordionContent>
          {
                Object.keys(repertoires[c]).map(genre => {            
                    return <ul key={genre}>{genre}
                                {
                                  repertoires[c][genre].map(work => {
                                    {
                                          return <ul key={Object.keys(work)} className="my-2 ml-6 [&>li]:mt-2">
                                              <li>{Object.keys(work)}</li>
                                              <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                                {
                                                  work[Object.keys(work)].map(piece=>{
                                                    return <li key={piece}>{piece}</li>
                                                  })
                                                }
                                              </ul>
                                          </ul>
                                    }
                                  })
                                }
                              </ul>
                          })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    })
  }
  

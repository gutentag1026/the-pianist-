'use client'
import React from 'react'
import { Video, Transformation } from "cloudinary-react";

export default async function VideoPlayer({ public_id, cloudName, width, height, format}) {
       return <Video 
                        publicId={public_id}
                        cloudName={cloudName}
                        secure="true"
                        width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                        controls
                        fallbackContent="Your browser does not support HTML5 video tags."
                        format="webm"
                    >
                        {/* <Transformation   
                            width={72}
                            height={48} 
                        /> */}
                    </Video>
    }
                

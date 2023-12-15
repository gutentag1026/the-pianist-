import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import CldUploadButton from "./CldUploadButton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div slassName="flex gap-10"><Navbar /></div>
     <CldUploadButton />
     </main>
  )
}

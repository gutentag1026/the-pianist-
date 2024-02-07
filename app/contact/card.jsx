import Image from "next/image"
const Github = () => {
    return <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="./github.svg"
            alt="Github Logo"
            width={50}
            height={37}
            priority
        />
    }
const Email = () => {
    return <Image
    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    src="./mail.svg"
    alt="envelope closed"
    width={50}
    height={37}
    priority
/>
}
export function Card({Title,subTitle}) {
    return ( <div className="w-62 h-62 my-5 md:mx-20 rounded-xl border lg:border-none bg-card text-card-foreground shadow"
      >
        <div className="flex flex-col items-center p-6">
        {  Title === "Email:" ? <Email /> : Title === "Github:" ? <Github /> : null}
         <p class="text-xs md:text-base">{Title}</p>
          <br /><br />
          {Title === 'Chat:' ? <Image src="./contact/qr.png" alt="Image" width={50} height={37} className="rounded-md object-cover" /> : <p class="text-xs md:text-base">{subTitle}</p>}
        </div>
      </div>)
}

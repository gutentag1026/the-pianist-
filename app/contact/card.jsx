import Image from "next/image"
const Github = () => {
    return <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/github.svg"
            alt="Github Logo"
            width={150}
            height={37}
            priority
        />
    }
const Email = () => {
    return <Image
    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    src="/mail.svg"
    alt="envelope closed"
    width={150}
    height={37}
    priority
/>
}
export function Card({Title,subTitle}) {
    return ( <div
        className="w-72 h-72 m-24 rounded-xl border bg-card text-card-foreground shadow"
      >
        <div className="flex flex-col items-center p-6">
        {  Title === "Email:" ? <Email /> : Title === "Github:" ? <Github /> : null}
         <p>{Title}</p>
          <br /><br />
          {Title === 'QR:' ? <Image src="/contact/qr.png" alt="Image" width={100} height={100} className="rounded-md object-cover" /> : <p>{subTitle}</p>}
        </div>
      </div>)
}
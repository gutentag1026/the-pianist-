import { Card } from "./card"

export default function Contact() {
    return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
     <Card Title="Email:" subTitle="huanghuang5087@hotmail.com" />
     <Card Title="Chat:" subTitle="I can fly anywhere" />
     <Card Title="Github:" subTitle="https://github.com/gutentag1026" />
    </div>
    )
  }
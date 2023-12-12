import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo({src, artist}){
    return <Avatar>
        <AvatarImage src={src} />
        <AvatarFallback>{artist}</AvatarFallback>
    </Avatar>
}


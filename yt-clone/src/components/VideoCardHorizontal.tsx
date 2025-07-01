import { useRouter } from "next/router"
import type { VIDEOS } from "../components/VideoCardGrid"
import { Line } from "./Line"

export const VideoCardHorizontal = ({video}: {video: typeof VIDEOS[0]}) => {
    const router = useRouter();
    return <div className="cursor-pointer grid grid-cols-12 p-2">
        <div className="rounded-xl overflow-hidden col-span-5">
            <div>
                <img src ={video.ThumbImage} />
                <Line progress={10} />
            </div>
        </div>
        <div className="col-span-7 pl-2">
            <div className={"text-white-800 text-sm font-medium pb-2"}>
                {video.title}
            </div>
            
           
            
        </div>
    </div>
}
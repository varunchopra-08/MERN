import {VIDEOS} from './VideoCardGrid';
import {useRouter} from 'next/router';



export function VideoCard({video}: {video: typeof VIDEOS[0]}) {
    const router = useRouter();
    const handleClick =()=>
    {
        router.push(`/video/${video.id}`);
    }
    return <div onClick={handleClick} className="curser-pointer">
        
        <img src = {video.ThumbImage}/>
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <br/>
            </div>
            
            <div className = "col-span-2">
                <img src = {video.logo} className="rounded-full h-12 w-12" />
            </div>
            <div className = "col-span-10">
                {video.title}
            </div> 
            <div className = "col-span-10 col-start-3 text-gray-500">
                {video.channel}
            </div>
            <div className = "col-span-10 col-start-3 text-gray-500">
                {video.views} • {video.timeAgo}
            </div>
         </div>
    </div>
}
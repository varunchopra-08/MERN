import { Inter } from 'next/font/google'
import {VideoCard} from '@/components/VideoCard'
import { VideoCardGrid } from '@/components/VideoCardGrid';
import App from './_app';
import { LeftBar } from '../components/LeftBar';
import { Appbar } from '../components/AppBar';
const inter = Inter({subsets: ['latin']})
export default function Home() {
  return (
    
    
    
    <main>
      
      <Appbar />
      <div className="flex">
        <LeftBar />
        <VideoCardGrid />
      </div>
    

    </main>
  );
}


// export default function Home() {
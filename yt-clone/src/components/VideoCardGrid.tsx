export const VIDEOS = [
    {
        id: 1,
        title: "Childhood, Goa Party Stories & Real Thoughts on Shark Tank | Aman Gupta | #PGX105",
        channel: "Prakhar Gupta (Prakhar ke Pravachan)",
        views: "149K views",
        timeAgo: "17 hours ago",
        ThumbImage: "./photo.jpg",
        logo: "./logo.jpg"
    },
    {
        id: 2,
        title: "Understanding React Hooks in Depth",
        channel: "Tech Guru",
        views: "200K views",
        timeAgo: "2 days ago",
        ThumbImage: "./photo.jpg",
        logo: "./logo.jpg"
    },
    {
        id: 3,
        title: "Mastering CSS Grid Layouts",
        channel: "Web Design Mastery",
        views: "300K views",
        timeAgo: "1 week ago",
        ThumbImage: "./photo.jpg",
        logo: "./logo.jpg"
    },
    {
        id: 4,
        title: "JavaScript ES2023 Features Explained",
        channel: "Code Academy",
        views: "250K views",
        timeAgo: "3 days ago",
        ThumbImage: "./photo.jpg",
        logo: "./logo.jpg"
    },
    
    // Add more video objects as needed
];
import React from 'react';
import { VideoCard } from './VideoCard';    

export function VideoCardGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {VIDEOS.map((video) => (
                <VideoCard
                    key={video.id}
                    video={video}
                />
            ))}
        </div>
    );
}
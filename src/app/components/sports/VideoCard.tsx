import React from 'react';
import { Video } from '../../types/sports';
import { Card } from '../ui/card';
import { Play, Eye, Clock } from 'lucide-react';

interface VideoCardProps {
  video: Video;
  onClick?: () => void;
}

export function VideoCard({ video, onClick }: VideoCardProps) {
  const categoryColors = {
    highlights: 'bg-red-500',
    interview: 'bg-purple-500',
    replay: 'bg-blue-500',
    analysis: 'bg-green-500'
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(0)}K`;
    return views.toString();
  };

  return (
    <Card 
      className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all hover:scale-105 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative bg-gray-900 aspect-video flex items-center justify-center group">
        <div className="text-6xl">{video.thumbnail}</div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
            <Play className="h-8 w-8 text-gray-900 ml-1" />
          </div>
        </div>
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        {/* Category Badge */}
        <div className={`absolute top-2 left-2 ${categoryColors[video.category]} text-white text-xs px-2 py-1 rounded uppercase font-bold`}>
          {video.category}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2">
          {video.title}
        </h3>
        <div className="flex items-center gap-3 text-gray-400 text-xs">
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span>{formatViews(video.views)} views</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{video.uploadDate}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

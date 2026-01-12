import React from 'react';
import { NewsItem } from '../../types/sports';
import { Card } from '../ui/card';
import { Clock, TrendingUp } from 'lucide-react';

interface NewsCardProps {
  news: NewsItem;
  onClick?: () => void;
}

export function NewsCard({ news, onClick }: NewsCardProps) {
  const categoryColors = {
    breaking: 'bg-red-500',
    match: 'bg-blue-500',
    transfer: 'bg-green-500',
    interview: 'bg-purple-500'
  };

  return (
    <Card 
      className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="flex gap-4 p-4">
        {/* Icon/Image */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-4xl">
            {news.image}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Category and Breaking Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className={`${categoryColors[news.category]} text-white text-xs px-2 py-1 rounded uppercase font-bold`}>
              {news.category}
            </span>
            {news.isBreaking && (
              <div className="flex items-center gap-1 bg-red-500 text-white text-xs px-2 py-1 rounded animate-pulse">
                <TrendingUp className="h-3 w-3" />
                <span className="font-bold">BREAKING</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">
            {news.title}
          </h3>

          {/* Summary */}
          <p className="text-gray-400 text-sm mb-2 line-clamp-2">
            {news.summary}
          </p>

          {/* Timestamp */}
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Clock className="h-3 w-3" />
            <span>{news.timestamp}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

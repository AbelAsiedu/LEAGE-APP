import React, { useState } from 'react';
import { videos } from '../../data/sportsData';
import { VideoCard } from '../../components/sports/VideoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Video, Film, Mic, BarChart3 } from 'lucide-react';

export function MultimediaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredVideos = selectedCategory
    ? videos.filter(v => v.category === selectedCategory)
    : videos;

  const categories = [
    { value: 'highlights', label: 'Highlights', icon: Video, color: 'text-red-500' },
    { value: 'replay', label: 'Full Replays', icon: Film, color: 'text-blue-500' },
    { value: 'interview', label: 'Interviews', icon: Mic, color: 'text-purple-500' },
    { value: 'analysis', label: 'Analysis', icon: BarChart3, color: 'text-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Video className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold text-white">Media Center</h1>
          </div>
          <p className="text-gray-400">
            Watch highlights, interviews, replays, and exclusive content
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Videos
            </button>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Video */}
        {!selectedCategory && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Featured</h2>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="relative bg-gray-900 aspect-video flex items-center justify-center group cursor-pointer">
                <div className="text-8xl">{videos[0].thumbnail}</div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                    <Video className="h-10 w-10 text-gray-900 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded">
                  {videos[0].duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white flex-1">
                    {videos[0].title}
                  </h3>
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded uppercase font-bold ml-4">
                    Featured
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span>{videos[0].views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>{videos[0].uploadDate}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">
              {selectedCategory 
                ? categories.find(c => c.value === selectedCategory)?.label 
                : 'All Videos'
              }
            </h2>
            <span className="text-gray-400 text-sm">
              {filteredVideos.length} videos
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* Video Categories Info */}
        {!selectedCategory && (
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const count = videos.filter(v => v.category === cat.value).length;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-750 transition-colors text-left"
                >
                  <Icon className={`h-8 w-8 ${cat.color} mb-3`} />
                  <h3 className="text-white font-bold text-lg mb-1">{cat.label}</h3>
                  <p className="text-gray-400 text-sm">{count} videos available</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

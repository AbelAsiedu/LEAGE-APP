import React from 'react';
import { useNavigate } from 'react-router-dom';
import { matches, newsItems } from '../../data/sportsData';
import { MatchCard } from '../../components/sports/MatchCard';
import { NewsCard } from '../../components/sports/NewsCard';
import { TrendingUp, Flame } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();
  
  const liveMatches = matches.filter(m => m.status === 'live');
  const upcomingMatches = matches.filter(m => m.status === 'scheduled').slice(0, 3);
  const breakingNews = newsItems.filter(n => n.isBreaking);
  const recentNews = newsItems.filter(n => !n.isBreaking);

  return (
    <div className="min-h-screen bg-gray-950 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="h-8 w-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-white">Live Updates</h1>
          </div>
          <p className="text-gray-400">
            Real-time scores, breaking news, and all the action from the league
          </p>
        </div>

        {/* Breaking News */}
        {breakingNews.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-6 w-6 text-red-500" />
              <h2 className="text-xl font-bold text-white">Breaking News</h2>
            </div>
            <div className="space-y-4">
              {breakingNews.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
        )}

        {/* Live Matches */}
        {liveMatches.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </div>
                Live Matches
              </h2>
              <button
                onClick={() => navigate('/live')}
                className="text-blue-500 hover:text-blue-400 text-sm font-medium"
              >
                View All
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {liveMatches.map(match => (
                <MatchCard 
                  key={match.id} 
                  match={match}
                  onClick={() => navigate(`/live/${match.id}`)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Matches */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Upcoming Matches</h2>
            <button
              onClick={() => navigate('/events')}
              className="text-blue-500 hover:text-blue-400 text-sm font-medium"
            >
              See Schedule
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>

        {/* Recent News */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Latest News</h2>
          </div>
          <div className="space-y-4">
            {recentNews.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

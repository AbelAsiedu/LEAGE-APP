import React from 'react';
import { Match } from '../../types/sports';
import { LiveIndicator } from './LiveIndicator';
import { Card } from '../ui/card';
import { Clock, MapPin } from 'lucide-react';

interface MatchCardProps {
  match: Match;
  onClick?: () => void;
}

export function MatchCard({ match, onClick }: MatchCardProps) {
  const isLive = match.status === 'live';
  const isFinished = match.status === 'finished';
  
  return (
    <Card 
      className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="p-4">
        {/* Match Status */}
        <div className="flex items-center justify-between mb-4">
          {isLive ? (
            <LiveIndicator />
          ) : (
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="h-4 w-4" />
              <span>{isFinished ? 'Full Time' : `${match.date} • ${match.time}`}</span>
            </div>
          )}
          <span className="text-gray-500 text-sm">{match.round}</span>
        </div>

        {/* Teams and Score */}
        <div className="space-y-4">
          {/* Home Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div 
                className="text-3xl w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${match.homeTeam.color}20` }}
              >
                {match.homeTeam.logo}
              </div>
              <span className="font-semibold text-white text-lg">{match.homeTeam.name}</span>
            </div>
            <span className="text-3xl font-bold text-white ml-4">{match.homeScore}</span>
          </div>

          {/* Away Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div 
                className="text-3xl w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${match.awayTeam.color}20` }}
              >
                {match.awayTeam.logo}
              </div>
              <span className="font-semibold text-white text-lg">{match.awayTeam.name}</span>
            </div>
            <span className="text-3xl font-bold text-white ml-4">{match.awayScore}</span>
          </div>
        </div>

        {/* Live Minute */}
        {isLive && match.liveMinute && (
          <div className="mt-4 text-center">
            <span className="inline-block bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm font-bold">
              {match.liveMinute}'
            </span>
          </div>
        )}

        {/* Venue */}
        <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
          <MapPin className="h-4 w-4" />
          <span>{match.venue}</span>
        </div>
      </div>
    </Card>
  );
}

import React from 'react';
import { Player } from '../../types/sports';
import { teams } from '../../data/sportsData';
import { Card } from '../ui/card';
import { Star } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  onClick?: () => void;
}

export function PlayerCard({ player, onClick }: PlayerCardProps) {
  const team = teams.find(t => t.id === player.teamId);
  
  return (
    <Card 
      className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5">
        {/* Player Photo and Number */}
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-4xl"
            style={{ backgroundColor: team ? `${team.color}20` : '#374151' }}
          >
            {player.photo}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-lg">{player.name}</h3>
              <span 
                className="text-white font-bold text-sm px-2 py-0.5 rounded"
                style={{ backgroundColor: team?.color || '#6B7280' }}
              >
                #{player.number}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{player.position}</p>
            {team && <p className="text-gray-500 text-xs">{team.name}</p>}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="text-center bg-gray-900/50 rounded-lg p-2">
            <div className="text-green-500 text-xl font-bold">{player.goals}</div>
            <div className="text-gray-400 text-xs uppercase">Goals</div>
          </div>
          <div className="text-center bg-gray-900/50 rounded-lg p-2">
            <div className="text-blue-500 text-xl font-bold">{player.assists}</div>
            <div className="text-gray-400 text-xs uppercase">Assists</div>
          </div>
          <div className="text-center bg-gray-900/50 rounded-lg p-2">
            <div className="text-purple-500 text-xl font-bold">{player.appearances}</div>
            <div className="text-gray-400 text-xs uppercase">Apps</div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 bg-yellow-500/20 rounded-lg p-2">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="text-yellow-500 font-bold">{player.rating}</span>
          <span className="text-gray-400 text-sm">Rating</span>
        </div>
      </div>
    </Card>
  );
}

import React from 'react';
import { Team } from '../../types/sports';
import { Card } from '../ui/card';
import { Trophy } from 'lucide-react';

interface TeamCardProps {
  team: Team;
  onClick?: () => void;
}

export function TeamCard({ team, onClick }: TeamCardProps) {
  return (
    <Card 
      className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        {/* Team Logo and Ranking */}
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center text-5xl"
            style={{ backgroundColor: `${team.color}20` }}
          >
            {team.logo}
          </div>
          <div className="flex items-center gap-1 bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full">
            <Trophy className="h-4 w-4" />
            <span className="font-bold">#{team.ranking}</span>
          </div>
        </div>

        {/* Team Name */}
        <h3 className="font-bold text-white text-xl mb-4">{team.name}</h3>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="text-center">
            <div className="text-green-500 text-2xl font-bold">{team.wins}</div>
            <div className="text-gray-400 text-xs uppercase">Wins</div>
          </div>
          <div className="text-center">
            <div className="text-gray-400 text-2xl font-bold">{team.draws}</div>
            <div className="text-gray-400 text-xs uppercase">Draws</div>
          </div>
          <div className="text-center">
            <div className="text-red-500 text-2xl font-bold">{team.losses}</div>
            <div className="text-gray-400 text-xs uppercase">Losses</div>
          </div>
          <div className="text-center">
            <div className="text-blue-500 text-2xl font-bold">{team.points}</div>
            <div className="text-gray-400 text-xs uppercase">Points</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

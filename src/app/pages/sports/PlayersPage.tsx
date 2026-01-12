import React, { useState } from 'react';
import { players } from '../../data/sportsData';
import { PlayerCard } from '../../components/sports/PlayerCard';
import { Card } from '../../components/ui/card';
import { User, Target, Users, Award } from 'lucide-react';

export function PlayersPage() {
  const [filterPosition, setFilterPosition] = useState<string | null>(null);

  const positions = ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'];
  
  const filteredPlayers = filterPosition
    ? players.filter(p => p.position === filterPosition)
    : players;

  const topScorers = [...players].sort((a, b) => b.goals - a.goals).slice(0, 5);
  const topAssisters = [...players].sort((a, b) => b.assists - a.assists).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-950 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <User className="h-8 w-8 text-cyan-500" />
            <h1 className="text-3xl font-bold text-white">Players</h1>
          </div>
          <p className="text-gray-400">
            Browse player profiles, stats, and performance data
          </p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Top Scorers */}
          <Card className="bg-gray-800 border-gray-700">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Target className="h-6 w-6 text-green-500" />
                Top Scorers
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topScorers.map((player, idx) => (
                  <div
                    key={player.id}
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-900 hover:bg-gray-750 transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center font-bold text-gray-500">
                      {idx + 1}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                      {player.photo}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{player.name}</div>
                      <div className="text-sm text-gray-400">{player.position}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-500">{player.goals}</div>
                      <div className="text-xs text-gray-400">Goals</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Top Assisters */}
          <Card className="bg-gray-800 border-gray-700">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-500" />
                Top Assist Providers
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topAssisters.map((player, idx) => (
                  <div
                    key={player.id}
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-900 hover:bg-gray-750 transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center font-bold text-gray-500">
                      {idx + 1}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                      {player.photo}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{player.name}</div>
                      <div className="text-sm text-gray-400">{player.position}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-500">{player.assists}</div>
                      <div className="text-xs text-gray-400">Assists</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Position Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilterPosition(null)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filterPosition === null
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Players
            </button>
            {positions.map(position => (
              <button
                key={position}
                onClick={() => setFilterPosition(position)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filterPosition === position
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {position}s
              </button>
            ))}
          </div>
        </div>

        {/* Players Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">
              {filterPosition ? `${filterPosition}s` : 'All Players'}
            </h2>
            <span className="text-gray-400 text-sm">
              {filteredPlayers.length} players
            </span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-green-600 to-emerald-600 border-0 p-6">
            <Target className="h-8 w-8 text-white mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {players.reduce((sum, p) => sum + p.goals, 0)}
            </div>
            <div className="text-green-100">Total Goals Scored</div>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 border-0 p-6">
            <Users className="h-8 w-8 text-white mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {players.reduce((sum, p) => sum + p.assists, 0)}
            </div>
            <div className="text-blue-100">Total Assists</div>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 p-6">
            <User className="h-8 w-8 text-white mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{players.length}</div>
            <div className="text-purple-100">Total Players</div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 border-0 p-6">
            <Award className="h-8 w-8 text-white mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {(players.reduce((sum, p) => sum + p.rating, 0) / players.length).toFixed(1)}
            </div>
            <div className="text-yellow-100">Average Rating</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

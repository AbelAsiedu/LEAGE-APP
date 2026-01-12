import React from 'react';
import { useNavigate } from 'react-router-dom';
import { teams } from '../../data/sportsData';
import { TeamCard } from '../../components/sports/TeamCard';
import { Card } from '../../components/ui/card';
import { Users, Trophy, TrendingUp } from 'lucide-react';

export function TeamsPage() {
  const navigate = useNavigate();

  const sortedTeams = [...teams].sort((a, b) => a.ranking - b.ranking);

  return (
    <div className="min-h-screen bg-gray-950 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-8 w-8 text-purple-500" />
            <h1 className="text-3xl font-bold text-white">Teams</h1>
          </div>
          <p className="text-gray-400">
            Explore all teams in the league and their statistics
          </p>
        </div>

        {/* Standings Table */}
        <Card className="bg-gray-800 border-gray-700 mb-8 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              League Standings
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900">
                <tr>
                  <th className="text-left px-6 py-3 text-gray-400 text-sm font-semibold">Rank</th>
                  <th className="text-left px-6 py-3 text-gray-400 text-sm font-semibold">Team</th>
                  <th className="text-center px-6 py-3 text-gray-400 text-sm font-semibold">Played</th>
                  <th className="text-center px-6 py-3 text-gray-400 text-sm font-semibold">Won</th>
                  <th className="text-center px-6 py-3 text-gray-400 text-sm font-semibold">Draw</th>
                  <th className="text-center px-6 py-3 text-gray-400 text-sm font-semibold">Lost</th>
                  <th className="text-center px-6 py-3 text-gray-400 text-sm font-semibold">Points</th>
                  <th className="text-center px-6 py-3 text-gray-400 text-sm font-semibold">Form</th>
                </tr>
              </thead>
              <tbody>
                {sortedTeams.map((team, idx) => {
                  const played = team.wins + team.losses + team.draws;
                  return (
                    <tr
                      key={team.id}
                      onClick={() => navigate(`/teams/${team.id}`)}
                      className="border-t border-gray-700 hover:bg-gray-750 cursor-pointer transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {idx < 3 && <Trophy className="h-4 w-4 text-yellow-500" />}
                          <span className="text-white font-bold">{team.ranking}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-2xl"
                            style={{ backgroundColor: `${team.color}20` }}
                          >
                            {team.logo}
                          </div>
                          <span className="text-white font-semibold">{team.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-300">{played}</td>
                      <td className="px-6 py-4 text-center text-green-500 font-semibold">{team.wins}</td>
                      <td className="px-6 py-4 text-center text-gray-400 font-semibold">{team.draws}</td>
                      <td className="px-6 py-4 text-center text-red-500 font-semibold">{team.losses}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full font-bold">
                          {team.points}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-1">
                          {['W', 'W', 'D', 'W', 'L'].map((result, i) => (
                            <div
                              key={i}
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                result === 'W' ? 'bg-green-500 text-white' :
                                result === 'D' ? 'bg-gray-500 text-white' :
                                'bg-red-500 text-white'
                              }`}
                            >
                              {result}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Teams Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-4">All Teams</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTeams.map(team => (
            <TeamCard 
              key={team.id} 
              team={team}
              onClick={() => navigate(`/teams/${team.id}`)}
            />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-green-600 to-emerald-600 border-0 p-6">
            <TrendingUp className="h-8 w-8 text-white mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {teams.reduce((sum, t) => sum + t.wins, 0)}
            </div>
            <div className="text-green-100">Total Wins This Season</div>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 border-0 p-6">
            <Trophy className="h-8 w-8 text-white mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {teams.reduce((sum, t) => sum + t.points, 0)}
            </div>
            <div className="text-blue-100">Total Points Earned</div>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 p-6">
            <Users className="h-8 w-8 text-white mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{teams.length}</div>
            <div className="text-purple-100">Teams in League</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

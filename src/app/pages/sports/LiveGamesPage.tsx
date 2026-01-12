import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { matches } from '../../data/sportsData';
import { MatchCard } from '../../components/sports/MatchCard';
import { LiveIndicator } from '../../components/sports/LiveIndicator';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Activity, Clock, CheckCircle, Target, User, AlertCircle } from 'lucide-react';

export function LiveGamesPage() {
  const { matchId } = useParams();
  const navigate = useNavigate();
  
  const liveMatches = matches.filter(m => m.status === 'live');
  const selectedMatch = matchId ? matches.find(m => m.id === matchId) : liveMatches[0];

  if (!selectedMatch) {
    return (
      <div className="min-h-screen bg-gray-950 pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white mb-6">Live Games</h1>
          <div className="text-center py-12 text-gray-400">
            No live matches at the moment. Check back soon!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Live Games</h1>
          <p className="text-gray-400">Watch live matches and real-time updates</p>
        </div>

        {/* Live Matches Grid */}
        {liveMatches.length > 1 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-3">All Live Matches</h2>
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

        {/* Featured Match */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Match Stream/Feed */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              {/* Video Stream Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-semibold">Live Match Stream</p>
                  <p className="text-gray-600 text-sm mt-2">
                    {selectedMatch.homeTeam.name} vs {selectedMatch.awayTeam.name}
                  </p>
                </div>
                <div className="absolute top-4 left-4">
                  <LiveIndicator />
                </div>
                {selectedMatch.liveMinute && (
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg font-bold">
                    {selectedMatch.liveMinute}'
                  </div>
                )}
              </div>

              {/* Score and Teams */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  {/* Home Team */}
                  <div className="flex-1 text-center">
                    <div 
                      className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-5xl"
                      style={{ backgroundColor: `${selectedMatch.homeTeam.color}20` }}
                    >
                      {selectedMatch.homeTeam.logo}
                    </div>
                    <h3 className="font-bold text-white text-lg">{selectedMatch.homeTeam.name}</h3>
                  </div>

                  {/* Score */}
                  <div className="flex-shrink-0 px-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white mb-2">
                        {selectedMatch.homeScore} - {selectedMatch.awayScore}
                      </div>
                      {selectedMatch.liveMinute && (
                        <div className="inline-block bg-red-500/20 text-red-500 px-4 py-1 rounded-full text-sm font-bold">
                          {selectedMatch.liveMinute}' LIVE
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Away Team */}
                  <div className="flex-1 text-center">
                    <div 
                      className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-5xl"
                      style={{ backgroundColor: `${selectedMatch.awayTeam.color}20` }}
                    >
                      {selectedMatch.awayTeam.logo}
                    </div>
                    <h3 className="font-bold text-white text-lg">{selectedMatch.awayTeam.name}</h3>
                  </div>
                </div>

                {/* Match Info */}
                <div className="flex items-center justify-center gap-6 text-gray-400 text-sm border-t border-gray-700 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{selectedMatch.time}</span>
                  </div>
                  <div>•</div>
                  <div>{selectedMatch.venue}</div>
                  <div>•</div>
                  <div>{selectedMatch.round}</div>
                </div>
              </div>
            </Card>

            {/* Match Stats */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="font-bold text-white text-lg mb-4">Match Statistics</h3>
              <div className="space-y-4">
                {[
                  { label: 'Possession', home: 58, away: 42 },
                  { label: 'Shots on Target', home: 7, away: 4 },
                  { label: 'Shots off Target', home: 3, away: 5 },
                  { label: 'Corners', home: 6, away: 3 },
                  { label: 'Fouls', home: 8, away: 12 }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1 text-sm">
                      <span className="text-white font-medium">{stat.home}</span>
                      <span className="text-gray-400">{stat.label}</span>
                      <span className="text-white font-medium">{stat.away}</span>
                    </div>
                    <div className="flex gap-1 h-2">
                      <div 
                        className="bg-blue-500 rounded-l"
                        style={{ width: `${stat.home}%` }}
                      />
                      <div 
                        className="bg-yellow-500 rounded-r"
                        style={{ width: `${stat.away}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Match Events Sidebar */}
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="font-bold text-white text-lg mb-4">Match Events</h3>
              <div className="space-y-4">
                {selectedMatch.events?.map((event) => (
                  <div key={event.id} className="flex items-start gap-3">
                    <div className="w-12 flex-shrink-0 text-center">
                      <span className="inline-block bg-gray-700 text-white text-xs px-2 py-1 rounded font-bold">
                        {event.minute}'
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {event.type === 'goal' && <Target className="h-4 w-4 text-green-500" />}
                        {event.type === 'yellow_card' && <AlertCircle className="h-4 w-4 text-yellow-500" />}
                        {event.type === 'red_card' && <AlertCircle className="h-4 w-4 text-red-500" />}
                        {event.type === 'substitution' && <User className="h-4 w-4 text-blue-500" />}
                        <span className="text-white text-sm font-semibold">{event.playerName}</span>
                      </div>
                      <p className="text-gray-400 text-xs">{event.description}</p>
                    </div>
                  </div>
                ))}
                {(!selectedMatch.events || selectedMatch.events.length === 0) && (
                  <p className="text-gray-500 text-sm text-center py-4">No events yet</p>
                )}
              </div>
            </Card>

            {/* Lineups */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="font-bold text-white text-lg mb-4">Starting Lineups</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">{selectedMatch.homeTeam.name}</h4>
                  <div className="space-y-1 text-sm text-gray-300">
                    <div>1. Goalkeeper Name</div>
                    <div>4. Defender Name</div>
                    <div>8. Midfielder Name</div>
                    <div>10. Forward Name</div>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">{selectedMatch.awayTeam.name}</h4>
                  <div className="space-y-1 text-sm text-gray-300">
                    <div>1. Goalkeeper Name</div>
                    <div>4. Defender Name</div>
                    <div>8. Midfielder Name</div>
                    <div>9. Forward Name</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

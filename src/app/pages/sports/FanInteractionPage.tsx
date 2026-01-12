import React, { useState } from 'react';
import { comments, matches, teams } from '../../data/sportsData';
import { CommentItem } from '../../components/sports/CommentItem';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { MessageSquare, TrendingUp, Send, Hash } from 'lucide-react';

export function FanInteractionPage() {
  const [newComment, setNewComment] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const handlePostComment = () => {
    if (newComment.trim()) {
      // In a real app, this would post to a backend
      console.log('Posting comment:', newComment);
      setNewComment('');
    }
  };

  const trendingTopics = [
    { tag: '#ThunderHawks', posts: 1245 },
    { tag: '#MarcusSilva', posts: 892 },
    { tag: '#ChampionshipRace', posts: 756 },
    { tag: '#MatchDay26', posts: 634 },
    { tag: '#GoalOfTheWeek', posts: 423 }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="h-8 w-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-white">Fan Zone</h1>
          </div>
          <p className="text-gray-400">
            Join the conversation with fans from around the world
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Discussion Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Comment */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="font-semibold text-white mb-4">Share your thoughts</h3>
              <div className="space-y-4">
                <Textarea
                  placeholder="What's your take on today's matches?"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 min-h-24"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {newComment.length}/500 characters
                  </span>
                  <Button 
                    onClick={handlePostComment}
                    disabled={!newComment.trim()}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Post Comment
                  </Button>
                </div>
              </div>
            </Card>

            {/* Discussion Tabs */}
            <Card className="bg-gray-800 border-gray-700">
              <Tabs defaultValue="all" className="w-full">
                <div className="border-b border-gray-700 px-6 pt-6">
                  <TabsList className="bg-gray-900">
                    <TabsTrigger value="all">All Discussions</TabsTrigger>
                    <TabsTrigger value="live">Live Match Chat</TabsTrigger>
                    <TabsTrigger value="popular">Most Popular</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="p-6">
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <CommentItem key={comment.id} comment={comment} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="live" className="p-6">
                  <div className="space-y-6">
                    {comments.slice(0, 2).map((comment) => (
                      <CommentItem key={comment.id} comment={comment} />
                    ))}
                    <div className="text-center text-gray-500 text-sm py-4">
                      Live chat active during matches
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="popular" className="p-6">
                  <div className="space-y-6">
                    {[...comments]
                      .sort((a, b) => b.likes - a.likes)
                      .map((comment) => (
                        <CommentItem key={comment.id} comment={comment} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <h3 className="font-bold text-white">Trending Topics</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Hash className="h-4 w-4 text-blue-500" />
                      <span className="text-white font-medium">{topic.tag}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{topic.posts.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Live Polls */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="font-bold text-white mb-4">Fan Poll</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white mb-3">Who will win the championship?</p>
                  <div className="space-y-2">
                    {teams.slice(0, 3).map((team) => (
                      <button
                        key={team.id}
                        className="w-full text-left p-3 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{team.logo}</span>
                            <span className="text-white text-sm">{team.name}</span>
                          </div>
                          <span className="text-gray-400 text-sm">45%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full"
                            style={{ 
                              width: '45%',
                              backgroundColor: team.color 
                            }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-xs text-center">
                  12,345 votes • Poll ends in 2 days
                </p>
              </div>
            </Card>

            {/* Fan of the Week */}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 p-6">
              <h3 className="font-bold text-white mb-3">⭐ Fan of the Week</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                  👨
                </div>
                <div>
                  <div className="font-semibold text-white">@SuperFan2026</div>
                  <div className="text-blue-100 text-sm">1,234 posts this week</div>
                </div>
              </div>
              <p className="text-blue-50 text-sm">
                Most active and engaging fan in the community!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from 'date-fns';
import { matches, events } from '../../data/sportsData';
import { MatchCard } from '../../components/sports/MatchCard';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Calendar as CalendarIcon, List, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { Button } from '../../components/ui/button';

export function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getEventsForDate = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return matches.filter(m => m.date === dateStr);
  };

  const allUpcoming = matches.filter(m => m.status === 'scheduled');

  return (
    <div className="min-h-screen bg-gray-950 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <CalendarIcon className="h-8 w-8 text-green-500" />
            <h1 className="text-3xl font-bold text-white">Events & Schedule</h1>
          </div>
          <p className="text-gray-400">
            View upcoming matches, competitions, and special events
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="mb-6 bg-gray-800">
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              Calendar View
            </TabsTrigger>
            <TabsTrigger value="list" className="flex items-center gap-2">
              <List className="h-4 w-4" />
              List View
            </TabsTrigger>
          </TabsList>

          {/* Calendar View */}
          <TabsContent value="calendar">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Calendar */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-800 border-gray-700 p-6">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white">
                      {format(currentDate, 'MMMM yyyy')}
                    </h2>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={previousMonth}
                        className="bg-gray-700 border-gray-600 hover:bg-gray-600"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextMonth}
                        className="bg-gray-700 border-gray-600 hover:bg-gray-600"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Day Headers */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="text-center text-gray-500 text-sm font-semibold py-2">
                        {day}
                      </div>
                    ))}

                    {/* Empty cells for days before month starts */}
                    {Array.from({ length: monthStart.getDay() }).map((_, idx) => (
                      <div key={`empty-${idx}`} className="aspect-square" />
                    ))}

                    {/* Calendar Days */}
                    {daysInMonth.map(day => {
                      const dayEvents = getEventsForDate(day);
                      const isSelected = isSameDay(day, selectedDate);
                      const hasEvents = dayEvents.length > 0;

                      return (
                        <button
                          key={day.toISOString()}
                          onClick={() => setSelectedDate(day)}
                          className={`aspect-square p-2 rounded-lg transition-all ${
                            isSelected
                              ? 'bg-blue-500 text-white'
                              : hasEvents
                              ? 'bg-gray-700 text-white hover:bg-gray-600'
                              : 'text-gray-400 hover:bg-gray-700'
                          }`}
                        >
                          <div className="text-sm font-medium mb-1">
                            {format(day, 'd')}
                          </div>
                          {hasEvents && (
                            <div className="flex justify-center gap-1">
                              {dayEvents.slice(0, 3).map((_, idx) => (
                                <div
                                  key={idx}
                                  className={`w-1 h-1 rounded-full ${
                                    isSelected ? 'bg-white' : 'bg-blue-500'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </Card>
              </div>

              {/* Selected Day Events */}
              <div>
                <Card className="bg-gray-800 border-gray-700 p-6">
                  <h3 className="font-bold text-white mb-4">
                    {format(selectedDate, 'MMMM d, yyyy')}
                  </h3>
                  <div className="space-y-3">
                    {getEventsForDate(selectedDate).map(match => (
                      <div key={match.id} className="bg-gray-900 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-sm">{match.time}</span>
                          <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded">
                            {match.round}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{match.homeTeam.logo}</span>
                            <span className="text-white text-sm font-medium">
                              {match.homeTeam.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{match.awayTeam.logo}</span>
                            <span className="text-white text-sm font-medium">
                              {match.awayTeam.name}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 text-gray-500 text-xs">
                          {match.venue}
                        </div>
                      </div>
                    ))}
                    {getEventsForDate(selectedDate).length === 0 && (
                      <p className="text-gray-500 text-sm text-center py-8">
                        No events scheduled for this date
                      </p>
                    )}
                  </div>
                </Card>

                {/* Special Events */}
                <Card className="bg-gradient-to-br from-purple-600 to-blue-600 border-0 p-6 mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="h-5 w-5 text-white" />
                    <h3 className="font-bold text-white">Upcoming Special Events</h3>
                  </div>
                  <div className="space-y-2">
                    {events.filter(e => e.type !== 'match').slice(0, 3).map(event => (
                      <div key={event.id} className="bg-white/10 rounded-lg p-3">
                        <div className="text-white font-medium text-sm mb-1">
                          {event.title}
                        </div>
                        <div className="text-blue-100 text-xs">
                          {format(parseISO(event.date), 'MMM d, h:mm a')}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* List View */}
          <TabsContent value="list">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">All Upcoming Matches</h2>
                <span className="text-gray-400 text-sm">
                  {allUpcoming.length} matches scheduled
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allUpcoming.map(match => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

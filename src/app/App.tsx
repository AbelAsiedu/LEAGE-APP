import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { TopNav } from './components/sports/TopNav';
import { BottomNav } from './components/sports/BottomNav';

// Sports Pages
import { HomePage } from './pages/sports/HomePage';
import { LiveGamesPage } from './pages/sports/LiveGamesPage';
import { FanInteractionPage } from './pages/sports/FanInteractionPage';
import { EventsPage } from './pages/sports/EventsPage';
import { MultimediaPage } from './pages/sports/MultimediaPage';
import { TeamsPage } from './pages/sports/TeamsPage';
import { PlayersPage } from './pages/sports/PlayersPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950">
        <TopNav />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/live" element={<LiveGamesPage />} />
          <Route path="/live/:matchId" element={<LiveGamesPage />} />
          <Route path="/fan-zone" element={<FanInteractionPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/media" element={<MultimediaPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/teams/:teamId" element={<TeamsPage />} />
          <Route path="/players" element={<PlayersPage />} />
        </Routes>

        <BottomNav />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

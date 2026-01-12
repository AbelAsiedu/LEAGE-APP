import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Play, MessageSquare, Calendar, Video, Users } from 'lucide-react';

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/live', icon: Play, label: 'Live' },
    { path: '/fan-zone', icon: MessageSquare, label: 'Fan Zone' },
    { path: '/events', icon: Calendar, label: 'Events' },
    { path: '/media', icon: Video, label: 'Media' },
    { path: '/teams', icon: Users, label: 'Teams' }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-50">
      <div className="grid grid-cols-6 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-2 ${
                isActive ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

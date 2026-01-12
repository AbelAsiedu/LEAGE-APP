import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Clock, 
  Settings, 
  BarChart3,
  Users,
  FileText,
  Briefcase,
  LucideIcon
} from 'lucide-react';

interface SidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface SidebarProps {
  role: 'provider' | 'admin';
}

const providerItems: SidebarItem[] = [
  { name: 'Dashboard', path: '/provider/dashboard', icon: LayoutDashboard },
  { name: 'Appointments', path: '/provider/appointments', icon: Calendar },
  { name: 'Availability', path: '/provider/availability', icon: Clock },
  { name: 'Services', path: '/provider/services', icon: Briefcase },
  { name: 'Analytics', path: '/provider/analytics', icon: BarChart3 },
];

const adminItems: SidebarItem[] = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Users', path: '/admin/users', icon: Users },
  { name: 'Reports', path: '/admin/reports', icon: FileText },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export function Sidebar({ role }: SidebarProps) {
  const location = useLocation();
  const items = role === 'provider' ? providerItems : adminItems;

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-teal-50 text-teal-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

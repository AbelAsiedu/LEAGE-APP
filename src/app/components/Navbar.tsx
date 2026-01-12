import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, User, LogOut, Menu } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  userRole?: 'client' | 'provider' | 'admin' | null;
  userName?: string;
  onLogout?: () => void;
}

export function Navbar({ userRole, userName, onLogout }: NavbarProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-teal-600" />
              <span className="text-xl font-semibold text-gray-900">BookEase</span>
            </Link>
            
            {!userRole && (
              <div className="hidden md:flex ml-10 space-x-4">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm ${
                    isActive('/') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className={`px-3 py-2 rounded-md text-sm ${
                    isActive('/services') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  Services
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {userRole ? (
              <>
                <div className="hidden md:flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">{userName}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={onLogout} className="hidden md:flex">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="hidden md:flex">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="hidden md:flex bg-teal-600 hover:bg-teal-700">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {!userRole ? (
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-sm text-teal-600 font-medium hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm text-gray-700">
                  Signed in as <span className="font-medium">{userName}</span>
                </div>
                <button
                  onClick={() => {
                    onLogout?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Shield, Zap, CheckCircle, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simplify Your Appointment Booking
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The modern booking platform for businesses and clients. Schedule appointments,
            manage availability, and grow your business—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
                Book Appointment
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose BookEase?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Booking</h3>
              <p className="text-gray-600">
                Book appointments in seconds with our intuitive calendar interface.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Availability</h3>
              <p className="text-gray-600">
                See available time slots instantly and get immediate confirmation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Process payments securely with our encrypted payment system.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600 text-white mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Services</h3>
              <p className="text-gray-600">
                Explore our wide range of services and find the perfect fit for your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600 text-white mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Pick a Time</h3>
              <p className="text-gray-600">
                Choose from available time slots that work with your schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600 text-white mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">You're Booked!</h3>
              <p className="text-gray-600">
                Receive instant confirmation and reminders before your appointment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              For Service Providers
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Manage Your Schedule</h4>
                  <p className="text-gray-600">Set your availability and let clients book when you're free.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Reduce No-Shows</h4>
                  <p className="text-gray-600">Automated reminders keep clients on track.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Track Your Business</h4>
                  <p className="text-gray-600">Get insights with detailed analytics and reports.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="border-none shadow-xl p-8 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Join Our Network
              </h3>
              <p className="text-center text-teal-50 mb-6">
                Start accepting bookings today and grow your business with BookEase.
              </p>
              <Link to="/register" className="block">
                <Button size="lg" variant="secondary" className="w-full">
                  Sign Up as Provider
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of businesses and clients using BookEase every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Book Now
              </Button>
            </Link>
            <Link to="/register">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-teal-600"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

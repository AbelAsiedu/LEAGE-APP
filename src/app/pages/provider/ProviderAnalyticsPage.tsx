import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, DollarSign, TrendingUp, Users } from 'lucide-react';
import { StatsCard } from '../../components/StatsCard';

const bookingTrendsData = [
  { month: 'Jan', bookings: 45, revenue: 4500 },
  { month: 'Feb', bookings: 52, revenue: 5200 },
  { month: 'Mar', bookings: 48, revenue: 4800 },
  { month: 'Apr', bookings: 61, revenue: 6100 },
  { month: 'May', bookings: 55, revenue: 5500 },
  { month: 'Jun', bookings: 67, revenue: 6700 },
];

const serviceDistribution = [
  { name: 'General Consultation', value: 35 },
  { name: 'Follow-up', value: 25 },
  { name: 'Therapy Session', value: 20 },
  { name: 'Massage Therapy', value: 15 },
  { name: 'Other', value: 5 },
];

const timeSlotPopularity = [
  { time: '9-11 AM', bookings: 15 },
  { time: '11-1 PM', bookings: 22 },
  { time: '1-3 PM', bookings: 18 },
  { time: '3-5 PM', bookings: 25 },
  { time: '5-7 PM', bookings: 12 },
];

const COLORS = ['#0d9488', '#14b8a6', '#2dd4bf', '#5eead4', '#99f6e4'];

export function ProviderAnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Track your performance and gain insights</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Bookings"
          value="328"
          icon={Calendar}
          trend={{ value: '+12% from last month', isPositive: true }}
        />
        <StatsCard
          title="Total Revenue"
          value="$32,800"
          icon={DollarSign}
          trend={{ value: '+8% from last month', isPositive: true }}
        />
        <StatsCard
          title="Avg. Rating"
          value="4.8"
          icon={TrendingUp}
          trend={{ value: '+0.2 from last month', isPositive: true }}
        />
        <StatsCard
          title="Total Clients"
          value="156"
          icon={Users}
          trend={{ value: '+18% from last month', isPositive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Booking Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Booking Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bookingTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="bookings" stroke="#0d9488" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bookingTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#0d9488" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Service Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Service Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={serviceDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Popular Time Slots */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Time Slots</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={timeSlotPopularity} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="time" type="category" />
                <Tooltip />
                <Bar dataKey="bookings" fill="#0d9488" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import React from 'react';
import { mockAppointments, mockUsers, mockServices } from '../../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Users, Briefcase, DollarSign } from 'lucide-react';
import { StatsCard } from '../../components/StatsCard';

const systemActivityData = [
  { date: 'Jan 4', bookings: 12, users: 5 },
  { date: 'Jan 5', bookings: 15, users: 8 },
  { date: 'Jan 6', bookings: 10, users: 3 },
  { date: 'Jan 7', bookings: 18, users: 12 },
  { date: 'Jan 8', bookings: 14, users: 6 },
  { date: 'Jan 9', bookings: 20, users: 10 },
  { date: 'Jan 10', bookings: 16, users: 7 },
];

export function AdminDashboard() {
  const totalUsers = mockUsers.length;
  const totalProviders = mockUsers.filter(u => u.role === 'provider').length;
  const totalClients = mockUsers.filter(u => u.role === 'client').length;
  const totalServices = mockServices.length;
  const totalBookings = mockAppointments.length;
  const totalRevenue = mockAppointments
    .filter(a => a.paymentStatus === 'paid')
    .reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">System overview and key metrics</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Users"
          value={totalUsers}
          icon={Users}
          trend={{ value: `${totalProviders} providers, ${totalClients} clients`, isPositive: true }}
        />
        <StatsCard
          title="Total Services"
          value={totalServices}
          icon={Briefcase}
        />
        <StatsCard
          title="Total Bookings"
          value={totalBookings}
          icon={Calendar}
          trend={{ value: '+12% this week', isPositive: true }}
        />
        <StatsCard
          title="Total Revenue"
          value={`$${totalRevenue}`}
          icon={DollarSign}
          trend={{ value: '+8% this week', isPositive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>System Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={systemActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="bookings" stroke="#0d9488" strokeWidth={2} />
                <Line type="monotone" dataKey="users" stroke="#14b8a6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={systemActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bookings" fill="#0d9488" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUsers.slice(0, 5).map((user) => (
                <div key={user.id} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700 capitalize">
                    {user.role}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAppointments.slice(0, 5).map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium">{appointment.serviceName}</p>
                    <p className="text-sm text-gray-600">{appointment.clientName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-teal-600">${appointment.price}</p>
                    <p className="text-xs text-gray-500">{appointment.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

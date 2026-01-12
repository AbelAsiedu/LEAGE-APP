import React, { useState } from 'react';
import { mockAppointments } from '../../data/mockData';
import { Appointment } from '../../types';
import { format } from 'date-fns';
import { Calendar, DollarSign, TrendingUp, Users } from 'lucide-react';
import { StatsCard } from '../../components/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export function ProviderDashboard() {
  const [appointments] = useState<Appointment[]>(mockAppointments);

  const today = format(new Date(), 'yyyy-MM-dd');
  const todayAppointments = appointments.filter(a => a.date === today);
  const upcomingAppointments = appointments.filter(
    a => new Date(a.date) >= new Date() && a.status !== 'cancelled'
  );
  const totalRevenue = appointments
    .filter(a => a.paymentStatus === 'paid')
    .reduce((sum, a) => sum + a.price, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your appointments.</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Today's Appointments"
          value={todayAppointments.length}
          icon={Calendar}
          trend={{ value: '+2 from yesterday', isPositive: true }}
        />
        <StatsCard
          title="Total Bookings"
          value={appointments.length}
          icon={Users}
          trend={{ value: '+12% from last week', isPositive: true }}
        />
        <StatsCard
          title="Total Revenue"
          value={`$${totalRevenue}`}
          icon={DollarSign}
          trend={{ value: '+8% from last month', isPositive: true }}
        />
        <StatsCard
          title="Upcoming"
          value={upcomingAppointments.length}
          icon={TrendingUp}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            {todayAppointments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No appointments scheduled for today</p>
            ) : (
              <div className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">{appointment.clientName}</p>
                        <Badge className={getStatusColor(appointment.status)} variant="secondary">
                          {appointment.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{appointment.serviceName}</p>
                      <p className="text-sm text-gray-500">{appointment.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-teal-600">${appointment.price}</p>
                      <p className="text-sm text-gray-500">{appointment.duration} min</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.slice(0, 5).map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">
                      New booking from {appointment.clientName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {appointment.serviceName} - {format(new Date(appointment.date), 'MMM d, yyyy')}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {format(new Date(appointment.createdAt), 'MMM d, h:mm a')}
                    </p>
                  </div>
                  <Badge className={getStatusColor(appointment.status)} variant="secondary">
                    {appointment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

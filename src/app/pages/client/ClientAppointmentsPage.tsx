import React, { useState } from 'react';
import { mockAppointments } from '../../data/mockData';
import { Appointment } from '../../types';
import { AppointmentTable } from '../../components/AppointmentTable';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';
import { StatsCard } from '../../components/StatsCard';
import { toast } from 'sonner';

export function ClientAppointmentsPage() {
  const [appointments] = useState<Appointment[]>(mockAppointments);

  const upcomingAppointments = appointments.filter(
    a => new Date(a.date) >= new Date() && a.status !== 'cancelled' && a.status !== 'completed'
  );
  const pastAppointments = appointments.filter(
    a => new Date(a.date) < new Date() || a.status === 'completed'
  );
  const cancelledAppointments = appointments.filter(a => a.status === 'cancelled');

  const handleViewDetails = (appointment: Appointment) => {
    toast.info(`Viewing details for appointment #${appointment.id}`);
  };

  const handleCancel = (appointment: Appointment) => {
    toast.success(`Appointment #${appointment.id} has been cancelled`);
  };

  const handleReschedule = (appointment: Appointment) => {
    toast.info(`Rescheduling appointment #${appointment.id}`);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Appointments</h1>
          <p className="text-gray-600">Manage your upcoming and past appointments</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Bookings"
            value={appointments.length}
            icon={Calendar}
          />
          <StatsCard
            title="Upcoming"
            value={upcomingAppointments.length}
            icon={Clock}
          />
          <StatsCard
            title="Completed"
            value={pastAppointments.length}
            icon={CheckCircle}
          />
          <StatsCard
            title="Cancelled"
            value={cancelledAppointments.length}
            icon={XCircle}
          />
        </div>

        {/* Appointments List */}
        <Card>
          <CardHeader>
            <CardTitle>All Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="upcoming">
                  Upcoming ({upcomingAppointments.length})
                </TabsTrigger>
                <TabsTrigger value="past">
                  Past ({pastAppointments.length})
                </TabsTrigger>
                <TabsTrigger value="cancelled">
                  Cancelled ({cancelledAppointments.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming">
                <AppointmentTable
                  appointments={upcomingAppointments}
                  onViewDetails={handleViewDetails}
                  onCancel={handleCancel}
                  onReschedule={handleReschedule}
                />
              </TabsContent>

              <TabsContent value="past">
                <AppointmentTable
                  appointments={pastAppointments}
                  onViewDetails={handleViewDetails}
                />
              </TabsContent>

              <TabsContent value="cancelled">
                <AppointmentTable
                  appointments={cancelledAppointments}
                  onViewDetails={handleViewDetails}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
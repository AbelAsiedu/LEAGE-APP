import React, { useState } from 'react';
import { mockAppointments } from '../../data/mockData';
import { Appointment } from '../../types';
import { AppointmentTable } from '../../components/AppointmentTable';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Calendar as CalendarComponent } from '../../components/ui/calendar';
import { format } from 'date-fns';
import { toast } from 'sonner';

export function ProviderAppointmentsPage() {
  const [appointments] = useState<Appointment[]>(mockAppointments);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const upcomingAppointments = appointments.filter(
    a => new Date(a.date) >= new Date() && a.status !== 'cancelled' && a.status !== 'completed'
  );

  const selectedDateAppointments = selectedDate
    ? appointments.filter(a => a.date === format(selectedDate, 'yyyy-MM-dd'))
    : [];

  const handleViewDetails = (appointment: Appointment) => {
    toast.info(`Viewing details for appointment #${appointment.id}`);
  };

  const handleCancel = (appointment: Appointment) => {
    toast.success(`Appointment #${appointment.id} has been cancelled`);
  };

  const handleReschedule = (appointment: Appointment) => {
    toast.info(`Rescheduling appointment #${appointment.id}`);
  };

  const handleMarkComplete = (appointment: Appointment) => {
    toast.success(`Appointment #${appointment.id} marked as completed`);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointments</h1>
        <p className="text-gray-600">Manage and view all your appointments</p>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>All Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <AppointmentTable
                appointments={appointments}
                onViewDetails={handleViewDetails}
                onCancel={handleCancel}
                onReschedule={handleReschedule}
                onMarkComplete={handleMarkComplete}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>
                  Appointments for {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDateAppointments.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    No appointments scheduled for this date
                  </p>
                ) : (
                  <div className="space-y-4">
                    {selectedDateAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">{appointment.time}</p>
                            <p className="text-sm text-gray-600">{appointment.clientName}</p>
                          </div>
                          <span className="text-teal-600 font-medium">${appointment.price}</span>
                        </div>
                        <p className="text-sm font-medium">{appointment.serviceName}</p>
                        <p className="text-sm text-gray-500">{appointment.duration} minutes</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

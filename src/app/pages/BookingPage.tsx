import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { format, addDays, startOfWeek } from 'date-fns';
import { Service } from '../types';
import { generateTimeSlots } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';
import { ChevronLeft, Clock, DollarSign, User } from 'lucide-react';
import { toast } from 'sonner';

export function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service as Service | undefined;

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');

  if (!service) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No service selected</p>
          <Button onClick={() => navigate('/services')} className="bg-teal-600 hover:bg-teal-700">
            Browse Services
          </Button>
        </div>
      </div>
    );
  }

  // Generate available time slots (9 AM to 5 PM)
  const timeSlots = generateTimeSlots('09:00', '17:00', service.duration);

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select both date and time');
      return;
    }

    navigate('/payment', {
      state: {
        service,
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: selectedTime,
      },
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/services')}
          className="mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Details */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Service Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center text-sm">
                    <User className="w-4 h-4 mr-3 text-teal-600" />
                    <span className="text-gray-600">Provider:</span>
                    <span className="ml-auto font-medium">{service.providerName}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-3 text-teal-600" />
                    <span className="text-gray-600">Duration:</span>
                    <span className="ml-auto font-medium">{service.duration} minutes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 mr-3 text-teal-600" />
                    <span className="text-gray-600">Price:</span>
                    <span className="ml-auto font-medium">${service.price}</span>
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                    <p className="text-sm font-medium text-teal-900 mb-2">Selected Appointment:</p>
                    <p className="text-sm text-teal-700">
                      {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                    </p>
                    <p className="text-sm text-teal-700">{selectedTime}</p>
                  </div>
                )}

                <Button
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                  className="w-full mt-4 bg-teal-600 hover:bg-teal-700"
                >
                  Continue to Payment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Date and Time Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date < startOfWeek(new Date())}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Time Slots */}
            {selectedDate && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? 'default' : 'outline'}
                        onClick={() => setSelectedTime(time)}
                        className={
                          selectedTime === time
                            ? 'bg-teal-600 hover:bg-teal-700'
                            : 'hover:border-teal-600 hover:text-teal-600'
                        }
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

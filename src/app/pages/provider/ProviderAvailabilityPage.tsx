import React, { useState } from 'react';
import { mockAvailability } from '../../data/mockData';
import { AvailabilitySlot } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const daysOfWeek = [
  { value: 0, label: 'Sunday' },
  { value: 1, label: 'Monday' },
  { value: 2, label: 'Tuesday' },
  { value: 3, label: 'Wednesday' },
  { value: 4, label: 'Thursday' },
  { value: 5, label: 'Friday' },
  { value: 6, label: 'Saturday' },
];

export function ProviderAvailabilityPage() {
  const [availability, setAvailability] = useState<AvailabilitySlot[]>(
    mockAvailability.filter(a => a.providerId === '2')
  );

  const handleToggleSlot = (id: string) => {
    setAvailability(availability.map(slot =>
      slot.id === id ? { ...slot, isActive: !slot.isActive } : slot
    ));
    toast.success('Availability updated');
  };

  const handleDeleteSlot = (id: string) => {
    setAvailability(availability.filter(slot => slot.id !== id));
    toast.success('Time slot removed');
  };

  const handleAddSlot = (dayOfWeek: number) => {
    const newSlot: AvailabilitySlot = {
      id: `new-${Date.now()}`,
      providerId: '2',
      dayOfWeek,
      startTime: '09:00',
      endTime: '17:00',
      isActive: true,
    };
    setAvailability([...availability, newSlot]);
    toast.success('Time slot added');
  };

  const groupedAvailability = daysOfWeek.map(day => ({
    ...day,
    slots: availability.filter(slot => slot.dayOfWeek === day.value),
  }));

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Availability</h1>
        <p className="text-gray-600">Set your working hours and available time slots</p>
      </div>

      <div className="space-y-6">
        {groupedAvailability.map((day) => (
          <Card key={day.value}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{day.label}</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddSlot(day.value)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Time Slot
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {day.slots.length === 0 ? (
                <p className="text-gray-500 text-sm">No time slots set for this day</p>
              ) : (
                <div className="space-y-4">
                  {day.slots.map((slot) => (
                    <div
                      key={slot.id}
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`start-${slot.id}`}>Start Time</Label>
                          <Input
                            id={`start-${slot.id}`}
                            type="time"
                            value={slot.startTime}
                            onChange={(e) => {
                              setAvailability(availability.map(s =>
                                s.id === slot.id ? { ...s, startTime: e.target.value } : s
                              ));
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`end-${slot.id}`}>End Time</Label>
                          <Input
                            id={`end-${slot.id}`}
                            type="time"
                            value={slot.endTime}
                            onChange={(e) => {
                              setAvailability(availability.map(s =>
                                s.id === slot.id ? { ...s, endTime: e.target.value } : s
                              ));
                            }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Label htmlFor={`active-${slot.id}`} className="text-sm">
                            Active
                          </Label>
                          <Switch
                            id={`active-${slot.id}`}
                            checked={slot.isActive}
                            onCheckedChange={() => handleToggleSlot(slot.id)}
                          />
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteSlot(slot.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Button className="bg-teal-600 hover:bg-teal-700">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

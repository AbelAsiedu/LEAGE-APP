import { Service, Appointment, User, AvailabilitySlot } from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'client',
    phone: '+1234567890',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    email: 'sarah@example.com',
    role: 'provider',
    phone: '+1234567891',
    createdAt: '2024-01-10T09:00:00Z',
  },
  {
    id: '3',
    name: 'Mike Smith',
    email: 'mike@example.com',
    role: 'provider',
    phone: '+1234567892',
    createdAt: '2024-01-12T11:00:00Z',
  },
  {
    id: '4',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    createdAt: '2024-01-01T08:00:00Z',
  },
];

// Mock Services
export const mockServices: Service[] = [
  {
    id: '1',
    name: 'General Consultation',
    description: 'Initial consultation and health assessment',
    price: 100,
    duration: 30,
    providerId: '2',
    providerName: 'Dr. Sarah Johnson',
    category: 'Medical',
  },
  {
    id: '2',
    name: 'Follow-up Appointment',
    description: 'Follow-up consultation for existing patients',
    price: 75,
    duration: 20,
    providerId: '2',
    providerName: 'Dr. Sarah Johnson',
    category: 'Medical',
  },
  {
    id: '3',
    name: 'Physical Therapy Session',
    description: 'One-on-one physical therapy treatment',
    price: 120,
    duration: 45,
    providerId: '3',
    providerName: 'Mike Smith',
    category: 'Therapy',
  },
  {
    id: '4',
    name: 'Massage Therapy',
    description: 'Relaxing full body massage therapy',
    price: 90,
    duration: 60,
    providerId: '3',
    providerName: 'Mike Smith',
    category: 'Therapy',
  },
  {
    id: '5',
    name: 'Nutrition Counseling',
    description: 'Personalized nutrition planning and guidance',
    price: 85,
    duration: 30,
    providerId: '2',
    providerName: 'Dr. Sarah Johnson',
    category: 'Wellness',
  },
];

// Mock Appointments
export const mockAppointments: Appointment[] = [
  {
    id: '1',
    clientId: '1',
    clientName: 'John Doe',
    clientEmail: 'john@example.com',
    clientPhone: '+1234567890',
    providerId: '2',
    providerName: 'Dr. Sarah Johnson',
    serviceId: '1',
    serviceName: 'General Consultation',
    date: '2026-01-10',
    time: '09:00',
    duration: 30,
    price: 100,
    status: 'completed',
    paymentStatus: 'paid',
    createdAt: '2026-01-05T10:00:00Z',
  },
  {
    id: '2',
    clientId: '1',
    clientName: 'John Doe',
    clientEmail: 'john@example.com',
    clientPhone: '+1234567890',
    providerId: '3',
    providerName: 'Mike Smith',
    serviceId: '3',
    serviceName: 'Physical Therapy Session',
    date: '2026-01-12',
    time: '14:00',
    duration: 45,
    price: 120,
    status: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2026-01-06T11:00:00Z',
  },
  {
    id: '3',
    clientId: '1',
    clientName: 'John Doe',
    clientEmail: 'john@example.com',
    providerId: '2',
    providerName: 'Dr. Sarah Johnson',
    serviceId: '2',
    serviceName: 'Follow-up Appointment',
    date: '2026-01-15',
    time: '10:30',
    duration: 20,
    price: 75,
    status: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2026-01-08T09:00:00Z',
  },
  {
    id: '4',
    clientId: '1',
    clientName: 'John Doe',
    clientEmail: 'john@example.com',
    providerId: '3',
    providerName: 'Mike Smith',
    serviceId: '4',
    serviceName: 'Massage Therapy',
    date: '2026-01-18',
    time: '15:00',
    duration: 60,
    price: 90,
    status: 'pending',
    paymentStatus: 'pending',
    createdAt: '2026-01-09T14:00:00Z',
  },
];

// Mock Availability
export const mockAvailability: AvailabilitySlot[] = [
  // Monday
  { id: '1', providerId: '2', dayOfWeek: 1, startTime: '09:00', endTime: '12:00', isActive: true },
  { id: '2', providerId: '2', dayOfWeek: 1, startTime: '14:00', endTime: '17:00', isActive: true },
  // Tuesday
  { id: '3', providerId: '2', dayOfWeek: 2, startTime: '09:00', endTime: '12:00', isActive: true },
  { id: '4', providerId: '2', dayOfWeek: 2, startTime: '14:00', endTime: '17:00', isActive: true },
  // Wednesday
  { id: '5', providerId: '2', dayOfWeek: 3, startTime: '09:00', endTime: '12:00', isActive: true },
  { id: '6', providerId: '2', dayOfWeek: 3, startTime: '14:00', endTime: '17:00', isActive: true },
  // Thursday
  { id: '7', providerId: '2', dayOfWeek: 4, startTime: '09:00', endTime: '12:00', isActive: true },
  { id: '8', providerId: '2', dayOfWeek: 4, startTime: '14:00', endTime: '17:00', isActive: true },
  // Friday
  { id: '9', providerId: '2', dayOfWeek: 5, startTime: '09:00', endTime: '12:00', isActive: true },
  
  // Provider 3
  { id: '10', providerId: '3', dayOfWeek: 1, startTime: '10:00', endTime: '18:00', isActive: true },
  { id: '11', providerId: '3', dayOfWeek: 2, startTime: '10:00', endTime: '18:00', isActive: true },
  { id: '12', providerId: '3', dayOfWeek: 3, startTime: '10:00', endTime: '18:00', isActive: true },
  { id: '13', providerId: '3', dayOfWeek: 4, startTime: '10:00', endTime: '18:00', isActive: true },
  { id: '14', providerId: '3', dayOfWeek: 5, startTime: '10:00', endTime: '18:00', isActive: true },
];

// Helper function to generate time slots
export const generateTimeSlots = (startTime: string, endTime: string, duration: number): string[] => {
  const slots: string[] = [];
  const [startHour, startMin] = startTime.split(':').map(Number);
  const [endHour, endMin] = endTime.split(':').map(Number);
  
  let currentTime = startHour * 60 + startMin;
  const endTimeMin = endHour * 60 + endMin;
  
  while (currentTime + duration <= endTimeMin) {
    const hours = Math.floor(currentTime / 60);
    const minutes = currentTime % 60;
    slots.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
    currentTime += duration;
  }
  
  return slots;
};

import React from 'react';
import { format } from 'date-fns';
import { Appointment } from '../types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface AppointmentTableProps {
  appointments: Appointment[];
  onViewDetails?: (appointment: Appointment) => void;
  onCancel?: (appointment: Appointment) => void;
  onReschedule?: (appointment: Appointment) => void;
  onMarkComplete?: (appointment: Appointment) => void;
}

export function AppointmentTable({
  appointments,
  onViewDetails,
  onCancel,
  onReschedule,
  onMarkComplete,
}: AppointmentTableProps) {
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

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'refunded':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>Date & Time</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                No appointments found
              </TableCell>
            </TableRow>
          ) : (
            appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>
                  <div className="font-medium">{format(new Date(appointment.date), 'MMM d, yyyy')}</div>
                  <div className="text-sm text-gray-600">{appointment.time}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{appointment.clientName}</div>
                  <div className="text-sm text-gray-600">{appointment.clientEmail}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{appointment.serviceName}</div>
                  <div className="text-sm text-gray-600">{appointment.duration} min · ${appointment.price}</div>
                </TableCell>
                <TableCell>{appointment.providerName}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(appointment.status)} variant="secondary">
                    {appointment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={getPaymentStatusColor(appointment.paymentStatus)} variant="secondary">
                    {appointment.paymentStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {onViewDetails && (
                        <DropdownMenuItem onClick={() => onViewDetails(appointment)}>
                          View Details
                        </DropdownMenuItem>
                      )}
                      {onReschedule && appointment.status !== 'cancelled' && appointment.status !== 'completed' && (
                        <DropdownMenuItem onClick={() => onReschedule(appointment)}>
                          Reschedule
                        </DropdownMenuItem>
                      )}
                      {onMarkComplete && appointment.status === 'confirmed' && (
                        <DropdownMenuItem onClick={() => onMarkComplete(appointment)}>
                          Mark Complete
                        </DropdownMenuItem>
                      )}
                      {onCancel && appointment.status !== 'cancelled' && appointment.status !== 'completed' && (
                        <DropdownMenuItem 
                          onClick={() => onCancel(appointment)}
                          className="text-red-600"
                        >
                          Cancel
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

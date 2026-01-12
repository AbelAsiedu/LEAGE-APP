import React from 'react';
import { Calendar as CalendarIcon, Clock, DollarSign } from 'lucide-react';
import { Service } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface ServiceCardProps {
  service: Service;
  onBook: (service: Service) => void;
}

export function ServiceCard({ service, onBook }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>{service.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{service.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-700">
            <Clock className="w-4 h-4 mr-2 text-teal-600" />
            <span>{service.duration} minutes</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <DollarSign className="w-4 h-4 mr-2 text-teal-600" />
            <span>${service.price}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <CalendarIcon className="w-4 h-4 mr-2 text-teal-600" />
            <span>with {service.providerName}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onBook(service)} className="w-full bg-teal-600 hover:bg-teal-700">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}

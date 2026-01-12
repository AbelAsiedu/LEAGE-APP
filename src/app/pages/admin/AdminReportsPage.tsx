import React from 'react';
import { mockAppointments } from '../../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, FileText } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner';

const monthlyRevenue = [
  { month: 'Jan', revenue: 4500, bookings: 45 },
  { month: 'Feb', revenue: 5200, bookings: 52 },
  { month: 'Mar', revenue: 4800, bookings: 48 },
  { month: 'Apr', revenue: 6100, bookings: 61 },
  { month: 'May', revenue: 5500, bookings: 55 },
  { month: 'Jun', revenue: 6700, bookings: 67 },
];

const serviceCategories = [
  { name: 'Medical', value: 40 },
  { name: 'Therapy', value: 30 },
  { name: 'Wellness', value: 20 },
  { name: 'Other', value: 10 },
];

const providerPerformance = [
  { provider: 'Dr. Sarah Johnson', bookings: 45, revenue: 4500 },
  { provider: 'Mike Smith', bookings: 38, revenue: 3800 },
  { provider: 'Dr. Emily Brown', bookings: 32, revenue: 3200 },
  { provider: 'James Wilson', bookings: 28, revenue: 2800 },
];

const COLORS = ['#0d9488', '#14b8a6', '#2dd4bf', '#5eead4'];

export function AdminReportsPage() {
  const handleExportReport = (reportType: string) => {
    toast.success(`${reportType} report exported successfully`);
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">System-wide reports and insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleExportReport('Monthly')}>
            <Download className="w-4 h-4 mr-2" />
            Export Monthly
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => handleExportReport('Full')}>
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Revenue and Bookings */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#0d9488" strokeWidth={2} name="Revenue ($)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bookings" fill="#0d9488" name="Bookings" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Service Categories and Provider Performance */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Service Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={serviceCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={providerPerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="provider" type="category" width={120} />
                <Tooltip />
                <Legend />
                <Bar dataKey="bookings" fill="#0d9488" name="Bookings" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Appointments</p>
              <p className="text-2xl font-bold text-gray-900">{mockAppointments.length}</p>
              <p className="text-sm text-green-600 mt-1">+12% from last month</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
              <p className="text-sm text-green-600 mt-1">+2% from last month</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Cancellation Rate</p>
              <p className="text-2xl font-bold text-gray-900">6%</p>
              <p className="text-sm text-red-600 mt-1">-1% from last month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

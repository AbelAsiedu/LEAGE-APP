import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Textarea } from '../../components/ui/textarea';
import { toast } from 'sonner';

export function AdminSettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [autoConfirmBookings, setAutoConfirmBookings] = useState(false);
  const [allowCancellations, setAllowCancellations] = useState(true);

  const handleSaveSettings = () => {
    toast.success('Settings saved successfully');
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">System Settings</h1>
        <p className="text-gray-600">Configure system-wide settings</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="booking">Booking Settings</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input id="siteName" defaultValue="BookEase" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  defaultValue="Modern appointment booking platform for businesses"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input id="contactEmail" type="email" defaultValue="support@bookease.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input id="contactPhone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <Input id="timezone" defaultValue="America/New_York" />
              </div>
              <Button onClick={handleSaveSettings} className="bg-teal-600 hover:bg-teal-700">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="space-y-1">
                  <Label htmlFor="emailNotif">Email Notifications</Label>
                  <p className="text-sm text-gray-600">
                    Send email notifications for bookings and cancellations
                  </p>
                </div>
                <Switch
                  id="emailNotif"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <div className="space-y-1">
                  <Label htmlFor="smsNotif">SMS Notifications</Label>
                  <p className="text-sm text-gray-600">
                    Send SMS reminders before appointments
                  </p>
                </div>
                <Switch
                  id="smsNotif"
                  checked={smsNotifications}
                  onCheckedChange={setSmsNotifications}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reminderTime">Reminder Time (hours before)</Label>
                <Input id="reminderTime" type="number" defaultValue="24" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailTemplate">Email Template</Label>
                <Textarea
                  id="emailTemplate"
                  defaultValue="Dear {client_name}, Your appointment for {service_name} is scheduled for {date} at {time}."
                  rows={5}
                />
              </div>

              <Button onClick={handleSaveSettings} className="bg-teal-600 hover:bg-teal-700">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booking">
          <Card>
            <CardHeader>
              <CardTitle>Booking Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="space-y-1">
                  <Label htmlFor="autoConfirm">Auto-Confirm Bookings</Label>
                  <p className="text-sm text-gray-600">
                    Automatically confirm new bookings without provider approval
                  </p>
                </div>
                <Switch
                  id="autoConfirm"
                  checked={autoConfirmBookings}
                  onCheckedChange={setAutoConfirmBookings}
                />
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <div className="space-y-1">
                  <Label htmlFor="allowCancel">Allow Cancellations</Label>
                  <p className="text-sm text-gray-600">
                    Allow clients to cancel their appointments
                  </p>
                </div>
                <Switch
                  id="allowCancel"
                  checked={allowCancellations}
                  onCheckedChange={setAllowCancellations}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cancellationDeadline">Cancellation Deadline (hours)</Label>
                <Input id="cancellationDeadline" type="number" defaultValue="24" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxAdvanceBooking">Max Advance Booking (days)</Label>
                <Input id="maxAdvanceBooking" type="number" defaultValue="90" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="minAdvanceBooking">Min Advance Booking (hours)</Label>
                <Input id="minAdvanceBooking" type="number" defaultValue="2" />
              </div>

              <Button onClick={handleSaveSettings} className="bg-teal-600 hover:bg-teal-700">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Input id="currency" defaultValue="USD" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentGateway">Payment Gateway</Label>
                <Input id="paymentGateway" defaultValue="Stripe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input id="apiKey" type="password" defaultValue="sk_test_••••••••••••••••" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="taxRate">Tax Rate (%)</Label>
                <Input id="taxRate" type="number" step="0.01" defaultValue="0" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="refundPolicy">Refund Policy</Label>
                <Textarea
                  id="refundPolicy"
                  defaultValue="Full refund available up to 24 hours before appointment. No refunds for cancellations within 24 hours."
                  rows={4}
                />
              </div>

              <Button onClick={handleSaveSettings} className="bg-teal-600 hover:bg-teal-700">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

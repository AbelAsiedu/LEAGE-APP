import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface RegisterPageProps {
  onRegister: (name: string, email: string, password: string, role: 'client' | 'provider') => void;
}

export function RegisterPage({ onRegister }: RegisterPageProps) {
  const navigate = useNavigate();
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPassword, setClientPassword] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const [providerName, setProviderName] = useState('');
  const [providerEmail, setProviderEmail] = useState('');
  const [providerPassword, setProviderPassword] = useState('');
  const [providerPhone, setProviderPhone] = useState('');

  const handleClientRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(clientName, clientEmail, clientPassword, 'client');
    navigate('/services');
  };

  const handleProviderRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(providerName, providerEmail, providerPassword, 'provider');
    navigate('/provider/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Sign up as a client or service provider
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="client" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="client">Client</TabsTrigger>
              <TabsTrigger value="provider">Provider</TabsTrigger>
            </TabsList>

            <TabsContent value="client">
              <form onSubmit={handleClientRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="client-name">Full Name</Label>
                  <Input
                    id="client-name"
                    type="text"
                    placeholder="John Doe"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client-email">Email</Label>
                  <Input
                    id="client-email"
                    type="email"
                    placeholder="john@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client-phone">Phone Number</Label>
                  <Input
                    id="client-phone"
                    type="tel"
                    placeholder="+1234567890"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client-password">Password</Label>
                  <Input
                    id="client-password"
                    type="password"
                    value={clientPassword}
                    onChange={(e) => setClientPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Create Client Account
                </Button>
                <p className="text-sm text-center text-gray-600">
                  Already have an account?{' '}
                  <a href="/login" className="text-teal-600 hover:underline">
                    Sign in
                  </a>
                </p>
              </form>
            </TabsContent>

            <TabsContent value="provider">
              <form onSubmit={handleProviderRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="provider-name">Full Name / Business Name</Label>
                  <Input
                    id="provider-name"
                    type="text"
                    placeholder="Dr. Sarah Johnson"
                    value={providerName}
                    onChange={(e) => setProviderName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="provider-email">Email</Label>
                  <Input
                    id="provider-email"
                    type="email"
                    placeholder="sarah@example.com"
                    value={providerEmail}
                    onChange={(e) => setProviderEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="provider-phone">Phone Number</Label>
                  <Input
                    id="provider-phone"
                    type="tel"
                    placeholder="+1234567890"
                    value={providerPhone}
                    onChange={(e) => setProviderPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="provider-password">Password</Label>
                  <Input
                    id="provider-password"
                    type="password"
                    value={providerPassword}
                    onChange={(e) => setProviderPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Create Provider Account
                </Button>
                <p className="text-sm text-center text-gray-600">
                  Already have an account?{' '}
                  <a href="/login" className="text-teal-600 hover:underline">
                    Sign in
                  </a>
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

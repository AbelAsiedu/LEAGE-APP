import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface LoginPageProps {
  onLogin: (email: string, password: string, role: 'client' | 'provider' | 'admin') => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();
  const [clientEmail, setClientEmail] = useState('');
  const [clientPassword, setClientPassword] = useState('');
  const [providerEmail, setProviderEmail] = useState('');
  const [providerPassword, setProviderPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleClientLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(clientEmail, clientPassword, 'client');
    navigate('/client/appointments');
  };

  const handleProviderLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(providerEmail, providerPassword, 'provider');
    navigate('/provider/dashboard');
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(adminEmail, adminPassword, 'admin');
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Choose your account type to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="client" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="client">Client</TabsTrigger>
              <TabsTrigger value="provider">Provider</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>

            <TabsContent value="client">
              <form onSubmit={handleClientLogin} className="space-y-4">
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
                  Sign In as Client
                </Button>
                <p className="text-sm text-center text-gray-600">
                  Don't have an account?{' '}
                  <a href="/register" className="text-teal-600 hover:underline">
                    Sign up
                  </a>
                </p>
              </form>
            </TabsContent>

            <TabsContent value="provider">
              <form onSubmit={handleProviderLogin} className="space-y-4">
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
                  Sign In as Provider
                </Button>
                <p className="text-sm text-center text-gray-600">
                  Don't have an account?{' '}
                  <a href="/register" className="text-teal-600 hover:underline">
                    Sign up
                  </a>
                </p>
              </form>
            </TabsContent>

            <TabsContent value="admin">
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    placeholder="admin@example.com"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input
                    id="admin-password"
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Sign In as Admin
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

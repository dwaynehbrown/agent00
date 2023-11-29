import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  title: 'Auth0 Organizations Delegated Admin Starter',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <UserProvider>
        <body className="h-full">
          <Suspense>
            <Nav />
          </Suspense>
          {children}
          <Analytics />
          <Toast />
        </body>
      </UserProvider>
    </html>
  );
}

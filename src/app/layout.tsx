import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ticket Bounty ',
  description: 'Ticket Bounty App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className='flex flex-col p-12 min-h-screen overflow-y-auto overflow-x-hidden'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

//  className='font-bold text-lg'

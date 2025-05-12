import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/tickets';

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
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className='flex justify-center gap-5 border-b-2'>
          {/* fix /ticket/404 or make nav a component*/}
          <div>
            <Link href={homePath()} className='font-bold text-lg'>
              Home
            </Link>
          </div>
          <div>
            <Link href={ticketsPath()} className='font-bold text-lg'>
              Tickets
            </Link>
          </div>
        </nav>
        <main className='flex flex-col px-12 py-24'>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/tickets';
import { Button } from '@/components/ui/button';

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
        <nav className='flex justify-between gap-5 border-b-2 py-2 px-4'>
          {/* fix /ticket/404 or make nav a component*/}
          <div>
            <Button asChild variant='ghost'>
              <Link href={homePath()}>
                <h1 className='text-lg font-semibold'>Ticket Bounty</h1>
              </Link>
            </Button>
          </div>
          <div>
            <Button asChild variant='outline'>
              <Link href={ticketsPath()}>Tickets</Link>
            </Button>
          </div>
        </nav>
        <main className='flex flex-col p-12'>{children}</main>
      </body>
    </html>
  );
}

//  className='font-bold text-lg'

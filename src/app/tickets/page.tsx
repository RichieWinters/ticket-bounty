import Link from 'next/link';
import clsx from 'clsx';
import { LucideCircleCheck, LucideFileText } from 'lucide-react';
import { initTickets } from '@/data';
import { ticketPath } from '@/tickets';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Heading } from '@/components/heading';

const STATUS_ICONS = {
  Open: <LucideFileText />,
  Done: <LucideCircleCheck />,
};

const TicketsPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Heading title='Tickets Page' description='Your tickets are in here' />

      <div className='flex flex-col items-center flex-1 gap-6 animate-fade-in'>
        {initTickets.map((ticket) => (
          <Card key={ticket.id} className='w-full max-w-[350px]'>
            <CardHeader>
              <CardTitle className='flex gap-x-2'>
                <span>{STATUS_ICONS[ticket.status]}</span>
                <span className='truncate'>{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span
                className={clsx('line-clamp-3 whitespace-break-spaces', {
                  'line-through': ticket.status === 'Done',
                })}
              >
                {ticket.content}
              </span>
            </CardContent>
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className='text-sm underline'>
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;

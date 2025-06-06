import Link from 'next/link';
import clsx from 'clsx';
import { ticketPath } from '@/tickets';
import { STATUS_ICONS } from '@/features/ticket/constants';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Ticket } from '../types';
import { LucideSquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const ticketButton = (
    <Button variant='outline' size='icon' asChild>
      <Link href={ticketPath(ticket.id)} className='text-sm'>
        <LucideSquareArrowOutUpRight className='h-4 w-4' />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx('flex gap-x-1 w-full', {
        'max-w-[420px]': !isDetail,
        'max-w-[620px]': isDetail,
      })}
    >
      <Card className='w-full '>
        <CardHeader>
          <CardTitle className='flex gap-x-2 text-lg items-center'>
            <span>{STATUS_ICONS[ticket.status]}</span>
            <span className='truncate'>{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx('whitespace-break-spaces', {
              'line-through': ticket.status === 'Done',
              'line-clamp-3': !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {isDetail ? null : <div className='flex flex-col gap-y-2'>{ticketButton}</div>}
    </div>
  );
};
export { TicketItem };

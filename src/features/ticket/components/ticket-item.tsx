'use client';

import { Ticket } from '@prisma/client';
import clsx from 'clsx';
import { LucideSquareArrowOutUpRight, LucideTrash } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { deleteTicket } from '@/features/actions/delete-ticket';
import { STATUS_ICONS } from '@/features/ticket/constants';
import { ticketPath } from '@/tickets';
import { useRouter } from 'next/navigation';

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const router = useRouter();
  const ticketButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)} className="text-sm">
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const handleDeleteTicket = async () => {
    await deleteTicket(ticket.id);
    router.refresh();
  };

  const deleteButton = (
    <Button variant="outline" size="icon" onClick={handleDeleteTicket}>
      <LucideTrash className="h-4 w-4" />
    </Button>
  );

  return (
    <div
      className={clsx('flex gap-x-1 w-full', {
        'max-w-[420px]': !isDetail,
        'max-w-[620px]': isDetail,
      })}
    >
      <Card className="w-full ">
        <CardHeader>
          <CardTitle className="flex gap-x-2 text-lg items-center">
            <span>{STATUS_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
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
      <div className="flex flex-col gap-y-2">
        {isDetail ? deleteButton : ticketButton}
      </div>
    </div>
  );
};
export { TicketItem };

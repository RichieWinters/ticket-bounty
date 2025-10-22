import { CardCompact } from '@/components/card-compact';

import { notFound } from 'next/navigation';

import { getTicket } from '@/features/ticket/queries/get-ticket';
import { TicketUpsertForm } from '@/features/ticket/components/ticket-upsert-form';

type TicketEditPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    return notFound();
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Edit Ticket"
        description="Edit an existing ticket"
        className="max-w-[420px] animate-fade-in"
        content={<TicketUpsertForm ticket={ticket} />}
      />
    </div>
  );
};

export default TicketEditPage;

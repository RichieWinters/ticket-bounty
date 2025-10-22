import { Suspense } from 'react';

import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { TicketCreateForm } from '@/features/ticket/components/ticket-create-form';
import { TicketList } from '@/features/ticket/components/ticket-list';

export const dynamic = 'force-dynamic';

const TicketsPage = () => {
  return (
    <div className="flex flex-col flex-1 gap-8">
      <Heading title="Tickets Page" description="Your tickets are in here" />

      <CardCompact
        title="New Ticket"
        description="Create a new ticket"
        className="max-w-[420px] self-center"
        content={<TicketCreateForm />}
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};
export default TicketsPage;

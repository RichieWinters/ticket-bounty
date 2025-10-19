import { Suspense } from 'react';

import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';

const TicketsPage = () => {
  return (
    <div className='flex flex-col flex-1 gap-8'>
      <Heading title='Tickets Page' description='Your tickets are in here' />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};
export default TicketsPage;

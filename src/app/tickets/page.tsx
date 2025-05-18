import { initTickets } from '@/data';
import { Heading } from '@/components/heading';
import { TicketItem } from '@/features/ticket/components/ticket-item';

const TicketsPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Heading title='Tickets Page' description='Your tickets are in here' />

      <div className='flex flex-col items-center flex-1 gap-6 animate-fade-in'>
        {initTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;

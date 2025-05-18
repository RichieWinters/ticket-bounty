import { initTickets } from '@/data';
import { Placeholder } from '@/components/placeholder';
import { TicketItem } from '@/features/ticket/components/ticket-item';

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

function TicketPage({ params }: TicketPageProps) {
  const ticket = initTickets.find((ticket) => ticket.id === params.ticketId);

  if (!ticket) {
    return <Placeholder label='Ticket not found' />;
  }

  return (
    <div className='flex justify-center animate-fade-in'>
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}
export default TicketPage;

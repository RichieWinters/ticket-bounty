import { initTickets } from '@/data';
import { Placeholder } from '@/components/placeholder';

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
    <div>
      <h2 className='text-lg'>{ticket.title}</h2>
      <p className='text-sm'>{ticket.content}</p>
    </div>
  );
}
export default TicketPage;

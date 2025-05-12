import { initTickets } from '@/data';

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

function TicketPage({ params }: TicketPageProps) {
  const ticket = initTickets.find((ticket) => ticket.id === params.ticketId);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div>
      <h2 className='text-lg'>{ticket.title}</h2>
      <p className='text-sm'>{ticket.content}</p>
    </div>
  );
}
export default TicketPage;

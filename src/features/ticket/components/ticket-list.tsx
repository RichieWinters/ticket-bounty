import { getTickets } from '../../queries/get-tickets';
import { TicketItem } from './ticket-item';

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className='flex flex-col items-center flex-1 gap-6 animate-fade-in'>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
export { TicketList };

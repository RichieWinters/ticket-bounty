import Link from 'next/link';
import { initTickets } from '@/data';
import { ticketPath } from '@/tickets';

const TicketsPage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Tickets Page</h2>
        <p className='text-sm'>Your tickets are in here</p>
      </div>

      <div className='flex flex-col items-center flex-1 gap-6'>
        {initTickets.map((ticket) => (
          <div
            key={ticket.id}
            className='w-full max-w-[350px] p-4 border border-neutral-300 rounded'
          >
            <h3 className='text-lg font-semibold truncate'>{ticket.title}</h3>
            <p className='text-sm truncate text-neutral-500'>{ticket.content}</p>

            <Link href={ticketPath(ticket.id)} className='text-sm underline'>
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;

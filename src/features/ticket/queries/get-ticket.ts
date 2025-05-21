import { initTickets } from '@/data';
import { Ticket } from '../types';

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // artificial delay

  const ticket = initTickets.find((ticket) => ticket.id === ticketId);

  return new Promise((resolve) => {
    resolve(ticket || null);
  });
};

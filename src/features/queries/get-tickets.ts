import { initTickets } from '@/data';
import { Ticket } from '../ticket/types';

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // artificial delay

  // throw new Error('Failed to fetch tickets');
  return new Promise((resolve) => {
    resolve(initTickets);
  });
};

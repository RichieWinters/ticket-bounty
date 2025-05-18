export type TicketStatus = 'Open' | 'Done';

export type Ticket = {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
};

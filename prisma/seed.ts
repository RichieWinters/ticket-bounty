import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tickets = [
  {
    id: crypto.randomUUID(),
    title: 'Ticket 1',
    content: "First ticket this is it. I'm from the database",
    status: 'Done' as const,
  },
  {
    id: crypto.randomUUID(),
    title: 'Ticket 2',
    content: "That's the second ticket. I'm from the database",
    status: 'Open' as const,
  },
  {
    id: crypto.randomUUID(),
    title: 'Ticket 3',
    content: "I'm the third ticket. And I'm from the database",
    status: 'Open' as const,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log('DB Seed: Started..');

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished in ${t1 - t0}ms`);
};

seed();

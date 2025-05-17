import Link from 'next/link';
import { homePath, ticketsPath } from '@/tickets';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between gap-5 border-b-2 py-2 px-4'>
        <div>
          <Button asChild variant='ghost'>
            <Link href={homePath()}>
              <h1 className='text-lg font-semibold'>Ticket Bounty</h1>
            </Link>
          </Button>
        </div>
        <div>
          <Button asChild variant='default'>
            <Link href={ticketsPath()}>Tickets</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};
export { Header };

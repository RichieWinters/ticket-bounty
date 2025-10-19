import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { homePath, ticketsPath } from '@/tickets';

import { ThemeSwitcher } from './theme/theme-switcher';

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between gap-5 border-b-2 py-2 px-4'>
        <div className='flex items-center gap-x-2'>
          <Button asChild variant='ghost'>
            <Link href={homePath()}>
              <h1 className='text-lg font-semibold'>Ticket Bounty</h1>
            </Link>
          </Button>
        </div>
        <div className='flex items-center gap-x-2'>
          <ThemeSwitcher />
          <Button asChild variant='default'>
            <Link href={ticketsPath()}>Tickets</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};
export { Header };

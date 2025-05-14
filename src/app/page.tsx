import Link from 'next/link';
import { ticketsPath } from '@/tickets';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Home Page </h2>
        <p className='text-sm'>Your starting point</p>
      </div>

      <div className='flex flex-col items-center flex-1'>
        <Link href={ticketsPath()} className='underline'>
          Go to tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

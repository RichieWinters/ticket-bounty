import Link from 'next/link';

import { Heading } from '@/components/heading';
import { ticketsPath } from '@/tickets';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Heading title='Home Page ' description='Your starting point' />

      <div className='flex flex-col items-center flex-1'>
        <Link href={ticketsPath()} className='underline'>
          Go to tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

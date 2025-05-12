import Link from 'next/link';
import { ticketsPath } from '@/tickets';

const HomePage = () => {
  return (
    <div>
      <h2>Home Page </h2>
      <Link href={ticketsPath()} className='underline'>
        Go to tickets
      </Link>
    </div>
  );
};

export default HomePage;

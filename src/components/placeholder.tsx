import { LucideTelescope } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceholderProps = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: React.ReactElement<any>;
};

const Placeholder = ({ label, icon = <LucideTelescope /> }: PlaceholderProps) => {
  return (
    <div className='flex flex-1 flex-col self-center items-center justify-center gap-y-2'>
      {cloneElement(icon, {
        className: 'w-16 h-16',
      })}
      <h2 className='text-lg text-center'>{label}</h2>
    </div>
  );
};
export { Placeholder };

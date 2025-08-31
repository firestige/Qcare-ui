import * as React from 'react';
import clsx from 'clsx';

export interface IndicatorProps {
  className?: string;
  icon: string;
  label: string;
  value: string | number;
}

const Indicator: React.FC<IndicatorProps> = props => {
  const { className, label, icon, value } = props;
  return (
    <div
      className={clsx(
        'rounded-lg bg-cyan-500 shadow-lg  shadow-cyan-500/50 h-full flex flex-col items-center justify-center gap-2 p-4',
        className
      )}
    >
      <div className="flex items-center justify-center">
        <span className={clsx(icon, 'text-2xl')} />
      </div>
      <div className="flex flex-row">
        <span className="text-xl">{label}</span>
        <span className="text-xl">{value}</span>
      </div>
    </div>
  );
};

export default Indicator;

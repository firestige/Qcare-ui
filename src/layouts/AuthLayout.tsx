import { Outlet } from 'react-router';
import * as React from 'react';
import StaticEyeball from '../components/eyeball/StaticEyeball.tsx';

const authLayout: React.FC = () => {
  return (
    <div className="flex flex-row w-screen">
      <div
        id="banner"
        className="w-[62%] bg-amber-500 h-screen flex items-center justify-center"
      >
        <div className="h-96 w-96">
          <StaticEyeball />
        </div>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default authLayout;

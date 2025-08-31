import * as React from 'react';
import ToggleButton from './ToggleButton.tsx';
import NavSection from './NavSection.tsx';
import SearchSection from './SearchSection.tsx';
import FunctionSection from './FunctionSection.tsx';

const Bar: React.FC = () => {
  return (
    <div id="appbar" className="h-16 w-full flex flex-row items-center">
      <ToggleButton />
      <NavSection />
      <div className="grow" />
      <SearchSection />
      <FunctionSection />
    </div>
  );
};

export default Bar;

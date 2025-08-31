import * as React from 'react';

const Section: React.FC<{ className?: string }> = props => {
  const { className } = props;
  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <button className="p-1 rounded-md transition-color w-12 h-12 flex items-center justify-center hover:bg-gray-700">
        <span className="icon-[line-md--bell] text-3xl text-white" />
      </button>
      <button className="p-1 rounded-md transition-color w-12 h-12 flex items-center justify-center hover:bg-gray-700">
        <span className="icon-[eos-icons--rotating-gear] text-3xl text-white" />
      </button>
      <button className="p-1 rounded-md transition-color w-12 h-12 flex items-center justify-center hover:bg-gray-700">
        <span className="icon-[line-md--person] text-3xl text-white" />
      </button>
    </div>
  );
};

export default Section;

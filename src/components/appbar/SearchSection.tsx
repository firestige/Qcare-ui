import * as React from 'react';

const Section: React.FC<{ className?: string }> = props => {
  const { className } = props;
  return (
    <div className={className}>
      <span className="icon-[line-md--search]" />
      <input placeholder="Search" />
    </div>
  );
};

export default Section;

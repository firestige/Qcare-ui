import * as React from 'react';
import { useLocation } from 'react-router';

const Section: React.FC<{ className?: string }> = props => {
  const { className } = props;
  const location = useLocation();
  return <div className={className}>{location.pathname}</div>;
};

export default Section;

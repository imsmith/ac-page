import React from 'react';

type Props = { children: React.ReactNode };

const Heading: React.FC<Props> = ({ children }) => {
  return <div className="text-6xl mb-4">{children}</div>;
};

export default Heading;

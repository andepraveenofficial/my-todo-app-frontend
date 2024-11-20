import React from 'react';
import Spinner from '../../library/loader/Spinner';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/50">
      <Spinner />
    </div>
  );
};

export default Loading;

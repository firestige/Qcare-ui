import React from 'react';

const RemoteTab: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-18 hover:border-2 hover:border-blue-400 focus:border-l-2 border-blue-400">
        1
      </div>
      <div className="w-full h-18 hover:border-2 hover:border-blue-400 focus:border-l-2">
        2
      </div>
      <div className="w-full h-18 hover:border-2 hover:border-blue-400 focus:border-l-2">
        3
      </div>
    </div>
  );
};
// 参考jupyter notebook的tab设计
export default RemoteTab;

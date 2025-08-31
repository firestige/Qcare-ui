import React, { useRef } from 'react';
import { useTabs } from '../../components/tab/useTabs.ts';

const Arthas: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { activeKey, setActiveKey, activeIndex } = useTabs(ref);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Arthas 多标签页演示</h1>
      <div>
        <div className="flex flex-row">
          <button
            className="w-8 bg-gray-400 active:bg-amber-50"
            onClick={() => setActiveKey('1')}
          >
            1
          </button>
          <button
            className="w-8 bg-gray-400 active:bg-amber-50"
            onClick={() => setActiveKey('2')}
          >
            2
          </button>
          <button
            className="w-8 bg-gray-400 active:bg-amber-50"
            onClick={() => setActiveKey('3')}
          >
            3
          </button>
        </div>
        <div ref={ref}>
          <div key="1">this is first tab</div>
          <div key="2">this is second tab</div>
          <div key="3">this is third tab</div>
        </div>
      </div>
    </div>
  );
};

export default Arthas;

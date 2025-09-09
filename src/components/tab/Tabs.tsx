import React from 'react';
import clsx from 'clsx';

export interface TabItemProps {
  'data-key'?: string;
  label?: string;
  closable?: boolean;
  Component?: React.ComponentType;
}

export interface TabsProps {
  className?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  onEdit?: (key: string, action: 'add' | 'remove') => void;
  items: TabItemProps[];
}

const Tabs: React.FC<TabsProps> = props => {
  const { className, activeKey, onChange, onEdit, items } = props;
  const c = clsx('grow', className);
  const findIndex = items.findIndex(item => item['data-key'] === activeKey);
  const renderPanel = () => {
    return items.map(item => {
      if (item['data-key'] === activeKey) {
        return (
          <div
            key={item['data-key']}
            className="py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
            onClick={() => onChange?.(item['data-key'] || '')}
          >
            <span className="text-xl">{item.label}</span>
          </div>
        );
      } else {
        return (
          <div
            key={item['data-key']}
            className="text-gray-200 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            onClick={() => onChange?.(item['data-key'] || '')}
          >
            <span className="text-xl">{item.label}</span>
          </div>
        );
      }
    });
  };

  const renderTab = () => {
    const idx = findIndex >= 0 ? findIndex : 0;
    const Item = items[idx]?.Component;
    if (Item) {
      return <Item />;
    } else {
      return null;
    }
  };
  return (
    <div className={c}>
      <nav className="flex flex-row flex-nowrap pl-2 gap-0.5 items-center">
        <div className="p-3 items-center">
          <button className="m-auto w-8 h-8 flex items-center justify-center rounded-xl text-gray-700 bg-gray-200 hover:text-gray-200 hover:bg-gray-400">
            <span
              id="drop"
              className="icon-[icon-park-outline--down] text-xl"
            />
          </button>
        </div>
        {renderPanel()}
      </nav>
      <div className="border-b-1 border-gray-600" />
      <div className="min-h-full rounded-xl p-2">{renderTab()}</div>
    </div>
  );
};

export default Tabs;

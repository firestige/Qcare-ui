import React from 'react';
import clsx from 'clsx';
import './tab.css';

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
    return items.map(item => (
      <div
        key={item['data-key']}
        className="h-8 tab"
        onClick={() => onChange?.(item['data-key'] || '')}
      >
        <span>{item.label}</span>
        {item.closable !== false && (
          <button
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              onEdit?.(item['data-key'] || '', 'remove');
            }}
          >
            x
          </button>
        )}
      </div>
    ));
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
      <div className="flex flex-row flex-nowrap pl-2 gap-0.5">
        <div className="w-6 h-6 rounded-md bg-gray-200">
          <span className="icon-[icon-park-outline--down] text-2xl text-gray-800" />
        </div>
        {renderPanel()}
      </div>
      <div className="bg-gray-300 min-h-full rounded-xl p-2">{renderTab()}</div>
    </div>
  );
};

export default Tabs;

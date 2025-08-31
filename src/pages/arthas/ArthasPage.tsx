import React from 'react';
import Tabs, { type TabItemProps } from '../../components/tab/Tabs.tsx';
import HomeTab from './HomeTab.tsx';
import RemoteTab from './RemoteTab.tsx';

const Arthas: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState('0');
  const [items, setItems] = React.useState<TabItemProps[]>([
    { 'data-key': '0', label: '首页', closable: false, Component: HomeTab },
  ]);
  const onEdit = (key: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(key);
    }
  };
  const add = () => {
    const newKey = `${items.length}`;
    const newItem = {
      key: newKey,
      label: `Tab ${newKey}`,
      Component: RemoteTab,
    };
    setItems([...items, newItem]);
    setActiveKey(newKey);
  };
  const remove = (key: string) => {
    // 关闭页面，如果关闭的是当前激活的页面，则激活前一个页面
    // 特殊的，0号页面不能关闭,它的closeable会一直是fasle
    // setItems(newItems);
    // setActiveKey(newActiveKey);
  };
  return (
    <Tabs
      className="m-2 p-1"
      activeKey={activeKey}
      onChange={setActiveKey}
      onEdit={onEdit}
      items={items}
    />
  );
};

export default Arthas;

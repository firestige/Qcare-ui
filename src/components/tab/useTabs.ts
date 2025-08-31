import { RefObject, useState } from 'react';

export function useTabs(
  ref: RefObject<HTMLElement>,
  defaultActiveKey?: string
) {
  const refs = Array.from(ref.current?.children || []).map(child => ({
    current: child as HTMLElement,
  }));
  const [activeKey, setActiveKey] = useState(defaultActiveKey || refs[0]?.key);

  const activeIndex = refs.findIndex(r => r.current?.key === activeKey);

  return { activeKey, setActiveKey, activeIndex };
}

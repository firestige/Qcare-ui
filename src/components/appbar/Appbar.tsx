import * as React from 'react';
import { motion } from 'motion/react';
import { useSidebarStore } from '../../store';

const Bar: React.FC = () => {
  const { isCollapsed, toggleSidebar } = useSidebarStore();
  return (
    <div id="appbar" className="h-16 w-full flex flex-row items-center">
      <button
        onClick={toggleSidebar}
        className="p-1 rounded-md transition-color w-12 h-12 flex items-center justify-center"
        aria-label={isCollapsed ? '展开侧边栏' : '收起侧边栏'}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* 展开状态图标 */}
          <motion.span
            className="icon-[line-md--menu-unfold-right] text-2xl absolute text-gray-400"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{
              opacity: isCollapsed ? 1 : 0,
              rotate: isCollapsed ? 0 : 90,
              scale: isCollapsed ? 1 : 0.8,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          />

          {/* 收起状态图标 */}
          <motion.span
            className="icon-[line-md--menu-fold-left] text-2xl absolute text-gray-400"
            initial={{ opacity: 1, rotate: 0 }}
            animate={{
              opacity: isCollapsed ? 0 : 1,
              rotate: isCollapsed ? -90 : 0,
              scale: isCollapsed ? 0.8 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          />
        </div>
      </button>
      Appbar
    </div>
  );
};

export default Bar;

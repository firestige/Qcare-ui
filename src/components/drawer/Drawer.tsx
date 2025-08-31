import * as React from 'react';
import { motion } from 'motion/react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react';
import { useSidebarStore } from '../../store';

const Drawer: React.FC = () => {
  const { isCollapsed } = useSidebarStore();
  const [activeTooltip, setActiveTooltip] = React.useState<string | null>(null);

  const sidebarWidth = isCollapsed ? 60 : 280;

  // 为收起状态的导航项提示框使用floating-ui
  const { refs, floatingStyles } = useFloating({
    open: !!activeTooltip,
    placement: 'right',
    middleware: [offset(10), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const navigationItems = [
    { name: '仪表板', icon: '📊', path: '/dashboard', id: 'dashboard' },
    { name: '用户管理', icon: '👥', path: '/users', id: 'users' },
    { name: '数据分析', icon: '📈', path: '/analytics', id: 'analytics' },
    { name: '设置', icon: '⚙️', path: '/settings', id: 'settings' },
    { name: '帮助', icon: '❓', path: '/help', id: 'help' },
  ];

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 h-screen bg-slate-900 text-white shadow-lg z-50 flex flex-col"
        initial={{ width: 280 }}
        animate={{ width: sidebarWidth }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* 顶部 Logo 和 Title 区域 */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              Q
            </div>
            <motion.span
              className="font-semibold text-lg whitespace-nowrap overflow-hidden"
              initial={{ opacity: 1, width: 'auto' }}
              animate={{
                opacity: isCollapsed ? 0 : 1,
                width: isCollapsed ? 0 : 'auto',
              }}
              transition={{ duration: 0.2 }}
            >
              Qcare
            </motion.span>
          </div>
        </div>

        {/* 中间导航区域 */}
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-2 px-2">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.path}
                href={item.path}
                ref={activeTooltip === item.id ? refs.setReference : undefined}
                className="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-slate-700 transition-colors group relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 2 }}
                onMouseEnter={() => isCollapsed && setActiveTooltip(item.id)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <motion.span
                  className="whitespace-nowrap overflow-hidden"
                  initial={{ opacity: 1, width: 'auto' }}
                  animate={{
                    opacity: isCollapsed ? 0 : 1,
                    width: isCollapsed ? 0 : 'auto',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
              </motion.a>
            ))}
          </nav>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-slate-700 p-4">
          <motion.div
            className="text-xs text-slate-400 text-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: isCollapsed ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-1">© 2025 Qcare</div>
            <div>All rights reserved</div>
          </motion.div>

          {/* 收起时显示简化版权信息 */}
          {isCollapsed && (
            <motion.div
              className="text-xs text-slate-400 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              ©
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* 使用floating-ui的悬浮提示框 */}
      {activeTooltip && isCollapsed && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap z-[60] pointer-events-none"
        >
          {navigationItems.find(item => item.id === activeTooltip)?.name}
          {/* 箭头指示器 */}
          <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-800" />
        </div>
      )}
    </>
  );
};

export default Drawer;

import * as React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* 左侧版权信息 */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-600">
            <span>© {currentYear} QCare. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Designed by Firestige</span>
          </div>
          {/* 底部附加信息 */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-400">
            <p>
              QCare - 一站式运维监控Debug平台 | Powered by React & TypeScript
            </p>
          </div>
          {/* 右侧备案和链接信息 */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-600">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
              onClick={e => e.preventDefault()}
            >
              隐私政策
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
              onClick={e => e.preventDefault()}
            >
              服务条款
            </a>
            <span className="hidden md:inline">|</span>
            <span>ICP备案号：京ICP备20xxxxxxxxx号</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Outlet } from 'react-router';
import { AppBar } from '../components/appbar';
import { SideDrawer } from '../components/drawer';
import { Footer } from '../components/footer';
import * as React from 'react';
import { useSidebarStore } from '../store';

const BaseLayout: React.FC = () => {
  const { isCollapsed } = useSidebarStore();
  return (
    <div className="w-screen h-screen flex flex-row">
      <SideDrawer />
      <div
        className={`flex grow flex-col min-h-screen transition-all duration-300 ${isCollapsed ? 'ml-[60px]' : 'ml-[280px]'}`}
      >
        <AppBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;

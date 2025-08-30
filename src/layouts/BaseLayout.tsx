import { Outlet } from 'react-router';
import { AppBar } from '../components/appbar';
import { SideDrawer } from '../components/drawer';
import { Footer } from '../components/footer';

const BaseLayout: React.FC = () => {
  return (
    <div>
      <AppBar />
      <SideDrawer />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default BaseLayout;

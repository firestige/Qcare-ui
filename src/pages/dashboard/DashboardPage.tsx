import * as React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import BaseIndicator from '../../components/widgets/indicators/BaseIndicator.tsx';

const ResponsiveGridLayout = WidthProvider(Responsive);
const Dashboard: React.FC = () => {
  const [layouts, _] = React.useState({
    lg: [
      { i: 'a', w: 2, x: 0, y: 1, h: 1 },
      { i: 'b', x: 2, y: 0, w: 2, h: 1 },
      { i: 'c', x: 4, y: 0, w: 2, h: 1 },
    ],
  });
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key="a">
        <BaseIndicator
          icon="icon-[mingcute--version-line]"
          label="版本"
          value="1.0.0"
        />
      </div>
      <div key="b"></div>
      <div key="c"></div>
    </ResponsiveGridLayout>
  );
};

export default Dashboard;

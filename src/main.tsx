import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import './index.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import router from './router.ts';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

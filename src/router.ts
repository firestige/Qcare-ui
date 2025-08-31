import { createBrowserRouter, redirect } from 'react-router';
import AuthLayout from './layouts/AuthLayout.tsx';
import BaseLayout from './layouts/BaseLayout.tsx';
import DashboardPage from './pages/dashboard/DashboardPage.tsx';
import ArthasPage from './pages/arthas/ArthasPage.tsx';
import RegisterPage from './pages/auth/RegisterPage.tsx';
import LoginPage from './pages/auth/LoginPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/dashboard'),
  },
  {
    Component: BaseLayout,
    children: [
      { path: '/dashboard', Component: DashboardPage },
      { path: '/arthas', Component: ArthasPage },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      { path: '/login', Component: LoginPage },
      { path: '/register', Component: RegisterPage },
    ],
  },
]);

export default router;

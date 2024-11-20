import { lazy } from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import MainLayout from '../app/layouts/MainLayout';
import { IRoute } from '../types/route.type';
import NotFound from '../app/pages/NotFound';

const Home = lazy(() => import('../app/pages/Home'));
const About = lazy(() => import('../app/pages/About'));
const SignIn = lazy(() => import('../app/pages/SignIn'));
const SignUp = lazy(() => import('../app/pages/SignUp'));
const Dashboard = lazy(() => import('../app/pages/Dashboard'));
const Unauthorized = lazy(() => import('../app/pages/Unauthorized'));

const router: IRoute[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <PublicRoutes />,
        children: [
          { path: '', element: <Home /> },
          { path: 'about', element: <About /> },

          { path: 'unauthorized', element: <Unauthorized /> },
        ],
      },
      {
        path: 'auth',
        children: [
          { path: 'signin', element: <SignIn /> },
          { path: 'signup', element: <SignUp /> },
        ],
      },
      {
        path: 'dashboard',
        element: <PrivateRoutes allowedRoles={['ADMIN']} />,
        children: [{ path: '', element: <Dashboard /> }],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default router;

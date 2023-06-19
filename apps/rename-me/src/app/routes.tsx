import { AppRoute } from './routes/AppRoutes';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Charts from './pages/Charts';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const routes: AppRoute[] = [
  {
    path: '/',
    element: <Home />,
    name: 'Home',
    show: true,
    protected: false,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    name: 'Dashboard (Protected)',
    show: true,
    protected: true,
  },
  {
    path: '/charts',
    element: <Charts />,
    name: 'Charts',
    show: true,
    protected: false,
  },
  {
    path: '/about',
    element: <About />,
    name: 'About',
    show: true,
    protected: false,
  },
  {
    path: '*',
    element: <NotFound />,
    show: false,
    protected: false,
  },
  {
    path: '/login',
    element: <Login />,
    show: false,
    protected: false,
  },
];

export { routes };

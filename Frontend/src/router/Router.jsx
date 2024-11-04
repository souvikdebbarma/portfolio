import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Hero from '../components/Hero/Hero';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
    ],
  },
]);
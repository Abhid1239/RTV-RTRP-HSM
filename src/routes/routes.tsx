import { createBrowserRouter } from 'react-router-dom';
import Login from '@features/auth/components/Login';
import Movies from '@pages/Movies';

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/movies',
        element: <Movies />
    },
    {
        path: '/',
        element: <Movies />
    }
    // Add more routes here
]); 
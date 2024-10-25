import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Categories from '../pages/Categories';
import Signup from '../pages/Signup';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import MyService from '../pages/Service';
import Partner from '../pages/Partnerbook';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute'; // Import ProtectedRoute
import Vendors from '../pages/VendorPage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Wrap with Layout
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'category',
        element: <Categories />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'service', // Make sure the path matches the correct case
        element: <MyService />,
      },
      {
        path: 'partner',
        element: <Partner />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },

      {
        path: 'Vendors',
        element: (
          <ProtectedRoute>
            <Vendors /> {/* Change this to your offerings component */}
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NotFoundPage from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from './utils/ProtectedRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Collection from './pages/Collection';
import Wallet from './pages/Wallet';

const router = createBrowserRouter([
  {
    path:'/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />
  },
  {
    path:'/signin',
    element: <SignIn />,
    errorElement: <NotFoundPage /> 
  },
  {
    path:'/signup',
    element: <SignUp />,
    errorElement: <NotFoundPage />
  },
  {
    path:'*',
    element: <ProtectedRoutes />,
    children: [
      {
        path:'balance',
        element: <Wallet />,
        errorElement: <NotFoundPage />,
      },
      {
        path:'dashboard',
        element: <Dashboard />,
        errorElement: <NotFoundPage />,
      },
      {
        path:'collection',
        element: <Collection />,
        errorElement: <NotFoundPage />,
      },

    ],

  }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <AuthProvider>
      <ToastContainer 
      position='top-right'
      autoClose={3000}/>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.Fragment>,
)

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login  from './Components/Login.jsx';
import Register from './Components/Register.jsx';
 axios.defaults.baseURL='https://task-management-be-8hx7.onrender.com';

const router= createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/app",
        element:<App/>
    }
])



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);

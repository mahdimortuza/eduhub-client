import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Layout/Main'
import ErrorElement from './Pages/ErrorElement/ErrorElement'
import Home from './Pages/Home/Home/Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admission from './Pages/Admission/Admission'
import MyCollage from './Pages/MyCollage/MyCollage'
import CollageDetails from './Pages/Home/CollageCard/CollageDetails'
import Collage from './Pages/Collage/Collage'
import Admit from './Pages/Admission/Admit'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Profile from './Pages/Profile/Profile'
import AuthProvider from './providers/AuthProvider'
import Private from './Route/Private'
import Secret from './Pages/Shared/Secret/Secret'
import UpdateSingleStudent from './Pages/Profile/UpdateSingleStudent'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "collage",
        element: <Collage />
      },
      {
        path: "collage/:id",
        element: <CollageDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/collages/${params.id}`)
      },
      {
        path: "admission",
        element: <Private><Admission /></Private>
      },
      {
        path: "admit/:id",
        element: <Admit />,
        loader: ({ params }) => fetch(`http://localhost:5000/collages/${params.id}`)
      },
      {
        path: "my-collage",
        element: <Private><MyCollage /></Private>
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "update/:id",
        element: <UpdateSingleStudent />,
        loader: ({params}) => fetch(`http://localhost:5000/students/${params.id}`)
      },
      {
        path: "secret",
        element: <Private><Secret></Secret></Private>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);